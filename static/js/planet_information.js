import {
  TOI_1231_B,
  L_98_59_D,
  GJ_1002_B,
  PROXIMA_CENTAURI_B,
  EPSILON_ERIDANI_B,
  GLIESE_832_C,
} from "./quiz_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const bossCode = document.getElementById("bossCode");
  const proceedBtn = document.getElementById("proceedButton");
  const planetHeader = document.getElementById("planetHeader");
  const planetImage = document.getElementById("planetImage");
  const firstParagraph = document.getElementById("firstParagraph");
  const secondParagraph = document.getElementById("secondParagraph");
  const planetContent = [
    {
      code: TOI_1231_B.getCodeName(),
      body: TOI_1231_B.getInformation(),
      imageLocation: "/static/res/TOI-1231_planet.PNG",
    },
    {
      code: L_98_59_D.getCodeName(),
      body: L_98_59_D.getInformation(),
      imageLocation: "/static/res/Wolf_1061_c_planet.png",
    },
    {
      code: GJ_1002_B.getCodeName(),
      body: GJ_1002_B.getInformation(),
      imageLocation: "/static/res/GJ_1002_b_planet.png",
    },
    {
      code: PROXIMA_CENTAURI_B.getCodeName(),
      body: PROXIMA_CENTAURI_B.getInformation(),
      imageLocation: "/static/res/Proxima_Centauri_b_planet.PNG",
    },
    {
      code: EPSILON_ERIDANI_B.getCodeName(),
      body: EPSILON_ERIDANI_B.getInformation(),
      imageLocation: "/static/res/Epsilon_Eridani_B_planet.PNG",
    },
    {
      code: GLIESE_832_C.getCodeName(),
      body: GLIESE_832_C.getInformation(),
      imageLocation: "/static/res/Gliese_832_C_planet.PNG",
    },
  ];

  // Utility functions
  function loadContent() {
    let chosenPlanet = {};

    // Finds and sets the chosen planet via its code name
    for (let planet of planetContent) {
      if (planet.code === bossCode) {
        chosenPlanet = planet;
        break;
      }
    }

    // Sets the information about the chosen planet
    planetHeader.innerText = chosenPlanet.code;
    planetImage.setAttribute("src", chosenPlanet.imageLocation);
    firstParagraph.innerText = chosenPlanet.body[0];
    secondParagraph.innerText = chosenPlanet.body[1];
  }

  // Event listeners
  proceedBtn.addEventListener("click", () => {
    window.location.href = `/boss-transition?boss_code=${bossCode}&transition_type=encounter`;
  });

  // onReady functions
  loadContent();
});
