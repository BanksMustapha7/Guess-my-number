"use strict";

// defines the random number
let number = Math.round(Math.random() * 19 + 1); //I defined the random number here

//DOM elements and Increment Value
let i = 20;
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
const guess = document.querySelector(".guess");
const hint = document.querySelector(".hint");
const again = document.querySelector(".again");
const check = document.querySelector(".check");

check.addEventListener("click", gamePlay);
document.querySelector("body").addEventListener("keydown", function(e){
  if (e.key === 'Enter'){
    gamePlay();
  }
});


// Updated Game Logic
function gamePlay() {
  let val = Number(document.querySelector(".guess").value);

  score.textContent = i;
  
  //If there is no input
  if (val == "") {
    message.textContent = "No Number!";
  } 
  /* If there is Input - Game Logic impplements*/ else {
  
    //If the guess is correct
    if (val === number) {
      message.textContent = "Correct Number !";
      document.querySelector(".number").textContent = val;
      hint.textContent = "";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "18rem";
      
      const theAlert = function () {
        alert("Congratulations, You Won!");
      };
      setTimeout(theAlert, 500);
      document.querySelector(".highscore");
      // highscore.textContent = score.textContent;

       //update highscore
      if (score.textContent > highscore.textContent){
        highscore.textContent =  score.textContent;
      }
      //reset the game
      const reset = function () {
        message.textContent = "Press again to start guessing...";
        score.textContent = i;
        guess.value = "";
        document.querySelector("body").style.backgroundColor = "black";
      };
      setTimeout(reset, 2000);
    }
    // Else If the guess is wrong
    else {
      message.textContent = "Wrong Number";
      i--;
      score.textContent = i;
      //If number is too high or too low
      (val > number) ?  hint.textContent = "Too High 📈":  hint.textContent = "Too Low 📉";
      
      //While score is less than 1 - Game Over.
      if (score.textContent < 1) {
        alert("Game Over!");
        location.reload();
      }
    }
  }
};
//Again that resets the game
again.addEventListener("click", function () {
  //Reset the game elements
      i = 20;
      guess.textContent = "";
      score.textContent = i;
       message.textContent = "Start guessing...";
       document.querySelector(".number").textContent = "?";
       number = Math.trunc(Math.random() * 19 + 1);
       document.querySelector(".number").style.width = "15rem";
});