const stats = [
  { label: "Web", value: "Site" },
  { label: "Ads", value: "Growth" },
  { label: "DX", value: "Flow" }
];

export function HeroZipperIntro() {
  return (
    <div className="hero-zipper-intro" aria-hidden="true">
      <div className="hero-zipper-screen">
        <div className="hero-zipper-window">
          <div className="flex items-center gap-2 border-b border-apple-border px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-auto h-2 w-16 rounded-full bg-slate-200" />
          </div>
          <div className="grid gap-6 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div>
              <p className="text-sm font-semibold text-apple-blue">Digital Support</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-apple-text md:text-4xl">
                Webと業務を
                <br />
                ひとつの流れに。
              </p>
              <div className="mt-6 space-y-3">
                <span className="block h-3 w-4/5 rounded-full bg-slate-200" />
                <span className="block h-3 w-2/3 rounded-full bg-slate-200" />
                <span className="block h-11 w-36 rounded-full bg-apple-blue" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                <div className="h-28 rounded-lg bg-white shadow-sm">
                  <div className="flex h-full items-end gap-3 p-5">
                    <span className="h-10 flex-1 rounded-t-lg bg-blue-200" />
                    <span className="h-16 flex-1 rounded-t-lg bg-blue-300" />
                    <span className="h-24 flex-1 rounded-t-lg bg-apple-blue" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div className="rounded-lg border border-apple-border bg-white p-4 shadow-sm" key={item.label}>
                    <p className="text-xs font-semibold text-apple-sub">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-apple-text">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-zipper-track">
        <div className="hero-zipper-teeth" />
        <div className="hero-zipper-pull">
          <span />
        </div>
      </div>
    </div>
  );
}
