# レンタルサーバー用メール送信テンプレート

`form-handler.php` は、レンタルサーバーへ移行する際に使うメールフォーム処理です。

## 配置

レンタルサーバー上で、サイト公開ディレクトリの `/mail/form-handler.php` として配置してください。

例:

```text
public_html/
  mail/
    form-handler.php
```

## 本番前に変更する項目

`form-handler.php` の先頭付近にある以下を、本番用に変更してください。

```php
const ADMIN_EMAIL = 'test@gmail.com';
const FROM_EMAIL = 'no-reply@example.com';
const FROM_NAME = 'BLOOMIA';
```

## 役割

- 管理者宛の通知メール送信
- 入力者宛の自動返信メール送信
- 必須項目チェック
- 文字数チェック
- フリガナのカタカナチェック
- メールアドレス形式チェック
- よくあるメールドメイン入力ミスの確認

現在のVercel環境ではPHPは実行されません。レンタルサーバー移行時に使用してください。
