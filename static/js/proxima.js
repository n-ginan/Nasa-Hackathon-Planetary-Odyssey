document.addEventListener("DOMContentLoaded", () => {
  const bossBtn = document.getElementById("bossBtn");

  bossBtn.addEventListener("click", () => {
    window.location.href =
      "/boss-transition?boss_code=TOI_1231_B&transition_type=encounter";
  });
});
