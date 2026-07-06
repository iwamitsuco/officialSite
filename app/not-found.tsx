import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-site max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-[56px]">ページが見つかりません</h1>
        <p className="lead mt-5">URLをご確認いただくか、トップページからお探しください。</p>
        <Link className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-apple-blue px-5 text-sm font-semibold text-white" href="/">
          TOPへ戻る
        </Link>
      </div>
    </section>
  );
}
