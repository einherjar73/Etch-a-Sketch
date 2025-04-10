const contDiv = document.querySelector("#container");
const squareNum = document.querySelector("#square-number");
const heading2 = document.querySelector(".heading-2");
const randomCol = document.querySelector("#random-color");
const blackCol = document.querySelector("#black-color");
const reset = document.querySelector("#reset");
const erase = document.querySelector("#erase");
let squares = 256;
let isClicked = false;
let divs;
let changeColor = "random";

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
    // div.style.border = "1px solid black";
    div.style.borderRadius = "50%";
    div.style.boxSizing = "border-box";
    contDiv.appendChild(div);
    reset.addEventListener("click", () => {
      div.style.backgroundColor = "";
    });
  }
}

contDiv.addEventListener("click", () => {
  if (!isClicked) {
    divs = contDiv.querySelectorAll("div");
    divs.forEach((div) => {
      div.addEventListener("mouseover", coloring);
    });
    isClicked = true;
  } else if (isClicked) {
    divs = contDiv.querySelectorAll("div");
    divs.forEach((div) => {
      div.removeEventListener("mouseover", coloring);
    });
    isClicked = false;
  }
});

function coloring(e) {
  if (changeColor === "random") {
    e.target.style.backgroundColor = getRandomColor();
  } else if (changeColor === "black") {
    e.target.style.backgroundColor = "black";
  } else if (changeColor === "erase") {
    e.target.style.backgroundColor = "";
  }
}

blackCol.addEventListener("click", () => {
  changeColor = "black";
});

erase.addEventListener("click", () => {
  changeColor = "erase";
});

randomCol.addEventListener("click", () => {
  changeColor = "random";
});

createSquares(squares, 16);
