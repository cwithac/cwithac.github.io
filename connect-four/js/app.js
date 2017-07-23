console.log('connect four app.js');

//https://en.wikipedia.org/wiki/Connect_Four
//The animation demonstrates Connect Four gameplay where the first player begins by dropping his/her yellow disc into the center column of the game board. The two players then alternate turns dropping one of their discs at a time into an unfilled column, until the second player, with red discs, achieves four discs in a row, diagonally, and wins. If the game board fills before either player achieves four in a row, then the game is a draw.


//https://github.com/edoorn/edoorn.github.io/blob/master/pandulce/js/app.js
//Win cases

//---------------------------------------------------------//

$(() => { // Window Onload

  UI.createGameBoard();

}); //End of Window Onload

//---------------------------------------------------------//

//Global variables

  let redTurn = true;
  let played = false;
  let legalMove = false;

//---------------------------------------------------------//

//User Interface Objects

const UI = {
  createGameBoard(){
    //Generates 6x7 game board of squares
      for (let i = 0; i < 42; i++) {
          const $gameBoard = $('#gameboard');
          const $square = $('<div>').attr('class', 'emptySpace').attr('id', i);
          $gameBoard.append($square).eq(i);
            if (i > 34) {
              $square.addClass('canBePlayed');
            }
          $square.on('click', PA.playPiece);
        };
        this.whoseTurnIsIt();
      },
    whoseTurnIsIt() {
      //Informs user if it is red turn or black turn
      const $whoseTurn = $('#whose-turn')
      if (redTurn) {
        $whoseTurn.text("It is the red player's turn!");
      } else {
        $whoseTurn.text("It is the black player's turn!");
      }
    },
    checkForLegalMove(e) {
      //Confirms 'gravity', fill from bottom to top
      const $openSpace = $(e.currentTarget).hasClass('canBePlayed')
      const $targetID = parseInt($(e.currentTarget).attr('id'));
      const $spaceAbove = $('#' + ($targetID - 7));
        if ($openSpace) {
          $spaceAbove.addClass('canBePlayed');
          legalMove = true;
        } else {
          legalMove = false;
        };
    },
    checkForWinner(e) {

      let redWinsGame = false;
      let blackWinsGame = false;

      const $targetID = parseInt($(e.currentTarget).attr('id'));
      const $playedSpace = $('#' + ($targetID));

      //ROW CHECK
        const $rightOneSpace = $('#' + ($targetID + 1));
        const $rightTwoSpace = $('#' + ($targetID + 2));
        const $rightThreeSpace = $('#' + ($targetID + 3));
        const $leftOneSpace = $('#' + ($targetID - 1));
        const $leftTwoSpace = $('#' + ($targetID - 2));
        const $leftThreeSpace = $('#' + ($targetID - 3));

        const playedArray = [$leftThreeSpace, $leftTwoSpace, $leftOneSpace, $playedSpace, $rightOneSpace, $rightTwoSpace, $rightThreeSpace];
        for (let i = 0; i < playedArray.length; i++) {
          if ((playedArray[0].hasClass('redChip')) && (playedArray[1].hasClass('redChip')) && (playedArray[2].hasClass('redChip')) && (playedArray[3].hasClass('redChip'))) {
            console.log('Red Wins Row');
            let redWinsGame = true;
            let blackWinsGame = false;
          } else if ((playedArray[3].hasClass('redChip')) && (playedArray[4].hasClass('redChip')) && (playedArray[5].hasClass('redChip')) && (playedArray[6].hasClass('redChip'))) {
            console.log('Red Wins Row');
            let redWinsGame = true;
            let blackWinsGame = false;
          } else if ((playedArray[0].hasClass('blackChip')) && (playedArray[1].hasClass('blackChip')) && (playedArray[2].hasClass('blackChip')) && (playedArray[3].hasClass('blackChip'))) {
            console.log('Black Wins Row');
            let redWinsGame = false;
            let blackWinsGame = true;
          } else if ((playedArray[3].hasClass('blackChip')) && (playedArray[4].hasClass('blackChip')) && (playedArray[5].hasClass('blackChip')) && (playedArray[6].hasClass('blackChip'))) {
            console.log('Black Wins Row');
            let redWinsGame = false;
            let blackWinsGame = true;
          }
        }

      this.whoseTurnIsIt();
    }
  }; //End UI object

//---------------------------------------------------------//

//Player Action Objects

  const PA = {
    playPiece(e) {
      UI.checkForLegalMove(e);
      //Plays red and black alternating
      if (legalMove) {
        played = false;
        if (redTurn && !played) {
          $(e.currentTarget).attr('class', 'redChip').addClass('played').removeClass('emptySpace');
          redTurn = false;
          played = true;
          UI.checkForWinner(e)
        } else {
          $(e.currentTarget).attr('class', 'blackChip').addClass('played').removeClass('emptySpace');
          redTurn = true;
          played = true;
          UI.checkForWinner(e)
        };
      }
    }
  }; //End PA Object
