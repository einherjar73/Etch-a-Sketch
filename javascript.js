const contDiv = document.querySelector("#container");
const squareNum = document.querySelector("#square-number");
const heading2 = document.querySelector(".heading-2");
const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");
let squares = 256;
let isClicked = false;
let divs;

function getSquares(n) {
  return n * n;
}

squareNum.addEventListener("click", () => {
  let square = prompt("Enter how many squares you want from 1 to 100", "1");
  if (square > 0 && square !== null && square <= 1000) {
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
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box";
    contDiv.appendChild(div);
  }
}


contDiv.addEventListener("click", () => {
  if (!isClicked){
    divs = contDiv.querySelectorAll("div");
    divs.forEach((div) => {
      div.addEventListener("mousemove", coloring);
    });
    isClicked = true;
  } else if (isClicked){
    divs = contDiv.querySelectorAll("div");
    divs.forEach((div) => {
    div.removeEventListener("mousemove", coloring);
  });
  isClicked = false;
  }
});

function coloring(e) {
  e.target.style.backgroundColor = getRandomColor();
  // e.target.style.backgroundColor = "black";
}

createSquares(squares, 16);
