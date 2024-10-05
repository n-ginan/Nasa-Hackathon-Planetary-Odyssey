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

function secondBoss() {
  const question1 = new QuizQuestion(
    "Wolf 1061 c is tidally locked. What does that mean for the planet's environment?",
    "A",
    [
      {
        speaker: "Gorgon of Trelkin",
        message:
          "You walk upon the shattered stones of my people. The ground beneath your feet holds the weight of our past. Can you grasp what tore this planet apart?",
      },
      {
        speaker: "Neil",
        message:
          "I've seen worlds like this, tidally locked, torn between constant daylight and endless night. It's not just the land that splits; societies crack under the pressure too.",
      },
    ],
    [
      "A. Constant daylight on one side and eternal darkness on the other",
      "B. Severe earthquakes due to irregular rotation",
      "C. High-speed winds and frequent storms across the entire planet",
      "D. Seasonal changes similar to Earth",
    ]
  );
  const question2 = new QuizQuestion(
    "What feature of Wolf 1061 c's surface is caused by its proximity to its star?",
    "B",
    [
      {
        speaker: "Gorgon of Trelkin",
        message:
          "You claim to seek the knowledge hidden within these stones, but what do you know of Wolf 1061 c's geology? Answer me!",
      },
      {
        speaker: "Neil",
        message:
          "This planet's proximity to its star means extreme temperature differences. I don't just know it—I've calculated it.",
      },
    ],
    [
      "A. Massive glaciers formed by the star's cold emission",
      "B. A dry, rocky surface with extreme temperature differences",
      "C. Frequent volcanic eruptions due to tidal heating",
      "D. An ocean-covered surface with continuous storms",
    ]
  );
  const question3 = new QuizQuestion(
    "How does gravity affect time in strong gravitational fields?",
    "A",
    [
      {
        speaker: "Gorgon of Trelkin",
        message:
          "Even if you understand the ground beneath you, you still face the question of time. Tell me, how does time flow differently near objects of immense gravity?",
      },
      {
        speaker: "Neil",
        message:
          "Gravity bends space-time. The stronger the gravity, the slower time passes. You might try to use that against me, but I know how to turn it to my advantage.",
      },
    ],
    [
      "A. Time moves slower as gravity increases.",
      "B. Time moves faster as gravity increases.",
      "C. Gravity has no effect on time.",
      "D. Time fluctuates unpredictably based on gravitational waves.",
    ]
  );
  const quizQuestions = [question1, question2, question3];
  return Boss("Wolf 1061 c", "Gorgon of Trelkin", quizQuestions);
}

function thirdBoss() {
  const question1 = new QuizQuestion(
    "GJ 1002 b is tidally locked. What does that mean for its environment?",
    "A",
    [
      {
        speaker: "Golem of the Kartharans",
        message:
          "You stand on the edge of fire and ice, where no life should exist. The Kartharans tried to tame this planet and failed. What makes you think you can succeed?",
      },
      {
        speaker: "Neil",
        message:
          "I'm not here to tame this planet. I'm here to understand it—and to make sure we don't repeat the same mistakes.",
      },
    ],
    [
      "A. One side is in constant daylight, the other in eternal darkness.",
      "B. It experiences long seasons of extreme cold and heat.",
      "C. The planet's rotation speeds up its atmosphere, causing violent storms.",
      "D. Both sides experience extreme volcanic activity.",
    ]
  );
  const question2 = new QuizQuestion(
    "What effect does GJ 1002 b's proximity to its star have on its surface?",
    "B",
    [
      {
        speaker: "Golem of the Kartharans",
        message:
          "Tidal forces have shaped this world, but can you comprehend the power beneath your feet? The Kartharans dug deep to escape the surface—tell me, what did they find?",
      },
      {
        speaker: "Neil",
        message:
          "They uncovered tectonic activity—violent shifts beneath the surface caused by the intense gravitational pull of the star. It's what created the underground tunnels they once lived in.",
      },
    ],
    [
      "A. Constant volcanic eruptions",
      "B. Extreme tidal heating, causing surface melting",
      "C. Global ocean currents",
      "D. Shifting magnetic fields",
    ]
  );
  const question3 = new QuizQuestion(
    "How does gravity affect time on planets near their stars?",
    "B",
    [
      {
        speaker: "Golem of the Kartharans",
        message:
          "You speak of survival, but time is not on your side. The gravity of this planet is immense—can you manage to escape its grasp?",
      },
      {
        speaker: "Neil",
        message:
          "I've studied how gravity warps time, how it distorts everything around it. The closer you get, the slower time flows.",
      },
    ],
    [
      "A. Time speeds up as gravity increases.",
      "B. Time slows down as gravity increases.",
      "C. Time is unaffected by gravity.",
      "D. Time flows unpredictably.",
    ]
  );
  const quizQuestions = [question1, question2, question3];
  return Boss("GJ 1002 b", "Golem of the Kartharans", quizQuestions);
}

