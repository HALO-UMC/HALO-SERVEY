import AssetImage from "./AssetImage";
import { ASSETS } from "../data/assets";

export default function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <AssetImage
        src={ASSETS.logo}
        alt="HALO"
        className="brand__logo"
        fallback={
          <>
            <div className="brand__mark" aria-hidden="true">H</div>
            <span>HALO</span>
          </>
        }
      />
    </div>
  );
}
