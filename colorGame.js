var numOSquares = 6;
var colors = [];
var answerColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      this.textContent === "Easy" ? numOSquares = 3 : numOSquares = 6;
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      reset();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === answerColor){
        messageDisplay.textContent = "Correct!";
        chageColors(clickedColor);
        resetButton.textContent = "Play Again?";
      }
      else{
        messageDisplay.textContent = "Try again!";
        this.style.backgroundColor="#232323";
      }
    })
  }
}

function reset(){
  h1.style.backgroundColor = "steelblue";
  colors = generateRandomColors(numOSquares);
  answerColor = pickColor();
  displayColor.textContent = answerColor;
  messageDisplay.textContent = "";
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";

    }
  }
  resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
  reset();
});
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

// easyBtn.addEventListener("click", function(){
//   numOSquares = 3;
//   h1.style.backgroundColor = "steelblue";
//   this.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   colors = generateRandomColors(numOSquares);
//   answerColor = pickColor();
//   displayColor.textContent = answerColor;
//   for(var i = 0; i<squares.length; i++){
//     if(i<3){
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
//   resetButton.textContent = "New Colors";
//   messageDisplay.textContent = "";
// })
//
// hardBtn.addEventListener("click", function(){
//   numOSquares = 6;
//   h1.style.backgroundColor = "steelblue";
//   this.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   colors = generateRandomColors(numOSquares);
//   answerColor = pickColor();
//   displayColor.textContent = answerColor;
//   for(var i = 0; i<squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//     if(i>=3){
//       squares[i].style.display = "block";
//     }
//   }
//   resetButton.textContent = "New Colors";
//   messageDisplay.textContent = "";
// })




function chageColors(color){
  for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr =[];
  for(var i=0; i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+ r + ", "+ g + ", "+ b + ")";
}
