const table = document.querySelector(".FpfvHe");
const chapter = table.querySelectorAll(".jHgkif");

//---------------------------------------------------------- Style Colors---
const chapterStyle = "font-size: 2.5em;background:OliveDrab";
const topicStyle = "font-size: 1.5em;background:SeaGreen";
//--------------------------------------------------------------------------
let openModal = async (el) => {
  const elements = el.querySelector(".jWCzBe"); // elem clicable
  await new Promise((resolve) => setTimeout(resolve, 500));
  elements.click();
};

let readModal = async (el) => {
  await sleep(3000); // Esperar 3 segundos
  const topicBody = el.querySelector(".UW3s6d");
  if (topicBody) {
    const topicTitle = el.querySelector("span.YVvGBb.UzbjTd").textContent;
    const content = topicBody.querySelector(".bqKF7d span").innerText;
    const files = topicBody.querySelectorAll(".luto0c");
    console.log("%c" + " # " + topicTitle, topicStyle);
    console.log(content);
    for (let file of files) {
      const titleFile = file.querySelector(".A6dC2c").textContent;
      const link = file.querySelector(".VkhHKd")?.href;
      console.group("Archivo:");
      console.log(" ---  " + titleFile);
      console.log(link);
      console.groupEnd();
    }
  }
  console.log(
    "*********************************************************************"
  );
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function iterateItems() {
  for (let i = 0; i < chapter.length; i++) {
    const topicList = chapter[i].querySelector(".Xzp3fc");
    const title = chapter[i].querySelector("h2.PazDv").textContent;
    const elementsNode = topicList.querySelectorAll(".tfGBod");

    console.log("%c" + title, chapterStyle);

    for (let el of elementsNode) {
      await openModal(el);
      await readModal(el);
    }

    // Espera a que el usuario presione una tecla para continuar con el siguiente elemento de chapter
    await waitForKeyPress();
  }
}

function waitForKeyPress() {
  return new Promise((resolve) => {
    function onKeyPress(event) {
      if (event.code === "Space") {
        document.removeEventListener("keydown", onKeyPress);
        resolve();
      }
    }
    document.addEventListener("keydown", onKeyPress);
  });
}

iterateItems();
