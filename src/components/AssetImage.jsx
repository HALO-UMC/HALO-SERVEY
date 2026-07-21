import { useState } from "react";

export default function AssetImage({ src, fallback = null, alt = "", className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return fallback;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      draggable="false"
    />
  );
}
