$( () => {

  //Page Load Invocation
  startGame();

}); //

// console.log('Landscaper Game app.js is attached to index.html');

//INITIALIZE
let tool;
let money;
let cost;
let choice;

const startGame = () => {
  tool = "your teeth";
  money = 1;
  // instructions();
  // askForAction();

  const $container = $('<div>').attr('id', 'container');
  const $buttonRowInfo = $('<div>').attr('id', 'buttonRowInfo');
  const $buttonRowPlay = $('<div>').attr('id', 'buttonRowPlay');
  $('body').append($container);
  $container.append($buttonRowInfo, $buttonRowPlay);


  const $landscapeButton = $('<div>Landscape</div>').attr('class', 'button');
  const $buyToolsButton = $('<div>Buy Tools</div>').attr('class', 'button');
  const $restartButton = $('<div>Restart</div>').attr('class', 'button');
  const $exitButton = $('<div>End Game</div>').attr('class', 'button');
  const $howToPlayButton = $('<div>How To Play</div>').attr('class', 'button');

  $buttonRowInfo.append($restartButton, $exitButton, $howToPlayButton);
  $buttonRowPlay.append($landscapeButton, $buyToolsButton);

  const $infoStatus = $('<div>').attr('id', 'infoStatus').text("You have $" + money + ".  Your tool is " + tool + ".");
  $container.append($infoStatus);
};



// const instructions = () => {
//   alert("Welcome to the game!  You are starting a landscaping business.  Use your tools to earn more money!")
//   alert("You win the game when you have a team of starving students helping and $1000.")
//   alert("To start, the only tool you have are your teeth. Using just " + tool + ", you can spend the day cutting lawns and make $" + money + ".  You can do this as much as you want.");
// };
//
// //USER INFORMATION
// const showStatus = () => {
//   alert("You have $" + money + ".  Your tool is " + tool + ".")
// };
//
// //USER ACTIONS AND INPUT
// const askForAction = () => {
//   showStatus();
//   promptQuestions();
// };
//
// const promptQuestions = () => {
//   choice = prompt("What do you want to do?", "landscape/buy tools");
//     if (choice.toLowerCase() === "landscape") {
//       landscape();
//     } else if (choice.toLowerCase() === "buy tools") {
//       checkTool();
//     } else if (choice.toLowerCase() === "exit") {
//       //exits game - option not shown to user
//     } else if (choice.toLowerCase() === "restart") {
//       //resets game - option not shown to user
//       start();
//     } else {
//       alert("Please try that action again!")
//       askForAction();
//     }
// };
//
// //LANDSCAPE ACTIONS
// const landscape = () => {
//   if (tool === "your teeth") {
//     alert("Using " + tool + " will earn you $1 each day!")
//     money += 1;
//     askForAction();
//   } else if (tool === "a pair of rusty scissors") {
//     money += 5;
//     askForAction();
//   } else if (tool === "an old-timey push lawnmower") {
//     money += 50;
//     askForAction();
//   } else if (tool === "a fancy battery-powered lawnmower") {
//     money += 100;
//     askForAction();
//   } else if (tool === "a team of starving students") {
//     money += 250;
//       if (money <1000 ) {
//         askForAction();
//       } else {
//         //Game Ends
//         alert("Congratulations!  You have made $" + money + " with the help of your tools!  You have won the game!")
//       }
//   }
// };
//
//
// //CHECK AND BUY TOOLS
// const checkTool = function () {
//   if (money < 5) {
//     alert("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
//     askForAction();
//   } else {
//     buyTool();
//   }
// };
//
// const buyTool = () => {
//   if ((money >= 5) && (tool === "your teeth")) {
//     alert("You can afford to buy a new tool!")
//     buyScissors();
//   } else if ((money >= 25) && (tool === "a pair of rusty scissors")) {
//     alert("You can afford to buy a new tool!")
//     buyOldTimey();
//   } else if ((money >= 250) && (tool === "an old-timey push lawnmower")) {
//     alert("You can afford to buy a new tool!")
//     buyFancyBattery();
//   } else if ((money >= 500) && (tool === "a fancy battery-powered lawnmower")) {
//     alert("You can afford to buy a new tool!")
//     buyTeamOfStudents();
//   } else {
//     alert("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
//     askForAction();
//   }
// };
//
//
// //BUY FUNCTIONS
// const buyScissors = () => {
//   cost = 5;
//   money -= 5;
//   tool = "a pair of rusty scissors";
//   alertText();
// };
//
// const buyOldTimey = () => {
//   cost = 25;
//   money -= 25;
//   tool = "an old-timey push lawnmower";
//   alertText();
// };
//
// const buyFancyBattery = () => {
//   cost = 250;
//   money -= 250;
//   tool = "a fancy battery-powered lawnmower";
//   alertText();
// };
//
// const buyTeamOfStudents = () => {
//   cost = 500;
//   money -= 500;
//   tool = "a team of starving students";
//   alertText();
// };
//
// const alertText = () => {
//   alert("You can buy " + tool + " for $" + cost + ".");
//   alert("You have purchased " + tool + "!  Using this tool will earn you $" + cost + " each day!");
//   askForAction();
// };
//
// // PAGE LOAD FUNCTION CALL
// startGame();

//==============================================================================

// How to Play
//
// Reload the page to launch the game.
//
// You are starting a landscaping business, but all you have are your teeth. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
//
// At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money. Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
//
// At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money. Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
//
// At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money. Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
//
// At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money. Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
//
// You win the game when you have a team of starving students and $1000.
