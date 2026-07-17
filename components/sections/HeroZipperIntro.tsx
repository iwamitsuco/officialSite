const petals = [
  { label: "WEB", className: "hero-zipper-petal hero-zipper-petal-web" },
  { label: "SYSTEM", className: "hero-zipper-petal hero-zipper-petal-system" },
  { label: "DESIGN", className: "hero-zipper-petal hero-zipper-petal-design" },
  { label: "AD", className: "hero-zipper-petal hero-zipper-petal-ad" },
  { label: "APP", className: "hero-zipper-petal hero-zipper-petal-app" }
];

export function HeroZipperIntro() {
  return (
    <div className="hero-zipper-intro" aria-hidden="true">
      <div className="hero-zipper-screen">
        <div className="hero-zipper-stage">
          <div className="hero-zipper-glow" />
          <div className="hero-zipper-orbit hero-zipper-orbit-one" />
          <div className="hero-zipper-orbit hero-zipper-orbit-two" />
          <div className="hero-zipper-nav">
            <div>
              <p className="hero-zipper-brand">BLOOMIA</p>
              <p className="hero-zipper-studio">DIGITAL STUDIO</p>
            </div>
            <div className="hero-zipper-menu">
              <span>私たちについて</span>
              <span>サービス</span>
              <span>実績</span>
              <span>ブログ</span>
            </div>
            <span className="hero-zipper-outline">相談する</span>
          </div>
          <div className="hero-zipper-copy">
            <p className="hero-zipper-kicker">WEB ・ SYSTEM ・ DESIGN ・ AD</p>
            <p className="hero-zipper-title">
              つくる力を、ひとつに。
              <br />
              事業に、花を咲かせる。
            </p>
            <p className="hero-zipper-lead">
              Web制作からシステム開発、広告運用、デザインまで。
              <br />
              分断しないチームが、成果につながる体験を設計します。
            </p>
            <div className="hero-zipper-actions">
              <span className="hero-zipper-gold-button">メールで相談する</span>
              <span className="hero-zipper-text-link">私たちにできること</span>
            </div>
          </div>
          <div className="hero-zipper-flower">
            <div className="hero-zipper-center" />
            {petals.map((petal) => (
              <div className={petal.className} key={petal.label}>
                <span>{petal.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-zipper-badges">
            <span>宮崎から全国対応</span>
            <span>企画から運用まで一貫支援</span>
            <span>5つの専門領域</span>
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
