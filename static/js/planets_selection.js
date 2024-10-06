document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const nextBtn = document.getElementById("nextBtn");
  const previousBtn = document.getElementById("previousBtn");
  // Had to break consistency to avoid breaking the other js script from the other dev
  const enterBtn = document.getElementById("enterButton");

  // Destination components
  const destinations = [
    "/planet-1",
    bossTransition("L_98_59_D"),
    bossTransition("GJ_1002_B"),
    bossTransition("PROXIMA_CENTAURI_B"),
    bossTransition("EPSILON_ERIDANI_B"),
    bossTransition("GLIESE_832_C"),
    bossTransition("TOI_1231_B"),
  ];
  let destinationIndex = 0;

  // Event listeners
  nextBtn.addEventListener("click", () => {
    destinationIndex++;
    if (destinationIndex >= destinations.length) {
      destinationIndex = 0;
    }
  });

  previousBtn.addEventListener("click", () => {
    destinationIndex--;
    if (destinationIndex < 0) {
      destinationIndex = destinations.length - 1;
    }
  });

  enterBtn.addEventListener("click", () => {
    window.location.href = destinations[destinationIndex];
  });

  // Utility functions
  function bossTransition(bossCode) {
    return `/boss-transition?boss_code=${bossCode}&transition_type=encounter`;
  }
});
