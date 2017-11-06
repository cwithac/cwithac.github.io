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

const $container = $('<div>').attr('id', 'container');
const $buttonRowInfo = $('<div>').attr('id', 'buttonRowInfo');
const $buttonRowPlay = $('<div>').attr('id', 'buttonRowPlay');
const $startButton = $('<div>Start</div>').attr('class', 'button');
const $landscapeButton = $('<div></div>').attr('class', 'button').attr('id', 'landscape');
const $buyToolsButton = $('<div></div>').attr('class', 'button').attr('id', 'buy');
const $restartButton = $('<div>Restart</div>').attr('class', 'button');
const $howToPlayButton = $('<div>How To Play</div>').attr('class', 'button');
const $infoStatus = $('<div>').attr('id', 'infoStatus');
const $question = $('<div>').attr('id', 'questionBox');
const $scoreStats = $('<div>').attr('id', 'scoreBox');

const $mowerIcon = $('<img src="images/mower.png">Landscape</img>');
const $buyIcon = $('<img src="images/moneybag.png">Buy Tools</img>');

class ToolOption {
  constructor(type, moneyChange, cost) {
    this.type = type;
    this.moneyChange = moneyChange;
    this.cost = cost;
  };
};

const yourTeeth = new ToolOption('your teeth', 1, 0);
const rustyScissors = new ToolOption('a pair of rusty scissors', 2, 5);
const oldTimey = new ToolOption('an old-timey push lawnmower', 25, 50);
const fancyBattery = new ToolOption('a fancy battery-powered lawnmower', 50, 250);
const studentTeam = new ToolOption('a team of students', 100, 500);

//GAME SETUP
const gameSetup = {
  loadGame() {
    $('body').append($container);
    $container.append($buttonRowInfo, $buttonRowPlay);
    $buttonRowInfo.append($startButton, $howToPlayButton, $restartButton);
  },
  initializeLevel() {
    tool = yourTeeth.type;
    money = 0;
    amountEarned = yourTeeth.moneyChange;
  },
  startGame() {
    $startButton.hide();
    gameSetup.initializeLevel();
    gameSetup.showStatus();
    gameSetup.scoreBoxInfo();
    $landscapeButton.append($mowerIcon);
    $buyToolsButton.append($buyIcon);
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
    $buyToolsButton.show();
    $landscapeButton.on('click', gamePlay.runLandscape);
    $buyToolsButton.on('click', gamePlay.checkForEnoughMoney);
    gameSetup.startGame();
  },
  checkForWinner() {
    if (money > 1000) {
      gameInfo.alertWinner();
    }
  },
  updateShowCheckFunction() {
    gameSetup.updateScoreStats();
    gameSetup.showStatus();
    gameSetup.checkForWinner();
  },
  updateShowAlertFunction() {
    gameSetup.updateScoreStats();
    gameSetup.showStatus();
    gameInfo.alertText();
  }
};

//GAME PLAY
const gamePlay = {
  runLandscape() {
    if (money < 1000) {
      if (tool === yourTeeth.type) {
        money += yourTeeth.moneyChange;
        amountEarned = yourTeeth.moneyChange;
        gameSetup.updateShowCheckFunction();
      } else if (tool === rustyScissors.type) {
        money += rustyScissors.moneyChange;
        amountEarned = rustyScissors.moneyChange;
        gameSetup.updateShowCheckFunction();
      } else if (tool === oldTimey.type) {
        money += oldTimey.moneyChange;
        amountEarned = oldTimey.moneyChange;
        gameSetup.updateShowCheckFunction();
      } else if (tool === fancyBattery.type) {
        money += fancyBattery.moneyChange;
        amountEarned = fancyBattery.moneyChange;
        gameSetup.updateShowCheckFunction();
      } else if (tool === studentTeam.type) {
        money += studentTeam.moneyChange;
        amountEarned = studentTeam.moneyChange;
        gameSetup.updateShowCheckFunction();
      }
    } else {
      gameInfo.alertWinner();
    }
  },
  checkForEnoughMoney() {
    if ((money >= studentTeam.cost) && (tool === fancyBattery.type)) {
        gamePlay.buyOptions.buyTeamOfStudents();
    } else if ((money >= fancyBattery.cost) && (tool === oldTimey.type)){
        gamePlay.buyOptions.buyFancyBattery();
    } else if ((money >= oldTimey.cost) && (tool === rustyScissors.type)){
        gamePlay.buyOptions.buyOldTimey();
    } else if ((money >= rustyScissors.cost) && (tool === yourTeeth.type)) {
        gamePlay.buyOptions.buyScissors();
    } else {
      $infoStatus.text("Sorry, you don't have enough money to buy a new tool yet.  Keep landscaping!");
    }
  },
  buyOptions: {
    buyScissors() {
      cost = rustyScissors.cost;
      money -= cost;
      tool = rustyScissors.type;
      amountEarned = rustyScissors.moneyChange;
      gameSetup.updateShowAlertFunction();
    },
    buyOldTimey() {
      cost = oldTimey.cost;
      money -= cost;
      tool = oldTimey.type;
      amountEarned = oldTimey.moneyChange;
      gameSetup.updateShowAlertFunction();
    },
    buyFancyBattery() {
      cost = fancyBattery.cost;
      money -= cost;
      tool = fancyBattery.type;
      amountEarned = fancyBattery.moneyChange;
      gameSetup.updateShowAlertFunction();
    },
    buyTeamOfStudents() {
      cost = studentTeam.cost;
      money -= cost;
      tool = studentTeam.type;
      amountEarned = studentTeam.moneyChange;
      gameSetup.updateShowAlertFunction();
      $buyToolsButton.hide();
    }
  }
};

//GAME INFO
const gameInfo = {
  alertText() {
    if (tool === studentTeam.type) {
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
