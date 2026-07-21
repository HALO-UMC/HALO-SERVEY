import { motion } from "framer-motion";
import { Check, Circle, CircleDotDashed } from "lucide-react";
import ProgressHeader from "./ProgressHeader";
import { ANSWER_OPTIONS } from "../data/questions";

const ICONS = {
  2: Check,
  1: CircleDotDashed,
  0: Circle,
};

export default function QuestionScreen({
  question,
  index,
  total,
  selectedScore,
  onAnswer,
  onBack,
}) {
  return (
    <motion.section
      className="screen question-screen"
      key={question.id}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
    >
      <ProgressHeader current={index + 1} total={total} onBack={onBack} />

      <motion.div className="question-card" initial={{ scale: 0.99 }} animate={{ scale: 1 }}>
        <span className="question-card__category">{question.category}</span>
        <h2>{question.title}</h2>
        <p>{question.helper}</p>
      </motion.div>

      <div className="answer-list">
        {ANSWER_OPTIONS.map((option, optionIndex) => {
          const Icon = ICONS[option.score];
          return (
            <motion.button
              key={option.score}
              className={`answer-card ${selectedScore === option.score ? "answer-card--selected" : ""}`}
              type="button"
              onClick={() => onAnswer(option.score)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: optionIndex * 0.05 }}
              whileTap={{ scale: 0.985 }}
            >
              <span className="answer-card__icon"><Icon size={19} /></span>
              <span className="answer-card__copy">
                <strong>{option.label}</strong>
                <small>{option.description}</small>
              </span>
              {selectedScore === option.score && (
                <span className="answer-card__check"><Check size={16} /></span>
              )}
            </motion.button>
          );
        })}
      </div>

      <p className="question-footnote">
        떠오르지 않아도 괜찮아요. 그 질문이 새로운 이야기의 시작이 됩니다.
      </p>
    </motion.section>
  );
}
