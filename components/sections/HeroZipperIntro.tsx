export function HeroZipperIntro() {
  return (
    <div className="hero-zipper-intro" aria-hidden="true">
      <div className="hero-zipper-screen" />
      <div className="hero-zipper-track">
        <div className="hero-zipper-tape hero-zipper-tape-top" />
        <div className="hero-zipper-tape hero-zipper-tape-bottom" />
        <div className="hero-zipper-teeth hero-zipper-teeth-top" />
        <div className="hero-zipper-teeth hero-zipper-teeth-bottom" />
        <div className="hero-zipper-pull">
          <span className="hero-zipper-slider" />
          <span className="hero-zipper-ring" />
        </div>
      </div>
    </div>
  );
}
