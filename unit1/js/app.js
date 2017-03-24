// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

//======================================================================//
//Window Onload Function

$(function() {


}); // closes window onload function

//======================================================================//

//PSEUDOCODE

// //Characters
// - Player 1 // Alexander Hamilton
// - Player 2 // Aaron Burr
//
// //Visual
// Container for Div P1 & Div P2
// Div for Player 1 question
// Div for Player 2 question
// Score 1 Div
// Score 2 Div
// Reset Div
// How to Div // Stretch
//
// //Content
// questions = [
//   { question: "Question 1", // Question 1...
//     choices: ["A1", "A2", "A3"], // Array of possible answers
//     correctAnswer: Index# // Index of correct Answer
//   },
//   { question: "Question 2", // Question 2...
//     choices: ["A1", "A2", "A3"], // Array of possible answers
//     correctAnswer: Index# // Index of correct Answer
//   }
// ];
//
// Text + Radio Button
//
// Player 1 Score = 0 //at start of game
// Player 2 Score = 0 //at start of game
//
// question counter // tracks questions asked (if question < questions.length...)
// user answers [] // tracks users answers (with push and .val() correct/not correct)
//
// How to Play (lorem ...)
//
// //Gameplay
// Toggle // Switches Players after question has been asked
// Player 1 Score +1 Question Correct +0 Incorrect
// Player 2 Score +1 Question Correct +0 Incorrect
//
// //If selected = index, correct, if not, incorrect ...
//
// Each player turn, send to win eval.
//
// //Winner Eval
// Checks if X questions have been asked, if not continue game with P1.
// Checks between Player 1 and Player 2 Score for Winner
// Winner Message
//
// //Reset Game
// Starts game over without refresh (resets questions asked to 0, resets score)
//
// //CSS Stretch
// Background Music

//======================================================================//

//Player Variables
var player1 = {
  name: "Alexander Hamilton",
  score: 0,
  answersGiven: []
};

var player2 = {
  name: "Aaron Burr",
  score: 0,
  answersGiven: []
};

//Global Trackers
var questionCounter = [];


//======================================================================//

//Questions
var questions = [
  { question: "Question 1", // Question 1...
    choices: ["A1", "A2", "A3"], // Array of possible answers
    correctAnswer: 0 // Index of correct Answer
  },
  { question: "Question 2", // Question 2...
    choices: ["A1", "A2", "A3"], // Array of possible answers
    correctAnswer: 0 // Index of correct Answer
  }
];

//======================================================================//

//Game Play

//Player Actions
var alexanderHamilton = function() {
  console.log("alexanderHamilton function has been called.");
  //Player 1 Turn
  // aaronBurr();
};

var aaronBurr = function() {
  console.log("aaronBurr function has been called.");
  //Player 2 Turn
  // evalWinner();
};

//Game Actions
var evalWinner = function() {
  console.log("evalWinner function has been called.");
  //if questionCounter.length < questions.length
  //continue game...
  //else checkWinner();
};

var checkWinner = function() {
  console.log("checkWinner function has been called.");
  //which score is higher
  //inform winner
};

var startGame = function() {
  console.log("startGame function has been called.");
  // alexanderHamilton();
};

startGame(); // Runs at Window Load, Disable to deactivate game
