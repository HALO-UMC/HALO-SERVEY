import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clipboard,
  ExternalLink,
  RotateCcw,
  Share2,
  Sparkles,
} from "lucide-react";
import Brand from "./Brand";
import Character from "./Character";

export default function ResultScreen({
  score,
  resultCopy,
  theme,
  secondaryTheme,
  reason,
  note,
  resultCode,
  onShowStaff,
  onRestart,
}) {
  async function handleShare() {
    const text = `HALO 설문 결과: ${theme.name}\n${theme.firstQuestion}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "HALO 스토리북 추천",
          text,
        });
        return;
      }

      await navigator.clipboard.writeText(text);
      window.alert("추천 결과를 클립보드에 복사했습니다.");
    } catch {
      // 사용자가 공유 창을 닫은 경우 별도 처리하지 않음
    }
  }

  return (
    <motion.section
      className="screen result-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="result-header">
        <Brand compact />
        <span className="result-code">{resultCode}</span>
      </div>

      <motion.div
        className="result-summary"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">나의 부모님 이해도</span>
        <div className="score">
          <strong>{score}</strong>
          <span>/ 20</span>
        </div>
        <h1>{resultCopy.title}</h1>
        <p>{resultCopy.description}</p>
      </motion.div>

      <motion.div
        className="recommend-card"
        style={{
          "--theme": theme.color,
          "--theme-soft": theme.softColor,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="recommend-card__top">
          <div>
            <span>
              <Sparkles size={14} /> 지금 시작하기 좋은 스토리북
            </span>
            <h2>{theme.name}</h2>
          </div>
          <Character theme={theme} />
        </div>

        <p>{theme.description}</p>

        <div className="recommend-card__reason">
          <strong>이 테마를 추천한 이유</strong>
          <span>{reason}</span>
        </div>
      </motion.div>

      <div className="first-question-card">
        <span>
          <BookOpen size={16} /> 오늘의 첫 번째 질문
        </span>
        <strong>{theme.firstQuestion}</strong>
      </div>

      {note.trim() && (
        <div className="my-question-card">
          <span>내가 직접 남긴 질문</span>
          <p>“{note.trim()}”</p>
        </div>
      )}

      {secondaryTheme && (
        <div className="secondary-theme">
          <span>함께 보면 좋은 이야기</span>
          <strong>{secondaryTheme.name}</strong>
          <p>{secondaryTheme.description}</p>
        </div>
      )}

      <div className="result-actions">
        <button className="primary-button" type="button" onClick={onShowStaff}>
          진행자에게 결과 보여주기
          <ArrowRight size={20} />
        </button>

        <button className="secondary-button" type="button" onClick={handleShare}>
          <Share2 size={18} />
          결과 공유하기
        </button>

        <button className="text-button" type="button" onClick={onRestart}>
          <RotateCcw size={16} />
          처음부터 다시 하기
        </button>
      </div>

      <p className="privacy-copy">점수는 관계의 좋고 나쁨을 판단하지 않습니다.</p>
    </motion.section>
  );
}