class QuizQuestion {
  /**
   * @param {string} question - The question text.
   * @param {string} answer - The correct answer.
   * @param {string[]} dialogue - Array of dialogue strings.
   * @param {string[]} choices - Array of possible answer choices.
   */
  constructor(question, answer, dialogue, choices) {
    this.#question = question; // Private variable
    this.#correctAnswer = answer; // Private variable
    this.#dialogue = dialogue; // Private variable
    this.#choices = choices; // Private variable
  }

  // Private variables
  #question;
  #correctAnswer;
  #dialogue;
  #choices;

  /**
   * @param {string} userAnswer - The user's answer.
   * @returns {boolean} Whether the answer is correct.
   */
  isAnswerCorrect(userAnswer) {
    return userAnswer === this.#correctAnswer; // Accessing private variable
  }

  /**
   * @returns {string} The question text.
   */
  getQuestion() {
    return this.#question;
  }

  /**
   * @returns {string} The correct answer.
   */
  getCorrectAnswer() {
    return this.#correctAnswer;
  }

  /**
   * @returns {string[]} The dialogue array.
   */
  getDialogue() {
    return this.#dialogue;
  }

  /**
   * @returns {string[]} The choices array.
   */
  getChoices() {
    return this.#choices;
  }
}
