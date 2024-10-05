document.addEventListener("DOMContentLoaded", () => {
  // IDs to be filled in the future when the html page is working
  const dialogueHeader = document.getElementById("");
  const dialogueBody = document.getElementById("");
  const nextBtn = document.getElementById("");

  // Format: [{header: "", body: ""}]
  const dialogueContent = [
    {
      header: "In the far reaches of the cosmos,",
      body: "where the known universe blurs into the unknown, Neil deGrasse Tyson stands at the helm of an advanced spacecraft, the Starmapper. Once a humble science communicator, he now shoulders the fate of not just Earth, but the entire galaxy. The High Council of Orion’s Gate, knowing his unparalleled knowledge of the cosmos, has entrusted him with a mission unlike any other: to locate the ancient Sigma Stone, buried deep beneath alien worlds. The stone is the last hope to stave off the Voidstorm—a cosmic force that threatens to unravel the fabric of the universe itself.",
    },
    {
      header: "Neil had never imagined this would be his life.",
      body: "Traveling between distant exoplanets, navigating star systems long left to myth. But here he is, tasked with venturing to the uncharted reaches of the galaxy, starting with the exoplanets TOI-1231 b, Wolf 1061 c, GJ 1002 b, Proxima Centauri b, Epsilon Eridani B, and Gliese 832 C. Each of these planets holds secrets, challenges, and fragments of the clues necessary to unlock the Sigma Stone’s resting place.",
    },
  ];
  let dialogueIndex = 0;

  function loadDialogue() {
    dialogueHeader.innerText = dialogueContent[dialogueIndex].header;
    dialogueBody.innerText = dialogueContent[dialogueIndex].body;
  }

  nextBtn.addEventListener("click", () => {
    dialogueIndex++;
    if (dialogueIndex >= dialogueContent.length) {
      // To be filled when the html page is ready
      // window.location.href = "/"
    } else {
      loadDialogue();
    }
  });
});
