const container = document.getElementById("container");
const btn = document.getElementById("btn");
const btnEraser = document.getElementById("btn-eraser");
const btnRainbow = document.getElementById("btn-rainbow");
const btnStatic = document.getElementById("btn-static");
const btnEraseBoard = document.getElementById("btn-erase-board");
const btnWhiteToBlack = document.getElementById("btn-white-to-black");

container.classList.add(
  "flex",
  "flex-wrap",
  "border",
  "border-black"
);
const containerWidth = 600;
container.style.width = `${containerWidth + 2.4}px`;
container.style.height = `${containerWidth + 2.4}px`;

btn.addEventListener("click", () => {
  container.innerHTML = "";
  let numSquares = 0;
  do {
    const squares = prompt(
      "How many squares do you want on each side?"
    );
    numSquares = +squares;
  } while (numSquares > 100);

  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const div = document.createElement("div");
      div.style.width = `${containerWidth / numSquares}px`;
      div.style.height = `${containerWidth / numSquares}px`;

      btnEraser.addEventListener("click", () => {
        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = "white";
        });
      });
      btnRainbow.addEventListener("click", () => {
        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = generateRandomColor();
        });
      });
      btnStatic.addEventListener("click", () => {
        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = "lightgreen";
        });
      });
      btnWhiteToBlack.addEventListener("click", () => {
        let lightness = 100;
        div.addEventListener("mouseover", () => {
          for (i = 10; i > 0; i--) {
            lightness -= 1;
            div.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
          }
        });
      });
      container.appendChild(div);
    }
  }
});

btnEraseBoard.addEventListener("click", () => {
  const eraseBoard = confirm("Are you sure?");
  if (eraseBoard) {
    container.innerHTML = "";
  }
});

const generateRandomColor = () => {
  const hexArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let output = "#";
  for (let i = 0; i < 6; i++) {
    output += hexArray[Math.floor(Math.random() * hexArray.length)];
  }
  return output;
};
