document.addEventListener("DOMContentLoaded", () => {
  // Change this constant to modify the loading time
  const SECONDS = 5;

  setTimeout(() => {
    window.location.href = "/proxima";
  }, SECONDS * 1000);

  // Deals with randomized space facts
  const spaceFactsContent = [
    "The Moon is lemon-shaped. Even if it looks round in the sky, the moon contains flattened poles and bulges on both near and far side around its equator.",
    "The universe is vast and expanding. Since the Big Bang, it has continued to grow, stretching out galaxies beyond our view every day.",
    "Neutron stars are incredibly dense. A sugar-cube-sized amount of material from one could weigh about the same as all of humanity.",
    "Jupiter's Great Red Spot is a storm. It's been raging for over 350 years and is larger than Earth, showcasing the planet's might.",
    "Saturn's rings are made of ice and rock. They stretch out over 170,000 miles and are only a few hundred feet thick in most places.",
    "Venus is hotter than Mercury. Even though it's not the closest planet to the sun, its thick atmosphere traps heat like a furnace.",
  ];
  document.getElementById("spaceFactText").innerText =
    spaceFactsContent[Math.floor(Math.random() * spaceFactsContent.length)];
});