function fourthBoss() {
  const question1 = new QuizQuestion(
    "Proxima Centauri b orbits within its star's habitable zone. What does this mean for the planet's potential for life?",
    "B",
    [
      {
        speaker: "Echo Warden",
        message:
          "You walk through the heart of a living forest. The echoes of my people flow through these trees, through the soil. Do you understand what gives them life?",
      },
      {
        speaker: "Neil",
        message:
          "A world orbiting Proxima Centauri has its own way of supporting life, despite its weak sunlight. But life here adapts—just like we will, to the coming Voidstorm.",
      },
    ],
    [
      "A. It receives too much radiation for life to survive.",
      "B. It has liquid water, crucial for sustaining life.",
      "C. Its atmosphere is too thin to support life.",
      "D. Its surface is too hot to maintain an ecosystem.",
    ]
  );
  const question2 = new QuizQuestion(
    "What allows Proxima Centauri b's dense forests to thrive despite receiving less sunlight than Earth?",
    "A",
    [
      {
        speaker: "Echo Warden",
        message:
          "The trees sing with knowledge, but you must prove yourself worthy to hear them. Can you grasp the delicate balance of this world?",
      },
      {
        speaker: "Neil",
        message:
          "Proxima Centauri b receives less sunlight than Earth, but the forests here have evolved. The trees capture and store light in ways we're only beginning to understand.",
      },
    ],
    [
      "A. Efficient photosynthesis in low-light conditions.",
      "B. Large oceans that reflect light into the forest.",
      "C. Trees that can store solar energy for months.",
      "D. An atmosphere rich in carbon monoxide that fuels plant growth.",
    ]
  );
  const question3 = new QuizQuestion(
    "What is the role of fungi in forest ecosystems?",
    "C",
    [
      {
        speaker: "Echo Warden",
        message:
          "Perhaps you know something of this world, but the forest's roots run deep. If you wish to survive, tell me what binds this ecosystem together.",
      },
      {
        speaker: "Neil",
        message:
          "Fungi are the hidden network in any forest. They connect trees, share nutrients, and store information—just like the knowledge we're gathering to stop the Voidstorm.",
      },
    ],
    [
      "A. Fungi break down minerals in the soil to create nutrients for trees.",
      "B. Fungi absorb sunlight and provide it to plants.",
      "C. Fungi act as a communication network between plants, sharing nutrients.",
      "D. Fungi capture carbon dioxide and turn it into oxygen for the ecosystem.",
    ]
  );
  const quizQuestions = [question1, question2, question3];
  return Boss("Proxima Centauri b", "Echo Warden", quizQuestions);
}

