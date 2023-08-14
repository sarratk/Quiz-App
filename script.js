// const questions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//         { text: "Paris", correct: true},
//         { text: "Rome", correct: false},
//         { text: "Canberra", correct: false},
//     ]
//   },
//   {
//     question: "which is the smallest continenr in the world?",
//     answers: [
//         { text: "Asia", correct: false},
//         { text: "Australia", correct: true},
//         { text: "Africa", correct: false},
//     ]
//   },
//   {
//     question: "Which is the longest river in the world?",
//     answers: [
//         { text: "Nile", correct: true},
//         { text: "Amazon", correct: false},
//         { text: "Yangtze", correct: false},
//     ]
//   },
//   {
//     question: "which is the largest desert in the world",
//     answers: [
//         { text: "Gobi", correct: false},
//         { text: "Sahara", correct: false},
//         { text: "Antarctica", correct: true},
//     ]
//   }
// ]

// const questionElement = document.querySelector(".quest1");
// const answer = document.querySelectorAll(".answer");
// const submitButton = document.querySelector(".Submit");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//   currentQuestionIndex = 0;
//   score = 0;
//   submitButton.innerHTML = "Submit";
//   showQuestion();
// }

// function showQuestion(){
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + "." + currentQuestion.question;
// }

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
        { text: "Paris", correct: true},
        { text: "Rome", correct: false},
        { text: "Canberra", correct: false},
    ]
  },
  {
    question: "which is the smallest continent in the world?",
    answers: [
        { text: "Asia", correct: false},
        { text: "Australia", correct: true},
        { text: "Africa", correct: false},
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
        { text: "Nile", correct: true},
        { text: "Amazon", correct: false},
        { text: "Yangtze", correct: false},
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
        { text: "Gobi", correct: false},
        { text: "Sahara", correct: false},
        { text: "Antarctica", correct: true},
    ]
  }
];

const questionElement = document.querySelector(".quest1");
const answersContainer = document.querySelector(".answer");
const submitButton = document.querySelector(".Submit");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  submitButton.innerHTML = "Submit";
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
  }

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const option = document.createElement("div");
    option.innerHTML = `<input type="radio" name="answer" value="${answer.correct}">
                         <label>${answer.text}</label>`;
    answersContainer.appendChild(option);
  });
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  const isCorrect = selectedAnswer.value === "true";
  if (isCorrect) {
    score++;
  }

  currentQuestionIndex++;
  showQuestion();
}

function showResults() {
  questionElement.innerHTML = `Your Score: ${score} out of ${questions.length}`;
  answersContainer.innerHTML = "";
  submitButton.innerHTML = "Restart Quiz";
}

submitButton.addEventListener("click", () => {
  if (currentQuestionIndex >= questions.length) {
    startQuiz();
  } else {
    checkAnswer();
  }
});

startQuiz();



