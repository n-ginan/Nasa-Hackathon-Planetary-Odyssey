import { TOI_1231_B } from "./quiz_data.js";
import QuizQuestion from "./quiz_question.js";

document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {QuizQuestion[]}
   */
  const questions = TOI_1234_B.getQuestions();
  let questionIndex = 0;

  // IDs to be filled in the future when the html page is ready
  const questionSideHeader = document.getElementById("");
  const questionContent = document.getElementById("");
  const choicesChosen = [];
  const choices = {
    A: document.getElementById(""),
    B: document.getElementById(""),
    C: document.getElementById(""),
    D: document.getElementById(""),
  };

  function setChoices() {
    if (questionIndex >= questions.length) {
      return;
    }
    const currentQuestion = questions[questionIndex];
    let choiceIndex = 0;
    questionContent.innerText = currentQuestion.getQuestion();
    questionSideHeader.innerText = `Q${questionIndex + 1}`;
    for (let choice in choices) {
      choices[choice].innerText = currentQuestion.getChoices()[choiceIndex++];
      choices[choice].addEventListener("click", () => {
        questionIndex++;
        choicesChosen.push(choices[choice].innerText);
        setChoices();
      });
    }
  }

  // onReady functions
  setChoices();
});
