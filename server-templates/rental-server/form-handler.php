<?php
declare(strict_types=1);

// Rental-server mail endpoint for BLOOMIA.
// Upload this file as /mail/form-handler.php and update the addresses below before production use.

mb_language('Japanese');
mb_internal_encoding('UTF-8');

const ADMIN_EMAIL = 'test@gmail.com';
const FROM_EMAIL = 'no-reply@example.com';
const FROM_NAME = 'BLOOMIA';

$fieldLimits = [
    'company' => 100,
    'name' => 50,
    'furigana' => 50,
    'email' => 254,
    'tel' => 20,
    'message' => 5000,
];

$knownDomainTypos = [
    'gmai.com' => 'gmail.com',
    'gmial.com' => 'gmail.com',
    'gmail.con' => 'gmail.com',
    'gmail.co' => 'gmail.com',
    'gmailcom' => 'gmail.com',
    'yahoo.co.jo' => 'yahoo.co.jp',
    'yahoo.ne.jp' => 'yahoo.co.jp',
    'yaho.co.jp' => 'yahoo.co.jp',
    'icloud.con' => 'icloud.com',
    'outlook.con' => 'outlook.com',
    'hotmai.com' => 'hotmail.com',
    'hotmal.com' => 'hotmail.com',
];

function respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function post_value(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

function validate_length(string $key, string $value, array $fieldLimits): bool
{
    return mb_strlen($value) <= ($fieldLimits[$key] ?? 10000);
}

function suggest_email(string $email, array $knownDomainTypos): ?string
{
    $parts = explode('@', strtolower(trim($email)));
    if (count($parts) !== 2 || $parts[0] === '' || $parts[1] === '') {
        return null;
    }

    [$localPart, $domain] = $parts;
    return isset($knownDomainTypos[$domain]) ? $localPart . '@' . $knownDomainTypos[$domain] : null;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'errors' => ['POSTで送信してください。']]);
}

$formType = post_value('form_type');
$company = post_value('company');
$name = post_value('name');
$furigana = post_value('furigana');
$email = post_value('email');
$tel = post_value('tel');
$service = post_value('service');
$inquiryType = post_value('type');
$message = post_value('message');
$privacy = post_value('privacy');

$errors = [];
if ($name === '') {
    $errors[] = 'お名前を入力してください。';
}
if ($furigana === '') {
    $errors[] = 'フリガナを入力してください。';
}
if ($email === '') {
    $errors[] = 'メールアドレスを入力してください。';
}
if ($formType === 'contact' && $message === '') {
    $errors[] = 'お問い合わせ内容を入力してください。';
}
if ($privacy !== 'on' && $privacy !== '1') {
    $errors[] = '個人情報の取り扱いに同意してください。';
}

foreach (['company' => $company, 'name' => $name, 'furigana' => $furigana, 'email' => $email, 'tel' => $tel, 'message' => $message] as $key => $value) {
    if (!validate_length($key, $value, $fieldLimits)) {
        $errors[] = '入力文字数が上限を超えています。';
        break;
    }
}

if ($furigana !== '' && !preg_match('/^[ァ-ヶー\s　]+$/u', $furigana)) {
    $errors[] = 'フリガナはカタカナで入力してください。';
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = '正しいメールアドレス形式で入力してください。';
}

$suggestedEmail = $email !== '' ? suggest_email($email, $knownDomainTypos) : null;
if ($suggestedEmail !== null && post_value('email_confirmed') !== '1') {
    respond(422, [
        'ok' => false,
        'errors' => ['メールアドレスは「' . $suggestedEmail . '」ではありませんか？'],
        'suggested_email' => $suggestedEmail,
    ]);
}

if ($errors !== []) {
    respond(422, ['ok' => false, 'errors' => $errors]);
}

$submittedAt = date('Y-m-d H:i:s');
$adminSubject = $formType === 'download' ? '【BLOOMIA】資料ダウンロードがありました' : '【BLOOMIA】お問い合わせがありました';
$userSubject = $formType === 'download' ? '【BLOOMIA】資料ダウンロードを受け付けました' : '【BLOOMIA】お問い合わせを受け付けました';

$bodyLines = [
    '送信日時: ' . $submittedAt,
    'フォーム種別: ' . ($formType === 'download' ? '資料ダウンロード' : '無料相談'),
    '会社名: ' . ($company !== '' ? $company : '未入力'),
    'お名前: ' . $name,
    'フリガナ: ' . $furigana,
    'メールアドレス: ' . $email,
    '電話番号: ' . ($tel !== '' ? $tel : '未入力'),
    '相談内容: ' . ($inquiryType !== '' ? $inquiryType : '未選択'),
    '興味のあるサービス: ' . ($service !== '' ? $service : '未選択'),
    '',
    'お問い合わせ内容:',
    $message !== '' ? $message : '未入力',
];
$adminBody = implode("\n", $bodyLines);

$userBody = implode("\n", [
    $name . ' 様',
    '',
    'このたびはBLOOMIAへご連絡いただきありがとうございます。',
    '以下の内容で受け付けました。',
    '',
    $adminBody,
    '',
    '内容を確認のうえ、担当者よりご連絡いたします。',
    '',
    'BLOOMIA',
]);

$headers = [
    'From: ' . mb_encode_mimeheader(FROM_NAME) . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$adminSent = mb_send_mail(ADMIN_EMAIL, $adminSubject, $adminBody, implode("\r\n", $headers));
$userSent = mb_send_mail($email, $userSubject, $userBody, implode("\r\n", $headers));

if (!$adminSent || !$userSent) {
    respond(500, ['ok' => false, 'errors' => ['メール送信に失敗しました。時間をおいて再度お試しください。']]);
}

respond(200, ['ok' => true]);
