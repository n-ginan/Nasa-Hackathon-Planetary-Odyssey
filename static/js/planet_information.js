import {
  TOI_1231_B,
  L_98_59_D,
  GJ_1002_B,
  PROXIMA_CENTAURI_B,
  EPSILON_ERIDANI_B,
  GLIESE_832_C,
} from "./quiz_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const bossCode = document.getElementById("bossCode").innerText;
  const proceedBtn = document.getElementById("proceedBtn");
  const planetHeader = document.getElementById("planetHeader");
  const planetImage = document.getElementById("planetImage");
  const firstParagraph = document.getElementById("firstParagraph");
  const secondParagraph = document.getElementById("secondParagraph");
  const planetContent = [
    {
      code: "TOI_1231_B",
      header: "TOI-1231 b",
      body: TOI_1231_B.getInformation(),
      imageLocation: "/static/res/TOI-1231_planet.PNG",
      destination: bossTransition("TOI_1231_B"),
    },
    {
      code: "L_98_59_D",
      header: "wolf 1061 c",
      body: L_98_59_D.getInformation(),
      imageLocation: "/static/res/Wolf_1061_c_planet.png",
      destination: bossTransition("L_98_59_D"),
    },
    {
      code: "GJ_1002_B",
      header: "GJ 1002 b",
      body: GJ_1002_B.getInformation(),
      imageLocation: "/static/res/GJ_1002_b_planet.png",
      destination: bossTransition("GJ_1002_B"),
    },
    {
      code: "PROXIMA_CENTAURI_B",
      header: "Proxima Centauri b",
      body: PROXIMA_CENTAURI_B.getInformation(),
      imageLocation: "/static/res/Proxima_Centauri_b_planet.PNG",
      destination: bossTransition("PROXIMA_CENTAURI_B"),
    },
    {
      code: "EPSILON_ERIDANI_B",
      header: "Epsilon eridani b",
      body: EPSILON_ERIDANI_B.getInformation(),
      imageLocation: "/static/res/Epsilon_Eridani_B_planet.PNG",
      destination: bossTransition("EPSILON_ERIDANI_B"),
    },
    {
      code: "GLIESE_832_C",
      header: "Gliese 832 c",
      body: GLIESE_832_C.getInformation(),
      imageLocation: "/static/res/Gliese_832_C_planet.PNG",
      destination: bossTransition("GLIESE_832_C"),
    },
  ];

  // Utility functions
  function loadContent() {
    let chosenPlanet = {};

    // Finds and sets the chosen planet via its code name
    for (let planet of planetContent) {
      console.log(planet.code === bossCode, planet.code, bossCode);
      if (planet.code === bossCode) {
        chosenPlanet = planet;
        break;
      }
    }

    // Sets the information about the chosen planet
    planetHeader.innerText = chosenPlanet.header;
    planetImage.setAttribute("src", chosenPlanet.imageLocation);
    firstParagraph.innerText = chosenPlanet.body[0];
    secondParagraph.innerText = chosenPlanet.body[1];
  }

  function bossTransition(bossCode) {
    return `/boss-transition?boss_code=${bossCode}&transition_type=encounter`;
  }

  // Event listeners
  proceedBtn.addEventListener("click", () => {
    window.location.href = `/boss-transition?boss_code=${bossCode}&transition_type=encounter`;
  });

  // onReady functions
  loadContent();
});
