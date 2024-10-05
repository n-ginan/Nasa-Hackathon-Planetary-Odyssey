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
  }

  // Private variables
  #codeName;
  #name;
  #questions;

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
}
