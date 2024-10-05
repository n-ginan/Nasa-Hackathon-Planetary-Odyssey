class QuizQuestion {
  /**
   * @param {string} question - The question text.
   * @param {string} answer - The correct answer.
   * @param {string[]} dialogue - Array of dialogue strings.
   * @param {string[]} choices - Array of possible answer choices.
   */
  constructor(question, answer, dialogue, choices) {
    this.question = question;
    this.correctAnswer = answer;
    this.choices = choices;

    // Dialogue format: { speaker: "", message: "" }
    this.dialogue = dialogue;
  }

  /**
   * @param {string} userAnswer - The user's answer.
   * @returns {boolean} Whether the answer is correct.
   */
  isAnswerCorrect(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}
