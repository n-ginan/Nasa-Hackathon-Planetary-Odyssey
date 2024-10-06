import QuizQuestion from "./quiz_question.js";

class Boss {
  /**
   * @param {string} codeName
   * @param {string} name
   * @param {QuizQuestion[]} questions - Array of QuizQuestion objects.
   */
  constructor(codeName, name, questions) {
    this.#codeName = codeName;
    this.#name = name;
    this.#questions = questions;

    this.#correctAnswers = [];
    for (let question of this.#questions) {
      this.#correctAnswers.push(question.getCorrectAnswer());
    }
  }

  // Private variables
  #codeName;
  #name;
  #questions;
  #correctAnswers;

  /**
   * @returns {string} The code name of the boss.
   */
  getCodeName() {
    return this.#codeName;
  }

  /**
   * @returns {string} The name of the boss.
   */
  getName() {
    return this.#name;
  }

  /**
   * @returns {QuizQuestion[]} The array of questions.
   */
  getQuestions() {
    return this.#questions;
  }

  getCorrectAnswers() {
    return this.#correctAnswers;
  }
}

export default Boss;
