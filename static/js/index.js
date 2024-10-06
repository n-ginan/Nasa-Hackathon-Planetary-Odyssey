document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startAdventureBtn");

  startBtn.addEventListener("click", () => {
    window.location.href = "/loading";
  });
});
