# HALO 로고·캐릭터·로티 적용 방법

## 1. 파일을 넣는 위치

```text
public/
└─ assets/
   ├─ logo/
   │  └─ halo-logo.svg
   ├─ characters/
   │  ├─ halo-main.svg
   │  ├─ old-you.svg
   │  ├─ manual.svg
   │  ├─ temperature.svg
   │  ├─ taste.svg
   │  ├─ walking.svg
   │  ├─ first-care.svg
   │  ├─ birthday.svg
   │  ├─ family-photo.svg
   │  ├─ reaching.svg
   │  └─ fan.svg
   └─ lottie/
      └─ intro.lottie
```

현재는 같은 이름의 임시 SVG가 들어 있습니다. 실제 파일이 SVG라면 같은 파일명으로 덮어쓰면 코드 수정 없이 반영됩니다.

PNG 또는 WebP를 사용할 경우 `src/data/assets.js`에서 확장자만 변경하세요.

```js
export const ASSETS = {
  logo: "/assets/logo/halo-logo.png",
  introCharacter: "/assets/characters/halo-main.webp",
  introLottie: "/assets/lottie/intro.lottie",
};
```

## 2. 로고 권장 규격

- SVG 권장
- 가로형 로고: 투명 배경
- 화면에서 약 148×38px 안에 표시
- 로고 주변 여백을 이미지 파일 안에 과하게 넣지 않기

## 3. 캐릭터 이미지 권장 규격

- PNG 또는 WebP
- 투명 배경
- 세로형 비율 약 4:5
- 권장 원본 크기: 800×1000px 이상
- 모든 테마 캐릭터의 캔버스 크기와 기준선을 동일하게 맞추기

결과 화면에서는 `src/data/assets.js`의 `THEME_CHARACTER_IMAGES`와 테마 ID가 연결됩니다.

## 4. 로티 파일 연결

### 패키지 설치

```bash
npm install @lottiefiles/dotlottie-react
```

### 컴포넌트 만들기

`src/examples/HaloLottie.example.jsx`를 참고해 `src/components/HaloLottie.jsx`를 만드세요.

```jsx
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HaloLottie() {
  return (
    <DotLottieReact
      src="/assets/lottie/intro.lottie"
      loop
      autoplay
      className="hero-visual__lottie"
    />
  );
}
```

### 첫 화면에 적용

`src/components/HeroVisual.jsx`의 `AssetImage` 부분을 다음과 같이 교체합니다.

```jsx
import HaloLottie from "./HaloLottie";

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />
      <HaloLottie />
    </div>
  );
}
```

`src/styles.css`에 다음 스타일을 추가합니다.

```css
.hero-visual__lottie {
  position: relative;
  z-index: 1;
  width: 170px;
  height: 220px;
}
```

## 5. 파일명만 관리하는 곳

모든 이미지 경로는 `src/data/assets.js`에 모아두었습니다. 이미지가 바뀔 때 각 화면 컴포넌트를 수정하지 말고 이 파일만 수정하세요.

## 6. 주의사항

- `public` 폴더 안 파일은 JSX에서 `/assets/...`처럼 `/`부터 작성합니다.
- `public/assets/logo/halo-logo.svg`를 `/public/assets/...`로 쓰면 안 됩니다.
- 파일명의 대문자와 소문자를 일치시키세요. Windows에서는 보여도 배포 서버에서 깨질 수 있습니다.
- 로티 애니메이션은 무한 반복이 자연스러운 짧은 모션으로 제작하는 것이 좋습니다.
- 캐릭터 이미지 안에 배경색을 넣지 말고 투명 배경으로 내보내세요.
