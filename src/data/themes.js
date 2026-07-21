export const THEMES = {
  oldYou: {
    id: "oldYou",
    name: "오래전 당신",
    character: "時",
    color: "#7B6FF2",
    softColor: "#EEEAFE",
    description:
      "부모님을 ‘부모’가 아닌 한 사람으로 바라보며, 어린 시절과 청춘의 이야기를 만나봅니다.",
    firstQuestion:
      "지금의 내 나이였을 때, 부모님은 어떤 하루를 보내고 있었을까요?",
    action: "부모님의 젊은 시절 이야기를 들어보기",
  },
  manual: {
    id: "manual",
    name: "당신 사용설명서",
    character: "日",
    color: "#2F9FD4",
    softColor: "#E8F6FC",
    description:
      "부모님의 취향과 생활 패턴을 발견하며 지금의 부모님을 더 구체적으로 알아갑니다.",
    firstQuestion:
      "부모님이 아무런 책임 없이 하루를 보낸다면, 무엇을 하고 싶어 할까요?",
    action: "부모님이 편안해지는 하루를 알아보기",
  },
  temperature: {
    id: "temperature",
    name: "가족의 온도",
    character: "溫",
    color: "#EE7268",
    softColor: "#FDEDEC",
    description:
      "말없이 오갔던 배려와 안부를 다시 바라보며 우리 가족만의 온도를 발견합니다.",
    firstQuestion:
      "최근 부모님이 말없이 챙겨주었던 작은 일은 무엇이었나요?",
    action: "말없이 지나친 배려를 다시 바라보기",
  },
  taste: {
    id: "taste",
    name: "취향이 닿는 날",
    character: "趣",
    color: "#D89A29",
    softColor: "#FFF4DC",
    description:
      "음식과 음악, 콘텐츠처럼 서로의 취향이 만나는 시간을 만들어봅니다.",
    firstQuestion:
      "부모님이 오랫동안 좋아해온 것에는 어떤 이유가 남아 있을까요?",
    action: "부모님과 좋아하는 것을 함께해보기",
  },
  walking: {
    id: "walking",
    name: "나란히 걷는 날",
    character: "步",
    color: "#55A56A",
    softColor: "#E9F6ED",
    description:
      "많은 말을 하지 않아도 같은 방향으로 움직이며 함께하는 시간을 만듭니다.",
    firstQuestion:
      "부모님과 부담 없이 함께 걷고 싶은 장소는 어디인가요?",
    action: "부모님과 천천히 걸어보기",
  },
  firstCare: {
    id: "firstCare",
    name: "오늘은 내가 먼저",
    character: "先",
    color: "#F1853E",
    softColor: "#FFF0E5",
    description:
      "늘 받았던 챙김을 이번에는 내가 먼저 건네며 돌봄의 방향을 바꿔봅니다.",
    firstQuestion:
      "오늘 부모님 대신 내가 먼저 챙길 수 있는 일은 무엇인가요?",
    action: "오늘 내가 먼저 챙겨드리기",
  },
  birthday: {
    id: "birthday",
    name: "생신까지 열 장",
    character: "祝",
    color: "#D95684",
    softColor: "#FDEAF1",
    description:
      "부모님의 생신을 기다리며 열 번의 작은 준비와 마음을 한 권에 담습니다.",
    firstQuestion:
      "이번 생신에 부모님이 정말 받고 싶은 시간이나 말은 무엇일까요?",
    action: "부모님의 생신을 위한 마음을 준비하기",
  },
  familyPhoto: {
    id: "familyPhoto",
    name: "한 장의 가족사진",
    character: "像",
    color: "#5577D2",
    softColor: "#EAF0FF",
    description:
      "지금의 가족을 자연스러운 장면과 사진으로 남기며 함께한 시간을 기록합니다.",
    firstQuestion:
      "지금 우리 가족다운 모습을 가장 잘 보여주는 장면은 무엇인가요?",
    action: "지금의 가족 모습을 사진으로 남기기",
  },
  reaching: {
    id: "reaching",
    name: "손을 내미는 연습",
    character: "手",
    color: "#9B67B7",
    softColor: "#F3EAF7",
    description:
      "조금 어색해도 먼저 말을 걸고 마음을 표현하는 작은 연습을 시작합니다.",
    firstQuestion:
      "부모님께 먼저 건네고 싶지만 미뤄두었던 말은 무엇인가요?",
    action: "아직 전하지 못한 말을 건네보기",
  },
  fan: {
    id: "fan",
    name: "당신의 1호 팬",
    character: "應",
    color: "#26998F",
    softColor: "#E6F6F4",
    description:
      "가장 가까운 자리에서 부모님의 새로운 도전과 일상을 응원합니다.",
    firstQuestion:
      "요즘 부모님이 가장 응원받았으면 하는 일은 무엇인가요?",
    action: "부모님의 요즘을 응원해보기",
  },
};

export function getResultCopy(totalScore) {
  if (totalScore <= 6) {
    return {
      title: "아직 펼치지 않은 페이지가 많아요",
      description:
        "부모님을 잘 모른다는 의미가 아닙니다. 한 사람으로서 새롭게 알아갈 이야기가 많이 남아 있다는 뜻입니다.",
    };
  }

  if (totalScore <= 13) {
    return {
      title: "익숙함 속에 모르는 이야기가 남아 있어요",
      description:
        "매일 보아온 모습은 알고 있지만, 그 모습 뒤에 있는 이유와 마음은 아직 묻지 못했을 수 있습니다.",
    };
  }

  if (totalScore <= 17) {
    return {
      title: "부모님의 여러 모습을 바라보고 있어요",
      description:
        "부모님의 일상과 마음을 세심하게 기억하고 있습니다. 이제 알고 있는 순간을 기록으로 남겨볼 차례입니다.",
    };
  }

  return {
    title: "가까이에서 부모님의 시간을 함께하고 있어요",
    description:
      "부모님을 잘 알고 있어도 사람의 마음과 취향은 계속 달라집니다. 지금의 부모님에게 다시 안부를 물어보세요.",
  };
}