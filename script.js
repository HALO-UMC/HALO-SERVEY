const themeMeta = {
  oldYou: {
    name: "오래전 당신",
    color: "#7C6BF2",
    character: "昔",
    description: "부모님을 ‘부모’가 아닌 한 사람으로 바라보며, 어린 시절과 청춘의 이야기를 만나봅니다.",
    firstQuestion: "지금의 내 나이였을 때, 부모님은 어떤 하루를 보내고 있었을까요?",
    action: "부모님의 어린 시절과 꿈을 들어보기"
  },
  manual: {
    name: "당신 사용설명서",
    color: "#3BA7D8",
    character: "好",
    description: "부모님의 취향과 생활 패턴을 발견하며 지금의 부모님을 더 구체적으로 알아갑니다.",
    firstQuestion: "부모님이 요즘 반복해서 찾는 음식이나 콘텐츠는 무엇인가요?",
    action: "부모님의 요즘 취향을 알아보기"
  },
  temperature: {
    name: "가족의 온도",
    color: "#F07167",
    character: "溫",
    description: "말없이 오갔던 배려와 안부를 다시 바라보며 우리 가족만의 온도를 발견합니다.",
    firstQuestion: "최근 부모님이 말없이 챙겨주었던 작은 일은 무엇이었나요?",
    action: "가족 사이의 작은 배려를 떠올리기"
  },
  taste: {
    name: "취향이 닿는 날",
    color: "#E7A63A",
    character: "趣",
    description: "음식과 음악, 콘텐츠처럼 서로의 취향이 만나는 시간을 만들어봅니다.",
    firstQuestion: "부모님과 함께 즐겨보고 싶은 음식이나 콘텐츠는 무엇인가요?",
    action: "부모님과 같은 취향을 나누기"
  },
  walking: {
    name: "나란히 걷는 날",
    color: "#56A86C",
    character: "步",
    description: "많은 말을 하지 않아도 같은 방향으로 움직이며 함께하는 시간을 만듭니다.",
    firstQuestion: "부모님과 부담 없이 함께 걸어보고 싶은 장소는 어디인가요?",
    action: "부모님과 함께 산책하거나 외출하기"
  },
  firstCare: {
    name: "오늘은 내가 먼저",
    color: "#F58C49",
    character: "先",
    description: "늘 받았던 챙김을 이번에는 내가 먼저 건네며 돌봄의 방향을 바꿔봅니다.",
    firstQuestion: "오늘 부모님 대신 내가 먼저 챙길 수 있는 일은 무엇인가요?",
    action: "오늘 내가 먼저 부모님을 챙기기"
  },
  birthday: {
    name: "생신까지 열 장",
    color: "#E65B8A",
    character: "祝",
    description: "부모님의 생신을 기다리며 열 번의 작은 준비와 마음을 한 권에 담습니다.",
    firstQuestion: "부모님이 이번 생신에 가장 기뻐할 만한 것은 무엇일까요?",
    action: "부모님의 생신을 위한 준비 시작하기"
  },
  familyPhoto: {
    name: "한 장의 가족사진",
    color: "#5778D6",
    character: "像",
    description: "지금의 가족을 자연스러운 장면과 사진으로 남기며 함께한 시간을 기록합니다.",
    firstQuestion: "지금 우리 가족다운 모습을 가장 잘 보여주는 장면은 무엇인가요?",
    action: "지금의 가족 모습을 사진으로 남기기"
  },
  reaching: {
    name: "손을 내미는 연습",
    color: "#A56CC1",
    character: "手",
    description: "조금 어색해도 먼저 말을 걸고 마음을 표현하는 작은 연습을 시작합니다.",
    firstQuestion: "부모님께 먼저 건네고 싶지만 미뤄두었던 말은 무엇인가요?",
    action: "부모님께 먼저 안부나 마음 건네기"
  },
  fan: {
    name: "당신의 1호 팬",
    color: "#2AA198",
    character: "應",
    description: "가장 가까운 자리에서 부모님의 새로운 도전과 일상을 응원합니다.",
    firstQuestion: "요즘 부모님이 응원받았으면 하는 일은 무엇인가요?",
    action: "부모님의 요즘 목표를 응원하기"
  }
};

