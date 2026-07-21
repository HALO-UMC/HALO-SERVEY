// 1) npm install @lottiefiles/dotlottie-react
// 2) 이 파일을 HaloLottie.jsx로 이름 변경하고 components 폴더로 옮기세요.

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HaloLottie({
  src = "/assets/lottie/intro.lottie",
  className = "hero-visual__lottie",
}) {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      className={className}
    />
  );
}
