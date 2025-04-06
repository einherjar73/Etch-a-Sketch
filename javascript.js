const contDiv = document.querySelector("#container");
const squareNum = document.querySelector("#square-number");
let squares = 256;
const heading2 = document.querySelector(".heading-2");

createSquares(squares);

function getSquares(n){
  return n * n;
}

squareNum.addEventListener("click", () => {
  let square = prompt("Enter how many squares you want", "0");
  
  if (square >= 0 && square !== null && square <= 100){
    for(let j = 0; j < squares; j++){    
      contDiv.removeChild(contDiv.firstChild);    
    };
    squares = getSquares(square);  
    createSquares(squares);  
    heading2.textContent = `${square} x ${square}`;
  }
}); 


function createSquares (n){  
  for(let i = 0; i < n; i++){
    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";    
    div.style.border = "1px solid black"; 
    contDiv.appendChild(div);
    div.addEventListener("mouseover", () => {    
      div.classList.add("hover");     
    });
  }  
}