import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";
import Character from "./Character";

export default function StaffScreen({
  score,
  theme,
  resultCode,
  onClose,
  onFinish,
}) {
  return (
    <motion.section
      className="screen staff-screen"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="staff-panel">
        <span className="staff-panel__label">HALO BOOTH RESULT</span>
        <Character theme={theme} size="staff" />

        <h1>{theme.name}</h1>
        <p>위 테마의 스토리북 포토카드를 전달해 주세요.</p>

        <div className="staff-panel__meta">
          <span>
            이해도 점수 <strong>{score} / 20</strong>
          </span>
          <span>
            결과 코드 <strong>{resultCode}</strong>
          </span>
        </div>

        <button className="primary-button" type="button" onClick={onClose}>
          <CheckCircle2 size={20} />
          방문자 결과로 돌아가기
        </button>

        <button className="secondary-button" type="button" onClick={onFinish}>
          <RotateCcw size={18} />
          굿즈 전달 완료 · 다음 방문자
        </button>
      </div>
    </motion.section>
  );
}