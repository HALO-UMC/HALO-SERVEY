import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Brand from "./Brand";
import HeroVisual from "./HeroVisual";

export default function IntroScreen({ onStart, hasDraft, onResume }) {
  return (
    <motion.section
      className="screen intro-screen"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
    >
      <Brand />

      <div className="hero hero--service">
        <div className="hero__copy">
          <span className="eyebrow">부모님을 다시 만나는 열 번의 안녕</span>
          <h1>부모님에 대해<br />얼마나 알고 있나요?</h1>
          <p>
            익숙해서 미처 묻지 못했던 질문을 따라가며<br />
            지금의 부모님을 천천히 떠올려봅니다.
          </p>
        </div>
        <HeroVisual />
      </div>

      <div className="intro-message">
        <strong>열 개의 질문 끝에서</strong>
        <p>지금 부모님과 시작하기 좋은 스토리북을 만나보세요.</p>
      </div>

      {hasDraft && (
        <button className="resume-card" type="button" onClick={onResume}>
          <div>
            <span>남겨둔 페이지가 있어요</span>
            <strong>이어서 답하기</strong>
          </div>
          <ArrowRight size={21} />
        </button>
      )}

      <button className="primary-button" type="button" onClick={onStart}>
        부모님을 떠올려볼까요
        <ArrowRight size={20} />
      </button>
    </motion.section>
  );
}
