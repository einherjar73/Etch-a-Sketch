const contDiv = document.querySelector("#container");
const squareNum = document.querySelector("#square-number");
let squares;

function getSquares(n){
  return n * n;
}


for(let i = 0; i < 257; i++){
  const div = document.createElement("div");
  div.style.width = "20px";
  div.style.height = "20px";
  div.style.border = "1px solid black";

  contDiv.appendChild(div);
  div.addEventListener("mouseover", () => {    
    div.classList.add("hover");     
  });
}

squareNum.add("click", () => {
  squares = alert("Enter how many squares you want", 0);
})