function fifthBoss() {
  const question1 = new QuizQuestion(
    "Epsilon Eridani B is a gas giant. What effect does its gravity have on objects in its upper atmosphere?",
    "C",
    [
      {
        speaker: "Graviton Warden",
        message:
          "You stand in the upper reaches of a gas giant, where gravity pulls at the very fabric of reality. The Varaith sought to control this force, and now, so do you. Prove your understanding.",
      },
      {
        speaker: "Neil",
        message:
          "I know what I'm dealing with—gas giants have immense gravitational forces, but they also hold incredible secrets. The Sigma Stone is here, and I'll unlock its power.",
      },
    ],
    [
      "A. Objects float freely in zero gravity",
      "B. Objects are pulled in different directions by rapid winds",
      "C. Objects are drawn towards the planet's core by strong gravitational forces",
      "D. Objects remain unaffected due to low gravity",
    ]
  );
  const question2 = new QuizQuestion(
    "How does Epsilon Eridani B's gravity compare to Earth's?",
    "C",
    [
      {
        speaker: "Graviton Warden",
        message:
          "You understand gravity, but the forces at play here are far more complex. The Varaith thought they could bend it to their will. Tell me, how does the gravity of this planet compare to Earth's?",
      },
      {
        speaker: "Neil",
        message:
          "Epsilon Eridani B has far greater mass than Earth, so its gravitational pull is stronger. But it's that very force that makes it so dangerous to navigate.",
      },
    ],
    [
      "A. It is weaker than Earth's",
      "B. It is about the same as Earth's",
      "C. It is slightly weaker than Jupiter's but stronger than Earth's",
      "D. It is stronger than both Earth and Jupiter",
    ]
  );
  const question3 = new QuizQuestion(
    "How does gravity affect time on gas giants like Epsilon Eridani B?",
    "B",
    [
      {
        speaker: "Graviton Warden",
        message:
          "You have knowledge, but do you have the strength to escape the pull of this gas giant? One misstep, and you will be lost in its gravitational well.",
      },
      {
        speaker: "Neil",
        message:
          "I've studied how gravity affects time, space, and even light. I know how to navigate its dangers—and I'm not leaving without the Sigma Stone.",
      },
    ],
    [
      "A. Time speeds up as gravity increases",
      "B. Time slows down as gravity increases",
      "C. Time flows backward near the core",
      "D. Gravity has no effect on time",
    ]
  );

  const quizQuestions = [question1, question2, question3];
  return Boss("Epsilon Eridani B", "Graviton Warden", quizQuestions);
}

function sixthBoss() {
  const question1 = new QuizQuestion(
    "Gliese 832 C is locked in a constant state of storm. What drives these planetary storms?",
    "B",
    [
      {
        speaker: "Celestial Sentinel",
        message:
          "You have reached the end of your journey, but the path does not end here. The storms of Gliese 832 C are ancient, and so am I. What do you know of the forces that shape this world?",
      },
      {
        speaker: "Neil",
        message:
          "I've seen storms like this—fueled by strong winds, thick atmospheres, and planetary rotation. But I didn't travel across the galaxy to be stopped by bad weather.",
      },
    ],
    [
      "A. High levels of atmospheric carbon",
      "B. The planet's rapid rotation and thick atmosphere",
      "C. The planet's proximity to its sun",
      "D. Volcanic activity heating the air",
    ]
  );
  const question2 = new QuizQuestion(
    "What causes the thick atmosphere of Gliese 832 C?",
    "D",
    [
      {
        speaker: "Celestial Sentinel",
        message:
          "Impressive, but you are not finished. The storms are not your only challenge. What keeps the atmosphere of this planet so thick?",
      },
      {
        speaker: "Neil",
        message:
          "This planet's gravity traps gases in its atmosphere, making it dense. The storms are just a side effect of the sheer weight of this planet's air.",
      },
    ],
    [
      "A. The planet's slow rotation",
      "B. High levels of nitrogen",
      "C. Intense volcanic activity",
      "D. The planet's strong gravity",
    ]
  );
  const question3 = new QuizQuestion(
    "What is dark matter?",
    "C",
    [
      {
        speaker: "Celestial Sentinel",
        message:
          "You may understand this world's storms, but do you understand the forces that hold the cosmos together? Tell me, what binds the galaxies themselves?",
      },
      {
        speaker: "Neil",
        message:
          "Dark matter—an invisible force that holds galaxies together. You may hide the Sigma Stone, but I know what drives the universe's structure.",
      },
    ],
    [
      "A. A form of energy that repels galaxies",
      "B. A visible matter in black holes",
      "C. An invisible force that holds galaxies together",
      "D. A type of star in distant galaxies",
    ]
  );

  const quizQuestions = [question1, question2, question3];
  return Boss("Gliese 832 C", "Celestial Sentinel", quizQuestions);
}

export const TOI_1231_B = firstBoss();
export const L_98_59_D = secondBoss();
export const GJ_1002_B = thirdBoss();
export const PROXIMA_CENTAURI_B = fourthBoss();
export const EPSILON_ERIDANI_B = fifthBoss();
export const GLIESE_832_C = sixthBoss();
