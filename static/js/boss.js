import QuizQuestion from "./quiz_question.js";

class Boss {
  /**
   * @param {string} codeName
   * @param {string} name
   * @param {QuizQuestion[]} questions - Array of QuizQuestion objects.
   * @param {string[]} information
   */
  constructor(codeName, name, questions, information) {
    this.#codeName = codeName;
    this.#name = name;
    this.#questions = questions;
    this.#information = information;

    this.#correctAnswers = [];
    for (let question of this.#questions) {
      this.#correctAnswers.push(question.getCorrectAnswer());
    }
  }

  // Private variables
  #codeName;
  #name;
  #questions;
  #information;
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

  /**
   * @returns {string[]} The array of questions.
   */
  getCorrectAnswers() {
    return this.#correctAnswers;
  }

  /**
   * @returns {string[]} One paragraph per element
   */
  getInformation() {
    return this.#information;
  }
}

export default Boss;
