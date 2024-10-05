class Boss {
  /**
   * @param {string} codeName
   * @param {string} name
   * @param {QuizQuestion} dialogue - Array of dialogue strings.
   */
  constructor(codeName, name, questions) {
    this.codeName = codeName;
    this.name = name;
    this.questions = questions;
  }
}
