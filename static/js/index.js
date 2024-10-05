import { TOI_1231_B } from "./quiz_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startAdventureBtn");
  console.log(TOI_1231_B.getQuestions());

  startBtn.addEventListener("click", () => {
    window.location.href = "/loading";
  });
});
