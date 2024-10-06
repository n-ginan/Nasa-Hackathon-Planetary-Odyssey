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
  // Boss Components
  const bossCode = document.getElementById("bossCode").innerText;
  /**
   * @type {QuizQuestion[]}
   */
  let questions = null;
  let correctAnswers = null;
  switch (bossCode) {
    case "TOI_1231_B":
      questions = TOI_1231_B.getQuestions();
      correctAnswers = TOI_1231_B.getCorrectAnswers();
      break;
    case "L_98_59_D":
      questions = L_98_59_D.getQuestions();
      correctAnswers = L_98_59_D.getCorrectAnswers();
      break;
    case "GJ_1002_B":
      questions = GJ_1002_B.getQuestions();
      correctAnswers = GJ_1002_B.getCorrectAnswers();
      break;
    case "PROXIMA_CENTAURI_B":
      questions = PROXIMA_CENTAURI_B.getQuestions();
      correctAnswers = PROXIMA_CENTAURI_B.getCorrectAnswers();
      break;
    case "EPSILON_ERIDANI_B":
      questions = EPSILON_ERIDANI_B.getQuestions();
      correctAnswers = EPSILON_ERIDANI_B.getCorrectAnswers();
      break;
    case "GLIESE_832_C":
      questions = GLIESE_832_C.getQuestions();
      correctAnswers = GLIESE_832_C.getCorrectAnswers();
      break;
  }

  // Question and choice components
  let questionIndex = 0;
  const questionContent = document.getElementById("questionText");
  const choicesBtn = {
    A: document.getElementById("choiceBtnA"),
    B: document.getElementById("choiceBtnB"),
    C: document.getElementById("choiceBtnC"),
    D: document.getElementById("choiceBtnD"),
  };

  // Player health components
  let playerHeartCount = 3;
  const pathToBrokenHeartImg = "/static/res/broken_heart.png";
  const hearts = {
    1: document.getElementById("heart1"),
    2: document.getElementById("heart2"),
    3: document.getElementById("heart3"),
  };

  // Utility functions
  function setChoices() {
    if (questionIndex > questions.length) {
      window.location.href = `/boss-transition?boss_code=${bossCode}&transition_type=defeat`;
      return;
    }
    const currentQuestion = questions[questionIndex];
    questionContent.innerText = currentQuestion.getQuestion();
    let choiceIndex = 0;
    for (let letter in choicesBtn) {
      document.getElementById(`choice${letter}`).innerText =
        currentQuestion.getChoices()[choiceIndex++];
      choicesBtn[letter].addEventListener("click", () => {
        if (letter === correctAnswers[questionIndex]) {
          questionIndex++;
          setChoices();
        } else {
          alert("Wrong answer, you have lost one heart!");
          damagePlayer();
        }
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

  function damagePlayer() {
    hearts[playerHeartCount--].setAttribute("src", pathToBrokenHeartImg); // Set path to broken heart
    if (playerHeartCount <= 0) {
      alert("You have lost all your hearts!");
      window.location.href = `/boss-transition?boss_code${bossCode}&transition_type=encounter`;
    }
  }

  // onReady functions
  if (questions && questions.length > 0) {
    setChoices();
  } else {
    console.error("No questions available for this boss code.");
  }
});
