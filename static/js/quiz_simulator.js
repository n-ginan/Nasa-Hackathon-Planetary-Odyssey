import {
  TOI_1231_B,
  L_98_59_D,
  GJ_1002_B,
  PROXIMA_CENTAURI_B,
  EPSILON_ERIDANI_B,
  GLIESE_832_C,
} from "./quiz_data.js";
import QuizQuestion from "./quiz_question.js";

document.addEventListener("DOMContentLoaded", () => {
  const bossCode = document.getElementById("bossCode").innerText;
  /**
   * @type {QuizQuestion[]}
   */
  let questions = null;
  switch (bossCode) {
    case "TOI_1231_B":
      questions = TOI_1231_B.getQuestions();
      break;
    case "L_98_59_D":
      questions = L_98_59_D.getQuestions();
      break;
    case "GJ_1002_B":
      questions = GJ_1002_B.getQuestions();
      break;
    case "PROXIMA_CENTAURI_B":
      questions = PROXIMA_CENTAURI_B.getQuestions();
      break;
    case "EPSILON_ERIDANI_B":
      questions = EPSILON_ERIDANI_B.getQuestions();
      break;
    case "GLIESE_832_C":
      questions = GLIESE_832_C.getQuestions();
      break;
  }

  let questionIndex = 0;
  const questionContent = document.getElementById("questionText");
  const choicesChosen = [];
  const choicesBtn = {
    A: document.getElementById("choiceBtnA"),
    B: document.getElementById("choiceBtnB"),
    C: document.getElementById("choiceBtnC"),
    D: document.getElementById("choiceBtnD"),
  };

  function setChoices() {
    if (questionIndex >= questions.length) {
      return;
    }
    const currentQuestion = questions[questionIndex];
    questionContent.innerText = currentQuestion.getQuestion();
    let choiceIndex = 0;
    for (let letter in choicesBtn) {
      document.getElementById(`choice${letter}`).innerText =
        currentQuestion.getChoices()[choiceIndex++];
      choicesBtn[letter].addEventListener("click", () => {
        choicesChosen.push(
          document.getElementById(`choice${letter}`).innerText
        );
        questionIndex++;
        setChoices();
      });
    }
  }

  function countCorrectAnswers() {
    const correctAnswers = TOI_1231_B.getCorrectAnswers(); // Fixed name
    let count = 0;
    for (let i = 0; i < choicesChosen.length; i++) {
      if (correctAnswers[i] === choicesChosen[i]) {
        count++;
      }
    }
    return count;
  }

  // onReady functions
  if (questions && questions.length > 0) {
    setChoices();
  } else {
    console.error("No questions available for this boss code.");
  }
});
