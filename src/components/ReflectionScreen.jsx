import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ProgressHeader from "./ProgressHeader";
import { REFLECTION_OPTIONS } from "../data/questions";

export default function ReflectionScreen({
  selected,
  note,
  onSelect,
  onNoteChange,
  onBack,
  onComplete,
}) {
  return (
    <motion.section
      className="screen reflection-screen"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <ProgressHeader
        current={11}
        total={11}
        onBack={onBack}
        label="마지막으로 마음을 고르는 중"
      />

      <div className="question-card question-card--reflection">
        <span className="question-card__category">
          <Sparkles size={15} /> 마지막 질문
        </span>
        <h2>오늘 가장 오래 마음에 남은 질문은 무엇인가요?</h2>
        <p>점수와 함께 최종 스토리북을 추천하는 데 사용합니다.</p>
      </div>

      <div className="reflection-grid">
        {REFLECTION_OPTIONS.map((option) => (
          <button
            key={option.id}
            className={`reflection-chip ${
              selected === option.id ? "reflection-chip--active" : ""
            }`}
            type="button"
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <label className="note-field">
        <span>오늘 부모님께 가장 먼저 묻고 싶은 한 가지</span>
        <textarea
          value={note}
          onChange={(event) => onNoteChange(event.target.value)}
          maxLength={80}
          placeholder="예: 엄마는 내 나이였을 때 무엇이 가장 두려웠어?"
        />
        <small>{note.length} / 80</small>
      </label>

      <button
        className="primary-button"
        type="button"
        onClick={onComplete}
        disabled={!selected}
      >
        나의 스토리북 확인하기
        <ArrowRight size={20} />
      </button>
    </motion.section>
  );
}