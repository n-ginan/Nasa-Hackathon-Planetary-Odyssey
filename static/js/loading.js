document.addEventListener("DOMContentLoaded", () => {
  // Change this constant to modify the loading time
  const SECONDS = 5;

  setTimeout(() => {
    window.location.href = "/planets-selection";
  }, SECONDS * 1000);
});
