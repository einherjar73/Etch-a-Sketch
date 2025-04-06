const contDiv = document.querySelector("#container");
const squareNum = document.querySelector("#square-number");
const heading2 = document.querySelector(".heading-2");
const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");
let squares = 256;
function getSquares(n) {
  return n * n;
}

squareNum.addEventListener("click", () => {
  let square = prompt("Enter how many squares you want", "0");
  if (square >= 0 && square !== null && square <= 100) {
    for (let j = 0; j < squares; j++) {
      contDiv.removeChild(contDiv.firstChild);
    }
    squares = getSquares(square);
    createSquares(squares, square);
    heading2.textContent = `${square} x ${square}`;
  }
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createSquares(squares, square) {
  for (let i = 0; i < squares; i++) {
    const div = document.createElement("div");
    div.style.height = `${500 / square}px`;
    div.style.width = `${500 / square}px`;
    div.style.border = "1px dotted black";
    div.style.boxSizing = "border-box";
    contDiv.appendChild(div);
    div.addEventListener("mouseover", (e) => {
      div.style.backgroundColor = getRandomColor();
    });
  }
}

createSquares(squares, 16);
