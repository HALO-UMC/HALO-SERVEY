import { ChevronLeft } from "lucide-react";

export default function ProgressHeader({
  current,
  total,
  onBack,
  label = "부모님을 떠올리는 중",
}) {
  const progress = Math.round((current / total) * 100);

  return (
    <header className="progress-header">
      <button className="icon-button" onClick={onBack} type="button" aria-label="이전">
        <ChevronLeft size={22} />
      </button>

      <div className="progress-header__main">
        <div className="progress-header__row">
          <span>{label}</span>
          <strong>
            {current} / {total}
          </strong>
        </div>

        <div className="progress-track" aria-label={`진행률 ${progress}%`}>
          <div className="progress-value" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </header>
  );
}