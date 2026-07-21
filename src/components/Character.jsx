import AssetImage from "./AssetImage";
import { THEME_CHARACTER_IMAGES } from "../data/assets";

function CssCharacter({ theme, size }) {
  return (
    <div
      className={`character character--${size}`}
      style={{
        "--character-color": theme.color,
        "--character-soft": theme.softColor,
      }}
      aria-hidden="true"
    >
      <span className="character__ear character__ear--left" />
      <span className="character__ear character__ear--right" />
      <span className="character__face">
        <i className="character__eye character__eye--left" />
        <i className="character__eye character__eye--right" />
        <i className="character__mouth" />
      </span>
      <strong>{theme.character}</strong>
    </div>
  );
}

export default function Character({ theme, size = "large" }) {
  return (
    <AssetImage
      src={THEME_CHARACTER_IMAGES[theme.id]}
      alt={`${theme.name} 캐릭터`}
      className={`character-image character-image--${size}`}
      fallback={<CssCharacter theme={theme} size={size} />}
    />
  );
}
