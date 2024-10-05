class QuizQuestion {
  constructor(question, answer, dialogue, choices) {
    this.question = question;
    this.correctAnswer = answer;
    this.dialogue = dialogue;
    this.choices = choices;
  }

  answer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}
