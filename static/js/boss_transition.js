import {
  TOI_1231_B,
  L_98_59_D,
  GJ_1002_B,
  PROXIMA_CENTAURI_B,
  EPSILON_ERIDANI_B,
  GLIESE_832_C,
} from "./quiz_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const SECONDS_BEFORE_QUIZ_LOAD = 3;
  const bossCode = document.getElementById("bossCode").innerText;
  const isEncounter =
    document.getElementById("transitionType").innerText === "encounter";
  let nextBossCode = ""; // TODO: Implement next boss encounters
  let bossName = null;
  console.log(bossCode, "TOI_1231_B", bossCode === "TOI_1231_B");

  switch (bossCode) {
    case "TOI_1231_B":
      bossName = TOI_1231_B.getName();
      nextBossCode = "L_98_59_D";
      break;
    case "L_98_59_D":
      bossName = L_98_59_D.getName();
      nextBossCode = "GJ_1002_B";
      break;
    case "GJ_1002_B":
      bossName = GJ_1002_B.getName();
      nextBossCode = "PROXIMA_CENTAURI_B";
      break;
    case "PROXIMA_CENTAURI_B":
      bossName = PROXIMA_CENTAURI_B.getName();
      nextBossCode = "EPSILON_ERIDANI_B";
      break;
    case "EPSILON_ERIDANI_B":
      bossName = EPSILON_ERIDANI_B.getName();
      nextBossCode = "GLIESE_832_C";
      break;
    case "GLIESE_832_C":
      bossName = GLIESE_832_C.getName();
      break;
  }

  // Set page content
  document.getElementById("bossName").innerText = bossName;
  document.getElementById("bossHeader").innerText = isEncounter
    ? "You encountered"
    : "Yipee! You defeated";

  // Load to the corresonding quiz content (If meet type is encounter boss)
  if (isEncounter) {
    setTimeout(() => {
      window.location.href = `/quiz?boss_code=${bossCode}`;
    }, SECONDS_BEFORE_QUIZ_LOAD * 1000);
  } else {
    setTimeout(() => {
      window.location.href = `/boss_transition?boss_code=${bossCode}&boss_transition=encounter`;
    }, SECONDS_BEFORE_QUIZ_LOAD * 1000);
  }
});
