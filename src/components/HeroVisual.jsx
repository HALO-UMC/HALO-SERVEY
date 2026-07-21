import AssetImage from "./AssetImage";
import { ASSETS } from "../data/assets";

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />
      <AssetImage
        src={ASSETS.introCharacter}
        alt=""
        className="hero-visual__image"
        fallback={<div className="hero-visual__fallback">안녕</div>}
      />
    </div>
  );
}
