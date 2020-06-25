let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color as solution
  pickedColor = pickColor();
  // chagne colorDisplay to match picked color
  colorDisplay.textContent = pickColor();
  // change colors on page
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // set h1 background color to the original
  h1.style.backgroundColor = "steelblue";
  // clear the message
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // Set Initial Colors
  squares[i].style.backgroundColor = colors[i];

  //   Add Click handeler to squares
  squares[i].addEventListener("click", function () {
    //   get color of clicked square
    let clickedColor = this.style.backgroundColor;
    //   Compare Color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  // loop throught squares
  for (let i = 0; i < squares.length; i++) {
    //change each color to matching color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make Array
  let arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //generate random colors and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  // pick red from 0-255
  let r = Math.floor(Math.random() * 256);
  // pick green from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick blue from 0=255
  let b = Math.floor(Math.random() * 256);
  // rgb(r, g, b)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
