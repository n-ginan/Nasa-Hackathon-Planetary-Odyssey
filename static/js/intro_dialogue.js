document.addEventListener("DOMContentLoaded", () => {
  // IDs to be filled in the future when the html page is working
  const dialogueHeader = document.getElementById("dialogueHeader");
  const dialogueBody = document.getElementById("dialogueBody");
  const nextBtn = document.getElementById("nextBtn");

  const dialogueContent = [];
  let destination = null;
  let dialogueIndex = 0;

  function selectDialogue() {
    url_parts = window.location.href.split("/");
    url_location = url_parts[url_parts.length - 1];
    // url location conditionals to be filled in the future when the html pages are ready
    if (url_location === "intro") {
      dialogueContent.push({
        header: "In the far reaches of the cosmos,",
        body: "where the known universe blurs into the unknown, Neil deGrasse Tyson stands at the helm of an advanced spacecraft, the Starmapper. Once a humble science communicator, he now shoulders the fate of not just Earth, but the entire galaxy. The High Council of Orion’s Gate, knowing his unparalleled knowledge of the cosmos, has entrusted him with a mission unlike any other: to locate the ancient Sigma Stone, buried deep beneath alien worlds. The stone is the last hope to stave off the Voidstorm—a cosmic force that threatens to unravel the fabric of the universe itself.",
      });
      dialogueContent.push({
        header: "Neil had never imagined this would be his life.",
        body: "Traveling between distant exoplanets, navigating star systems long left to myth. But here he is, tasked with venturing to the uncharted reaches of the galaxy, starting with the exoplanets TOI-1231 b, Wolf 1061 c, GJ 1002 b, Proxima Centauri b, Epsilon Eridani B, and Gliese 832 C. Each of these planets holds secrets, challenges, and fragments of the clues necessary to unlock the Sigma Stone’s resting place.",
      });
      destination = "proxima";
    } else if (url_location === "") {
      dialogueContent.push(
        "As he steps into the Starmapper, the NPC pilot—a grizzled veteran named Captain Ryn—greets him with a wry smile."
      );
      dialogueContent.push(
        "Ready for the unknown, Tyson? The first stop is TOI-1231 b. We’ve plotted a course, but be warned—these planets aren’t just pretty science experiments. They’ve got guardians…"
      );
      dialogueContent.push(
        "The map of the galaxy flickers to life on the ship’s console, each planet gleaming like a distant beacon of hope. But not all planets are accessible yet. Neil has to unlock them one by one, uncovering their mysteries, scanning their surfaces, and battling the forces that guard the ancient knowledge."
      );
    }
  }

  function loadDialogue() {
    // Some dialogue pages don't have a header
    if (dialogueHeader) {
      dialogueHeader.innerText = dialogueContent[dialogueIndex].header;
    }
    dialogueBody.innerText = dialogueContent[dialogueIndex].body;
  }

  nextBtn.addEventListener("click", () => {
    dialogueIndex++;
    if (dialogueIndex >= dialogueContent.length) {
      window.location.href = `/${destination}`;
    } else {
      loadDialogue();
    }
  });

  // onReady functions
  selectDialogue();
  loadDialogue();
});
