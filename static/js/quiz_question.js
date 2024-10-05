class QuizQuestion {
  constructor(question, choices, answer) {
    this.question = "";
    this.correctAnswer = "";
    this.choices = [];
  }

  answer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}
