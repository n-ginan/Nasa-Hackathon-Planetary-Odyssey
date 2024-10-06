document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startAdventureBtn");
  console.log(TOI_1231_B.getQuestions());

  startBtn.addEventListener("click", () => {
    window.location.href = "/loading";
  });
});
