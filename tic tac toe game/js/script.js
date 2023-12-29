var Oturn = true;
var scoreOne = 0;
var scoreTwo = 0;
var pOne;
var pTwo;
var reset = "";
reset = document.querySelector(".reset");
var newgame ="";
newgame = document.querySelector(".new");
var start ="";
start = document.querySelector(".start");
var boxes = document.querySelectorAll(".btns");
var winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach(function (btns) {
  btns.addEventListener("click", function () {
    if (Oturn) {
      btns.innerHTML = "O";
      Oturn = false;
    } else {
      btns.innerHTML = "X";
      Oturn = true;
    }

    btns.disabled = true;
  });
});

// RESET BUTTON
if (reset) {
  reset.addEventListener("click", function () {
    boxes.forEach(function (btns) {
      btns.innerHTML = "";
      btns.disabled = false;
      Oturn = true;
    });
    var winnerman = document.getElementById("win");
    winnerman.style.opacity = "0";
  });
}

// NEW GAME BUTTON 
if (newgame) {
  newgame.addEventListener("click", function () {
    boxes.forEach(function (btns) {
      btns.innerHTML = "";
      btns.disabled = false;
      Oturn = true;
      decreaseScore();
     
    });
    var winnerman = document.getElementById("win");
    winnerman.style.opacity = "0";
    collect(pOne,pTwo);
  });
} 

boxes.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var text = e.target.innerHTML;

    winpattern.forEach(function (pattern) {
      if (
        boxes[pattern[0]].innerHTML === text &&
        boxes[pattern[1]].innerHTML === text &&
        boxes[pattern[2]].innerHTML === text
      ) {
        displayWinner(text);
        boxes.forEach(function (btn) {
          btn.disabled = true;
        });
      }
    });
  });
});


function displayWinner(text) {
  var winnerman = document.getElementById("win");
  var axe = "O";
  var axy = "X"
  if (text === axe) {
    winnerman.innerHTML = "Winner is " + axe;
    winnerman.style.opacity = "1";
    increasescore();
  } 
  else {
    winnerman.innerHTML = "Winner is " + axy;
    winnerman.style.opacity = "1";
    increasescoreTwo();
  }

}

// INCREASING SCORE FOR PLAYER ONE OR FIRST PLAYER
function increasescore() {
  scoreOne += 1;
  document.querySelector("#firstScore").innerHTML = scoreOne;
}

// INCREASING SCORE FOR PLAYER TWO OR SECOND PLAYER
function increasescoreTwo() {
  scoreTwo += 1;
  document.querySelector("#secondScore").innerHTML = scoreTwo;
}

// SCORE SET TO THE ZERO WHEN NEW GAME BUTTON IS CLICK
function decreaseScore(){
  scoreOne = 0;
  scoreTwo = 0;
  document.querySelector("#firstScore").innerHTML = scoreOne;
  document.querySelector("#secondScore").innerHTML = scoreTwo;
}


// FUNCTION FOR COLLECT USER NAMES 
function collect(pOne,pTwo) {
  pOne = prompt("Enter 1st Player Name");
  pTwo = prompt("Enter 2nd Player Name");

  playerOne = document.querySelector("#pOne");
  playerTwo = document.querySelector("#pTwo");

  playerOne.innerHTML = pOne;
  playerTwo.innerHTML = pTwo;
}