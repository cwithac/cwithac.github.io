$( () => {

  //Page Load Invocation
  loadGame();

}); //

// console.log('Landscaper Game app.js is attached to index.html');

//INITIALIZE
let tool;
let money;
let cost;
let amountEarned;
let choice;

const $container = $('<div>').attr('id', 'container');
const $buttonRowInfo = $('<div>').attr('id', 'buttonRowInfo');
const $buttonRowPlay = $('<div>').attr('id', 'buttonRowPlay');
const $startButton = $('<div>Start</div>').attr('class', 'button');
const $landscapeButton = $('<div>Landscape</div>').attr('class', 'button');
const $buyToolsButton = $('<div>Buy Tools</div>').attr('class', 'button');
const $restartButton = $('<div>Restart</div>').attr('class', 'button');
const $howToPlayButton = $('<div>How To Play</div>').attr('class', 'button');
const $infoStatus = $('<div>').attr('id', 'infoStatus');
const $question = $('<div>').attr('id', 'questionBox');
const $scoreStats = $('<div>').attr('id', 'scoreBox');

const loadGame = () => {
  $('body').append($container);
  $container.append($buttonRowInfo, $buttonRowPlay);
  $buttonRowInfo.append($startButton, $howToPlayButton, $restartButton);
};

const initializeLevel = () => {
  tool = "your teeth";
  money = 1;
  amountEarned = 1;
};

const startGame = () => {
  $startButton.empty();
  initializeLevel();
  showStatus();
  scoreBoxInfo();
};

const scoreBoxInfo = () => {
  $scoreStats.html('<div>Money: $' + money + '</div><div>Tool: ' + tool + '</div>');
  $scoreStats.insertAfter($buttonRowInfo);
}

const updateScoreStats = () => {
  $scoreStats.html('<div>Money: $' + money + '</div><div>Tool: ' + tool + '</div>');
};

const showStatus = () => {
  $infoStatus.empty();
  $infoStatus.text("Using " + tool + " will earn you $" + amountEarned + " each day!");
  $buttonRowPlay.append($landscapeButton, $buyToolsButton);
  $infoStatus.insertBefore($buttonRowPlay);
  questionPrompt();
};

const questionPrompt = () => {
  $question.text("What do you want to do?");
  $question.insertBefore($buttonRowPlay);
};

const runLandscape = () => {

  if (tool === "your teeth") {
    money += 1;
    amountEarned = 1;
  } else if (tool === "a pair of rusty scissors") {
    money += 5;
    amountEarned = 5;
  } else if (tool === "an old-timey push lawnmower") {
    money += 50;
    amountEarned = 50;
  } else if (tool === "a fancy battery-powered lawnmower") {
    money += 100;
    amountEarned = 100;
  } else if (tool === "a team of students") {
    money += 250;
    amountEarned = 250;
      if (money >= 1000 ) {
        alertWinner();
      }
  }
  updateScoreStats();
  showStatus();
};

const checkForEnoughMoney = () => {
  if ((money < 5) && (tool === "your teeth")) {
      $infoStatus.text("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
    } else if ((money >= 5) && (tool === "your teeth")) {
        buyScissors();
    } else if ((money >= 25) && (tool === "a pair of rusty scissors")) {
        buyOldTimey();
    } else if ((money >= 250) && (tool === "an old-timey push lawnmower")) {
        buyFancyBattery();
    } else if ((money >= 500) && (tool === "a fancy battery-powered lawnmower")) {
        buyTeamOfStudents();
    } else {
        $infoStatus.text("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
    }
};

const buyScissors = () => {
  cost = 5;
  money -= 5;
  tool = "a pair of rusty scissors";
  updateScoreStats();
  alertText();
};

const buyOldTimey = () => {
  cost = 25;
  money -= 25;
  tool = "an old-timey push lawnmower";
  updateScoreStats();
  alertText();
};

const buyFancyBattery = () => {
  cost = 250;
  money -= 250;
  tool = "a fancy battery-powered lawnmower";
  updateScoreStats();
  alertText();
};

const buyTeamOfStudents = () => {
  cost = 500;
  money -= 500;
  tool = "a team of students";
  updateScoreStats();
  alertText();
  $buyToolsButton.empty();
};

const alertText = () => {
  if (tool === "a team of students") {
    $infoStatus.text("You have hired " + tool + " for $" + cost +"!  Using this tool will earn you $" + cost + " each day!");
  } else {
    $infoStatus.text("You have purchased " + tool + " for $" + cost +"!  Using this tool will earn you $" + cost + " each day!");
  }
};

const alertWinner = () => {
  $infoStatus.text("Congratulations!  You have made $" + money + " with the help of your tools!  You have won the game!");
  $question.empty();
  $buttonRowPlay.empty();
};

const resetGame = () => {
  $scoreStats.empty();
  $question.empty();
  $infoStatus.empty();
  $buttonRowPlay.empty();
  $startButton.text('Start')
  loadGame();
  $landscapeButton.on('click', runLandscape);
  $buyToolsButton.on('click', checkForEnoughMoney);
}

//Listeners

$startButton.on('click', startGame);
$restartButton.on('click', resetGame);

$landscapeButton.on('click', runLandscape);
$buyToolsButton.on('click', checkForEnoughMoney);





//==============================================================================

// const instructions = () => {
//   alert("Welcome to the game!  You are starting a landscaping business.  Use your tools to earn more money!")
//   alert("You win the game when you have a team of starving students helping and $1000.")
//   alert("To start, the only tool you have are your teeth. Using just " + tool + ", you can spend the day cutting lawns and make $" + money + ".  You can do this as much as you want.");
// };


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
