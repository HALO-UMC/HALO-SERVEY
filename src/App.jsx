import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import IntroScreen from "./components/IntroScreen";
import QuestionScreen from "./components/QuestionScreen";
import ReflectionScreen from "./components/ReflectionScreen";
import ResultScreen from "./components/ResultScreen";
import StaffScreen from "./components/StaffScreen";
import { QUESTIONS } from "./data/questions";
import { getResultCopy, THEMES } from "./data/themes";

const STORAGE_KEY = "halo-survey-draft-v2";
const INITIAL_STATE = {
  screen: "intro",
  questionIndex: 0,
  answers: {},
  reflection: "",
  note: "",
  resultCode: "",
};

function loadDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    return {
      ...INITIAL_STATE,
      ...parsed,
      screen: parsed.screen === "result" || parsed.screen === "staff" ? "intro" : parsed.screen,
    };
  } catch {
    return null;
  }
}

function makeResultCode(themeId) {
  const prefix = themeId.slice(0, 3).toUpperCase();
  const suffix = String(Math.floor(1000 + Math.random() * 9000));
  return `HALO-${prefix}-${suffix}`;
}

export default function App() {
  const savedDraft = useMemo(loadDraft, []);
  const [state, setState] = useState(savedDraft ?? INITIAL_STATE);
  const [hasDraft, setHasDraft] = useState(
    Boolean(savedDraft && Object.keys(savedDraft.answers ?? {}).length > 0)
  );

  useEffect(() => {
    if (state.screen === "result" || state.screen === "staff") return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setHasDraft(Object.keys(state.answers).length > 0);
  }, [state]);

  const score = useMemo(
    () => Object.values(state.answers).reduce((sum, value) => sum + value, 0),
    [state.answers]
  );

  const rankedThemes = useMemo(() => {
    const scored = QUESTIONS.map((question) => ({
      themeId: question.themeId,
      score: state.answers[question.id] ?? 2,
      number: question.number,
    }));

    return scored.sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score;

      if (state.reflection === a.themeId) return -1;
      if (state.reflection === b.themeId) return 1;

      return a.number - b.number;
    });
  }, [state.answers, state.reflection]);

  const primaryThemeId = rankedThemes[0]?.themeId ?? "oldYou";
  const secondaryThemeId = rankedThemes.find(
    (item) => item.themeId !== primaryThemeId
  )?.themeId;

  const primaryTheme = THEMES[primaryThemeId];
  const secondaryTheme = secondaryThemeId ? THEMES[secondaryThemeId] : null;
  const resultCopy = getResultCopy(score);

  const weakQuestion = QUESTIONS.find(
    (question) => question.themeId === primaryThemeId
  );

  const reason =
    state.reflection === primaryThemeId
      ? `가장 답하기 어려웠던 영역이면서, 마지막까지 마음에 남았다고 선택한 이야기입니다.`
      : `${weakQuestion?.category ?? "이 질문"}에 대한 답이 가장 오래 머문 영역이었습니다. 아직 선명하지 않은 부분부터 부담 없이 알아갈 수 있는 테마입니다.`;

  function startFresh() {
    setState({
      ...INITIAL_STATE,
      screen: "question",
      resultCode: "",
    });
  }

  function resume() {
    setState((current) => ({
      ...current,
      screen:
        current.questionIndex >= QUESTIONS.length ? "reflection" : "question",
    }));
  }

  function answerQuestion(scoreValue) {
    const question = QUESTIONS[state.questionIndex];
    const nextAnswers = {
      ...state.answers,
      [question.id]: scoreValue,
    };

    if (state.questionIndex >= QUESTIONS.length - 1) {
      setState((current) => ({
        ...current,
        answers: nextAnswers,
        questionIndex: QUESTIONS.length,
        screen: "reflection",
      }));
      return;
    }

    setTimeout(() => {
      setState((current) => ({
        ...current,
        answers: nextAnswers,
        questionIndex: current.questionIndex + 1,
      }));
    }, 160);
  }

  function backFromQuestion() {
    if (state.questionIndex === 0) {
      setState((current) => ({ ...current, screen: "intro" }));
      return;
    }

    setState((current) => ({
      ...current,
      questionIndex: current.questionIndex - 1,
    }));
  }

  function completeSurvey() {
    const resultCode = makeResultCode(primaryThemeId);

    setState((current) => ({
      ...current,
      resultCode,
      screen: "result",
    }));

    localStorage.removeItem(STORAGE_KEY);
    setHasDraft(false);
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    setHasDraft(false);
    setState(INITIAL_STATE);
  }

  return (
    <main className="app-shell">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />

      <AnimatePresence mode="wait">
        {state.screen === "intro" && (
          <IntroScreen
            key="intro"
            onStart={startFresh}
            hasDraft={hasDraft}
            onResume={resume}
          />
        )}

        {state.screen === "question" && (
          <QuestionScreen
            key={QUESTIONS[state.questionIndex]?.id ?? "question"}
            question={QUESTIONS[state.questionIndex]}
            index={state.questionIndex}
            total={QUESTIONS.length}
            selectedScore={
              state.answers[QUESTIONS[state.questionIndex]?.id] ?? null
            }
            onAnswer={answerQuestion}
            onBack={backFromQuestion}
          />
        )}

        {state.screen === "reflection" && (
          <ReflectionScreen
            key="reflection"
            selected={state.reflection}
            note={state.note}
            onSelect={(reflection) =>
              setState((current) => ({ ...current, reflection }))
            }
            onNoteChange={(note) =>
              setState((current) => ({ ...current, note }))
            }
            onBack={() =>
              setState((current) => ({
                ...current,
                screen: "question",
                questionIndex: QUESTIONS.length - 1,
              }))
            }
            onComplete={completeSurvey}
          />
        )}

        {state.screen === "result" && (
          <ResultScreen
            key="result"
            score={score}
            resultCopy={resultCopy}
            theme={primaryTheme}
            secondaryTheme={secondaryTheme}
            reason={reason}
            note={state.note}
            resultCode={state.resultCode}
            onShowStaff={() =>
              setState((current) => ({ ...current, screen: "staff" }))
            }
            onRestart={reset}
          />
        )}

        {state.screen === "staff" && (
          <StaffScreen
            key="staff"
            score={score}
            theme={primaryTheme}
            resultCode={state.resultCode}
            onClose={() =>
              setState((current) => ({ ...current, screen: "result" }))
            }
            onFinish={reset}
          />
        )}
      </AnimatePresence>
    </main>
  );
}