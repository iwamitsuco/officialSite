export function HeroZipperIntro() {
  return (
    <div className="hero-zipper-intro" aria-hidden="true">
      <div className="hero-zipper-panel hero-zipper-panel-left" />
      <div className="hero-zipper-panel hero-zipper-panel-right" />
      <div className="hero-zipper-track">
        <div className="hero-zipper-tape hero-zipper-tape-left" />
        <div className="hero-zipper-tape hero-zipper-tape-right" />
        <div className="hero-zipper-teeth hero-zipper-teeth-left" />
        <div className="hero-zipper-teeth hero-zipper-teeth-right" />
        <div className="hero-zipper-pull">
          <span className="hero-zipper-slider" />
          <span className="hero-zipper-ring" />
        </div>
      </div>
    </div>
  );
}