const questions = [
  {
    category: "부모님의 시간",
    text: "{target}의 어린 시절 꿈이나 젊은 시절 이야기를 알고 있나요?",
    hint: "어릴 때 좋아했던 것, 되고 싶었던 것, 기억에 남는 시절을 떠올려보세요.",
    theme: "oldYou"
  },
  {
    category: "부모님의 일상",
    text: "{target}이 요즘 자주 찾는 음식이나 생활 습관을 알고 있나요?",
    hint: "반복해서 먹는 음식, 자주 앉는 자리, 하루의 루틴도 포함됩니다.",
    theme: "manual"
  },
  {
    category: "가족의 마음",
    text: "최근 {target}이 말없이 보여준 작은 배려를 떠올릴 수 있나요?",
    hint: "챙겨둔 음식, 기다려준 시간, 짧은 안부처럼 사소한 장면도 괜찮아요.",
    theme: "temperature"
  },
  {
    category: "부모님의 취향",
    text: "{target}이 요즘 좋아하는 음악, 영상, 음식 중 하나를 알고 있나요?",
    hint: "같이 즐길 수 있을 만큼 구체적으로 떠오르는지 생각해보세요.",
    theme: "taste"
  },
  {
    category: "함께하는 시간",
    text: "{target}이 편안해하는 산책이나 외출 방식을 알고 있나요?",
    hint: "좋아하는 거리, 이동 방식, 외출 시간이나 속도를 떠올려보세요.",
    theme: "walking"
  },
  {
    category: "돌봄의 방향",
    text: "요즘 {target}에게 내가 먼저 챙겨드릴 수 있는 일을 알고 있나요?",
    hint: "식사, 집안일, 휴식, 일정처럼 작게 도울 수 있는 일을 생각해보세요.",
    theme: "firstCare"
  },
  {
    category: "특별한 날",
    text: "{target}이 생신에 받고 싶어 하는 선물이나 시간을 알고 있나요?",
    hint: "물건뿐 아니라 함께하고 싶은 일정이나 듣고 싶은 말도 포함됩니다.",
    theme: "birthday"
  },
  {
    category: "가족의 장면",
    text: "최근 우리 가족이 함께 찍은 자연스러운 사진이 떠오르나요?",
    hint: "기념사진이 아니어도 함께 웃거나 일상을 보낸 장면이면 충분합니다.",
    theme: "familyPhoto"
  },
  {
    category: "마음 표현",
    text: "{target}과 어색하지 않게 마음을 표현하는 방법을 알고 있나요?",
    hint: "대화, 문자, 행동 중 서로에게 가장 편한 방식을 떠올려보세요.",
    theme: "reaching"
  },
  {
    category: "부모님의 오늘",
    text: "{target}이 요즘 도전하거나 응원받고 싶은 일을 알고 있나요?",
    hint: "일, 취미, 건강, 인간관계처럼 최근 마음이 향하는 곳을 생각해보세요.",
    theme: "fan"
  }
];

const state = {
  target: "어머니",
  current: 0,
  answers: Array(questions.length).fill(null),
  recommendation: null
};

const screens = [...document.querySelectorAll(".screen")];
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const questionCategory = document.querySelector("#questionCategory");
const questionTitle = document.querySelector("#questionTitle");
const questionHint = document.querySelector("#questionHint");
const answerButtons = [...document.querySelectorAll(".answer-button")];
const tieOptions = document.querySelector("#tieOptions");

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateQuestion() {
  const question = questions[state.current];
  const targetText = state.target === "부모님" ? "부모님" : state.target;
  questionCategory.textContent = question.category;
  questionTitle.textContent = question.text.replace("{target}", targetText);
  questionHint.textContent = question.hint;
  progressText.textContent = `${state.current + 1} / ${questions.length}`;
  progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  backButton.style.visibility = state.current === 0 ? "visible" : "visible";
}

function selectAnswer(score) {
  state.answers[state.current] = Number(score);

  if (state.current < questions.length - 1) {
    state.current += 1;
    updateQuestion();
    return;
  }

  determineRecommendation();
}

