import Boss from "./boss";

function firstBoss() {
  const question1 = new QuizQuestion(
    "TOI-1231 b is bathed in the dim light of its M-type star. How does the planet's distance from its star affect its temperature?",
    "B",
    [
      {
        speaker: "Specter of the Crystalkin",
        message:
          "You walk through a land of ice and crystal, yet you seek a power that has destroyed all who tried to claim it. Can you understand the forces that shaped this world?",
      },
      {
        speaker: "Neil",
        message:
          "I know the dangers of seeking power without understanding it. But I'm here to stop a disaster far greater than what happened here. I'll learn from your mistakes.",
      },
    ],
    [
      "A. The planet's proximity causes scorching heat year-round.",
      "B. The planet's distance results in a cold, misty atmosphere.",
      "C. The planet is tidally locked, with extreme temperature differences.",
      "D. The planet experiences long periods of daylight and freezing nights.",
    ]
  );
  const question2 = new QuizQuestion(
    "What is the composition of TOI-1231 b's atmosphere?",
    "A",
    [
      {
        speaker: "Specter of the Crystalkin",
        message:
          "The cold mist may seem peaceful, but it hides the truth of our downfall. Answer this: What makes this atmosphere so dense and cold?",
      },
      {
        speaker: "Neil",
        message:
          "I've seen atmospheres like this before—mostly hydrogen and helium, not exactly friendly to life, but they preserve this frozen landscape.",
      },
    ],
    [
      "A. Hydrogen and helium",
      "B. Oxygen and nitrogen",
      "C. Methane and carbon dioxide",
      "D. Argon and ozone",
    ]
  );
  const question3 = new QuizQuestion(
    "What happened to the Crystalkin when they tried to harness the Sigma Stone's power?",
    "C",
    [
      {
        speaker: "Specter of the Crystalkin",
        message:
          "You understand the surface, but the Sigma Stone lies deeper. What happens to those who try to harness a force they cannot control?",
      },
      {
        speaker: "Neil",
        message:
          "They unravel their own existence. I'm not here for control—I'm here to prevent the Voidstorm. The Sigma Stone is the key.",
      },
    ],
    [
      "A. They froze their entire world.",
      "B. They destabilized the planet's atmosphere.",
      "C. They disappeared into the void.",
      "D. They caused the core to collapse.",
    ]
  );
  const quizQuestions = [question1, question2, question3];
  return Boss("TOI-1231", "Specter of the Crystalki", quizQuestions);
}

function secondBoss() {}

export const TOI_1231 = firstBoss();
