$( () => {

  //Page Load Invocation
  gameSetup.loadGame();

}); //

// console.log('Landscaper Game app.js is attached to index.html');

//INITIALIZE & GLOBAL VARIABLES
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

const toolOptions = {
  yourTeeth: {
    tool: "your teeth",
    moneyChange: 1,
    cost: 0
  },
  rustyScissors: {
    tool: "a pair of rusty scissors",
    moneyChange: 2,
    cost: 5
  },
  oldTimey: {
    tool: "an old-timey push lawnmower",
    moneyChange: 25,
    cost: 50
  },
  fancyBattery: {
    tool: "a fancy battery-powered lawnmower",
    moneyChange: 100,
    cost: 250
  },
  studentTeam: {
    tool: "a team of students",
    moneyChange: 250,
    cost: 500
  }
};

//GAME SETUP
const gameSetup = {
  loadGame() {
    $('body').append($container);
    $container.append($buttonRowInfo, $buttonRowPlay);
    $buttonRowInfo.append($startButton, $howToPlayButton, $restartButton);
  },
  initializeLevel() {
    tool = toolOptions.yourTeeth.tool;
    money = 0;
    amountEarned = toolOptions.yourTeeth.moneyChange;
  },
  startGame() {
    $startButton.hide();
    gameSetup.initializeLevel();
    gameSetup.showStatus();
    gameSetup.scoreBoxInfo();
  },
  scoreBoxInfo() {
    $scoreStats.html('<div>Money: $' + money + '</div><div>Tool: ' + tool + '</div>');
    $scoreStats.insertAfter($buttonRowInfo);
  },
  updateScoreStats() {
    $scoreStats.html('<div>Money: $' + money + '</div><div>Tool: ' + tool + '</div>');
  },
  showStatus() {
    $infoStatus.empty();
    $infoStatus.text("Using " + tool + " will earn you $" + amountEarned + " each day!");
    $buttonRowPlay.append($landscapeButton, $buyToolsButton);
    $infoStatus.insertBefore($buttonRowPlay);
    gameSetup.questionPrompt();
  },
  questionPrompt() {
    $question.text("What do you want to do?");
    $question.insertBefore($buttonRowPlay);
  },
  resetGame() {
    $scoreStats.empty();
    $question.empty();
    $infoStatus.empty();
    $buttonRowPlay.empty();
    $startButton.show();
    gameSetup.loadGame();
    $landscapeButton.on('click', runLandscape);
    $buyToolsButton.on('click', checkForEnoughMoney);
  }
};

//GAME PLAY
const gamePlay = {
  runLandscape() {
    if (tool === toolOptions.yourTeeth.tool) {
      money += toolOptions.yourTeeth.moneyChange;
      amountEarned = toolOptions.yourTeeth.moneyChange;
    } else if (tool === toolOptions.rustyScissors.tool) {
      money += toolOptions.rustyScissors.moneyChange;
      amountEarned = toolOptions.rustyScissors.moneyChange;
    } else if (tool === toolOptions.oldTimey.tool) {
      money += toolOptions.oldTimey.moneyChange;
      amountEarned = toolOptions.oldTimey.moneyChange;
    } else if (tool === toolOptions.fancyBattery.tool) {
      money += toolOptions.fancyBattery.moneyChange;
      amountEarned = toolOptions.fancyBattery.moneyChange;
    } else if (tool === toolOptions.studentTeam.tool) {
      money += toolOptions.studentTeam.moneyChange;
      amountEarned = toolOptions.studentTeam.moneyChange;
        if (money >= 1000 ) {
          alertWinner();
        }
    }
    gameSetup.updateScoreStats();
    gameSetup.showStatus();
  },
  checkForEnoughMoney() {
    if ((money >= toolOptions.studentTeam.cost) && (tool === toolOptions.fancyBattery.tool)) {
        gamePlay.buyOptions.buyTeamOfStudents();
    } else if ((money >= toolOptions.fancyBattery.cost) && (tool === toolOptions.oldTimey.tool)){
        gamePlay.buyOptions.buyFancyBattery();
    } else if ((money >= toolOptions.oldTimey.cost) && (tool === toolOptions.rustyScissors.tool)){
        gamePlay.buyOptions.buyOldTimey();
    } else if ((money >= toolOptions.rustyScissors.cost) && (tool === toolOptions.yourTeeth.tool)) {
        gamePlay.buyOptions.buyScissors();
    } else {
      $infoStatus.text("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
    }
  },
  buyOptions: {
    buyScissors() {
      cost = toolOptions.rustyScissors.cost;
      money -= cost;
      tool = toolOptions.rustyScissors.tool;
      amountEarned = toolOptions.rustyScissors.moneyChange;
      gameSetup.updateScoreStats();
      gameSetup.showStatus();
      gameInfo.alertText();
    },
    buyOldTimey() {
      cost = toolOptions.oldTimey.cost;
      money -= cost;
      tool = toolOptions.oldTimey.tool;
      amountEarned = toolOptions.oldTimey.moneyChange;
      gameSetup.updateScoreStats();
      gameSetup.showStatus();
      gameInfo.alertText();
    },
    buyFancyBattery() {
      cost = toolOptions.fancyBattery.cost;
      money -= cost;
      tool = toolOptions.fancyBattery.tool;
      amountEarned = toolOptions.fancyBattery.moneyChange;
      gameSetup.updateScoreStats();
      gameSetup.showStatus();
      gameInfo.alertText();
    },
    buyTeamOfStudents() {
      cost = toolOptions.studentTeam.cost;
      money -= cost;
      tool = toolOptions.studentTeam.tool;
      amountEarned = toolOptions.studentTeam.moneyChange;
      gameSetup.updateScoreStats();
      gameSetup.showStatus();
      gameInfo.alertText();
      $buyToolsButton.empty();
    }
  }
};

//GAME INFO
const gameInfo = {
  alertText() {
    if (tool === toolOptions.studentTeam.tool) {
      $infoStatus.text("You have hired " + tool + " for $" + cost +"!  Using this tool will earn you $" + amountEarned + " each day!");
    } else {
      $infoStatus.text("You have purchased " + tool + " for $" + cost +"!  Using this tool will earn you $" + amountEarned + " each day!");
    }
  },
  alertWinner() {
    $infoStatus.text("Congratulations!  You have made $" + money + " with the help of your tools!  You have won the game!");
    $question.empty();
    $buttonRowPlay.empty();
  }
};

//EVENT LISTENERS
// const eventListeners = {
//
// }
$startButton.on('click', gameSetup.startGame);
$restartButton.on('click', gameSetup.resetGame);

$landscapeButton.on('click', gamePlay.runLandscape);
$buyToolsButton.on('click', gamePlay.checkForEnoughMoney);





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
