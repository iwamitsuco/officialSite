const adTypes = [
  {
    title: "検索広告",
    description: "Googleなどで検索した人に、検索結果の上部や下部へ表示される広告です。",
    point: "「今すぐ探している人」に届けやすい",
    visual: "search"
  },
  {
    title: "ディスプレイ広告",
    description: "Webサイトやアプリの広告枠に、画像やバナーとして表示される広告です。",
    point: "まだ知らない人に認知してもらいやすい",
    visual: "display"
  },
  {
    title: "SNS広告",
    description: "Instagram、Facebook、LINEなどの投稿欄やタイムラインに表示される広告です。",
    point: "興味や属性に合わせて届けやすい",
    visual: "social"
  }
];

function AdVisual({ type }: { type: string }) {
  if (type === "search") {
    return (
      <div className="flex h-[220px] flex-col justify-center rounded-lg bg-white p-4 ring-1 ring-apple-border">
        <div className="rounded-full bg-apple-gray px-4 py-2 text-xs font-semibold text-apple-sub">ホームページ制作</div>
        <div className="mt-4 rounded-lg border border-apple-blue bg-blue-50 p-3">
          <p className="text-xs font-semibold text-apple-blue">広告</p>
          <p className="mt-1 text-sm font-semibold text-apple-text">事業に合うホームページ制作</p>
          <p className="mt-1 text-xs text-apple-sub">検索結果の上部に表示</p>
        </div>
        <div className="mt-3 rounded-lg bg-apple-gray p-3">
          <div className="h-2 w-4/5 rounded-full bg-gray-300" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-gray-300" />
        </div>
      </div>
    );
  }

  if (type === "display") {
    return (
      <div className="flex h-[220px] flex-col justify-center rounded-lg bg-white p-4 ring-1 ring-apple-border">
        <div className="grid grid-cols-[1fr_112px] gap-3">
          <div className="space-y-2">
            <div className="h-3 w-4/5 rounded-full bg-gray-300" />
            <div className="h-3 w-full rounded-full bg-gray-200" />
            <div className="h-3 w-3/5 rounded-full bg-gray-200" />
            <div className="mt-4 h-16 rounded-lg bg-apple-gray" />
          </div>
          <div className="rounded-lg bg-blue-50 p-3 ring-1 ring-blue-100">
            <p className="text-xs font-semibold text-apple-blue">広告枠</p>
            <div className="mt-3 h-12 rounded-lg bg-apple-blue/20" />
            <p className="mt-2 text-xs font-semibold text-apple-text">画像で訴求</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[220px] flex-col justify-center rounded-lg bg-white p-4 ring-1 ring-apple-border">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-apple-blue/15" />
        <div>
          <div className="h-2 w-24 rounded-full bg-gray-300" />
          <div className="mt-2 h-2 w-16 rounded-full bg-gray-200" />
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100">
        <p className="text-xs font-semibold text-apple-blue">Sponsored</p>
        <p className="mt-2 text-sm font-semibold text-apple-text">投稿の間に自然に表示</p>
        <div className="mt-3 h-20 rounded-lg bg-white" />
      </div>
    </div>
  );
}

export function WebAdTypesSection() {
  return (
    <section className="section-space">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Web Advertising</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-apple-text md:text-[40px]">
            Web広告は、表示される場所によって役割が変わります。
          </h2>
          <p className="lead mt-5">
            検索している人に出す広告、Webサイト上に出す画像広告、SNSの投稿欄に出す広告など、目的に合わせて使い分けます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {adTypes.map((adType) => (
            <article className="flex h-full flex-col rounded-lg border border-apple-border bg-white p-6 shadow-sm" key={adType.title}>
              <AdVisual type={adType.visual} />
              <h3 className="mt-6 text-xl font-semibold text-apple-text">{adType.title}</h3>
              <p className="mt-3 text-sm leading-7 text-apple-sub">{adType.description}</p>
              <p className="mt-4 rounded-lg bg-apple-gray p-3 text-sm font-semibold text-apple-text">{adType.point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