function determineRecommendation() {
  const lowest = Math.min(...state.answers);
  const candidates = questions
    .map((question, index) => ({ ...question, index, score: state.answers[index] }))
    .filter((item) => item.score === lowest);

  if (candidates.length === 1) {
    finalizeRecommendation(candidates[0].theme);
    return;
  }

  tieOptions.innerHTML = "";
  candidates.forEach((candidate) => {
    const meta = themeMeta[candidate.theme];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tie-button";
    button.textContent = meta.action;
    button.addEventListener("click", () => finalizeRecommendation(candidate.theme));
    tieOptions.appendChild(button);
  });
  showScreen("tieBreak");
}

function scoreResult(total) {
  if (total <= 6) {
    return {
      title: "아직 펼치지 않은 페이지가 많아요",
      description: "잘 모른다는 의미가 아니라, 새롭게 알아갈 부모님의 이야기가 많이 남아 있다는 뜻입니다."
    };
  }
  if (total <= 13) {
    return {
      title: "익숙함 속에 새로운 이야기가 있어요",
      description: "알고 있다고 생각했던 일상 안에도 아직 발견하지 못한 취향과 시간이 남아 있습니다."
    };
  }
  if (total <= 17) {
    return {
      title: "부모님의 여러 모습을 알고 있어요",
      description: "부모님의 일상과 마음을 세심하게 바라보고 있습니다. 이제 그 장면을 기록으로 남겨볼 차례입니다."
    };
  }
  return {
    title: "가까운 만큼 더 깊은 이야기가 남아 있어요",
    description: "부모님을 잘 알고 있지만, 과거의 꿈과 최근의 마음처럼 아직 나누지 못한 이야기는 남아 있을 수 있습니다."
  };
}

function finalizeRecommendation(themeKey) {
  state.recommendation = themeKey;
  const total = state.answers.reduce((sum, value) => sum + value, 0);
  const result = scoreResult(total);
  const meta = themeMeta[themeKey];
  const sourceQuestionIndex = questions.findIndex((q) => q.theme === themeKey);
  const sourceQuestion = questions[sourceQuestionIndex];
  const code = `HALO-${themeKey.slice(0, 2).toUpperCase()}-${String(Math.floor(1000 + Math.random() * 9000))}`;

  document.querySelector("#scoreValue").textContent = total;
  document.querySelector("#resultTitle").textContent = result.title;
  document.querySelector("#resultDescription").textContent = result.description;
  document.querySelector("#themeName").textContent = meta.name;
  document.querySelector("#themeDescription").textContent = meta.description;
  document.querySelector("#themeCharacter").textContent = meta.character;
  document.querySelector("#themeCharacter").style.background = meta.color;
  document.querySelector("#themeCard").style.background = `linear-gradient(135deg, ${meta.color}18, rgba(255,253,249,.96))`;
  document.querySelector("#recommendReason").textContent =
    `${sourceQuestion.category}에 대한 답이 가장 오래 머문 질문이었습니다. 아직 선명하지 않은 부분을 부담 없이 알아갈 수 있는 테마를 추천합니다.`;
  document.querySelector("#firstQuestion").textContent = meta.firstQuestion;
  document.querySelector("#resultCode").textContent = code;

  document.querySelector("#staffTarget").textContent = state.target;
  document.querySelector("#staffTheme").textContent = meta.name;
  document.querySelector("#staffScore").textContent = `${total} / 20`;
  document.querySelector("#staffSwatch").style.background = meta.color;

  showScreen("result");
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    state.target = button.dataset.target;
  });
});

startButton.addEventListener("click", () => {
  state.current = 0;
  updateQuestion();
  showScreen("survey");
});

backButton.addEventListener("click", () => {
  if (state.current === 0) {
    showScreen("intro");
    return;
  }
  state.current -= 1;
  updateQuestion();
});

answerButtons.forEach((button) => {
  button.addEventListener("click", () => selectAnswer(button.dataset.score));
});

document.querySelector("#showStaffButton").addEventListener("click", () => showScreen("staffView"));
document.querySelector("#closeStaffButton").addEventListener("click", () => showScreen("result"));
document.querySelector("#restartButton").addEventListener("click", () => {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  state.recommendation = null;
  showScreen("intro");
});
