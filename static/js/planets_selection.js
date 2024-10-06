document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const nextBtn = document.getElementById("nextBtn");
  const previousBtn = document.getElementById("previousBtn");
  // Had to break consistency to avoid breaking the other js script from the other dev
  const enterBtn = document.getElementById("enterButton");

  // Destination components
  const destinations = [
    planetInformation("TOI_1231_B"),
    planetInformation("L_98_59_D"),
    planetInformation("GJ_1002_B"),
    planetInformation("EPSILON_ERIDANI_B"),
    planetInformation("GLIESE_832_C"),
    planetInformation("PROXIMA_CENTAURI_B"),
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
  function planetInformation(bossCode) {
    return `/planet-information?boss_code=${bossCode}`;
  }
});
