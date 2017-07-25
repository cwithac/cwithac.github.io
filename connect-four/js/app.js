console.log('connect four app.js');

//https://en.wikipedia.org/wiki/Connect_Four
//The animation demonstrates Connect Four gameplay where the first player begins by dropping his/her yellow disc into the center column of the game board. The two players then alternate turns dropping one of their discs at a time into an unfilled column, until the second player, with red discs, achieves four discs in a row, diagonally, and wins. If the game board fills before either player achieves four in a row, then the game is a draw.

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

        const rowPlayedArray = [$leftThreeSpace, $leftTwoSpace, $leftOneSpace, $playedSpace, $rightOneSpace, $rightTwoSpace, $rightThreeSpace];
        for (let i = 0; i < rowPlayedArray.length; i++) {
          if ((rowPlayedArray[0].hasClass('redChip')) && (rowPlayedArray[1].hasClass('redChip')) && (rowPlayedArray[2].hasClass('redChip')) && (rowPlayedArray[3].hasClass('redChip'))) {
            // console.log('Red Wins Row');
            redWinsGame = true;
            blackWinsGame = false;
          } else if ((rowPlayedArray[3].hasClass('redChip')) && (rowPlayedArray[4].hasClass('redChip')) && (rowPlayedArray[5].hasClass('redChip')) && (rowPlayedArray[6].hasClass('redChip'))) {
            // console.log('Red Wins Row');
            redWinsGame = true;
            blackWinsGame = false;
          } else if ((rowPlayedArray[0].hasClass('blackChip')) && (rowPlayedArray[1].hasClass('blackChip')) && (rowPlayedArray[2].hasClass('blackChip')) && (rowPlayedArray[3].hasClass('blackChip'))) {
            // console.log('Black Wins Row');
            redWinsGame = false;
            blackWinsGame = true;
          } else if ((rowPlayedArray[3].hasClass('blackChip')) && (rowPlayedArray[4].hasClass('blackChip')) && (rowPlayedArray[5].hasClass('blackChip')) && (rowPlayedArray[6].hasClass('blackChip'))) {
            // console.log('Black Wins Row');
            redWinsGame = false;
            blackWinsGame = true;
          }
        }; //End Row For Loop

        //COL CHECK
          const $downOneSpace = $('#' + ($targetID + 7));
          const $downTwoSpace = $('#' + ($targetID + 14));
          const $downThreeSpace = $('#' + ($targetID + 21));

          const colPlayedArray = [$playedSpace, $downOneSpace, $downTwoSpace, $downThreeSpace];
          for (let i = 0; i < colPlayedArray.length; i++) {
            if ((colPlayedArray[0].hasClass('redChip')) && (colPlayedArray[1].hasClass('redChip')) && (colPlayedArray[2].hasClass('redChip')) && (colPlayedArray[3].hasClass('redChip'))) {
              // console.log('Red Wins Col');
              redWinsGame = true;
              blackWinsGame = false;
              // this.announceTheWinner();
            } else if ((colPlayedArray[0].hasClass('blackChip')) && (colPlayedArray[1].hasClass('blackChip')) && (colPlayedArray[2].hasClass('blackChip')) && (colPlayedArray[3].hasClass('blackChip'))) {
              // console.log('Black Wins Col');
              redWinsGame = false;
              blackWinsGame = true;
            }
          }; //End Col For Loop


        //DIAG CHECK
          const $downRightSpaceOne = $('#' + ($targetID + 8));
          const $downRightSpaceTwo = $('#' + ($targetID + 16));
          const $downRightSpaceThree = $('#' + ($targetID + 24));

          const $downLeftSpaceOne = $('#' + ($targetID + 6));
          const $downLeftSpaceTwo = $('#' + ($targetID + 12));
          const $downLeftSpaceThree = $('#' + ($targetID + 18));

          const diagPlayedArrayRight = [$playedSpace, $downRightSpaceOne, $downRightSpaceTwo, $downRightSpaceThree];
          for (let i = 0; i < diagPlayedArrayRight.length; i++) {
            if ((diagPlayedArrayRight[0].hasClass('redChip')) && (diagPlayedArrayRight[1].hasClass('redChip')) && (diagPlayedArrayRight[2].hasClass('redChip')) && (diagPlayedArrayRight[3].hasClass('redChip'))) {
              // console.log('Red Wins Col');
              redWinsGame = true;
              blackWinsGame = false;
              // this.announceTheWinner();
            } else if ((diagPlayedArrayRight[0].hasClass('blackChip')) && (diagPlayedArrayRight[1].hasClass('blackChip')) && (diagPlayedArrayRight[2].hasClass('blackChip')) && (diagPlayedArrayRight[3].hasClass('blackChip'))) {
              // console.log('Black Wins Col');
              redWinsGame = false;
              blackWinsGame = true;
            }
          }; //End DiagRight For Loop

          const diagPlayedArrayLeft = [$playedSpace, $downLeftSpaceOne, $downLeftSpaceTwo, $downLeftSpaceThree];
          for (let i = 0; i < diagPlayedArrayLeft.length; i++) {
            if ((diagPlayedArrayLeft[0].hasClass('redChip')) && (diagPlayedArrayLeft[1].hasClass('redChip')) && (diagPlayedArrayLeft[2].hasClass('redChip')) && (diagPlayedArrayLeft[3].hasClass('redChip'))) {
              // console.log('Red Wins Col');
              redWinsGame = true;
              blackWinsGame = false;
              // this.announceTheWinner();
            } else if ((diagPlayedArrayLeft[0].hasClass('blackChip')) && (diagPlayedArrayLeft[1].hasClass('blackChip')) && (diagPlayedArrayLeft[2].hasClass('blackChip')) && (diagPlayedArrayLeft[3].hasClass('blackChip'))) {
              // console.log('Black Wins Col');
              redWinsGame = false;
              blackWinsGame = true;
            }
          }; //End DiagLeft For Loop

          //WINNER DEFINED
              // console.log(redWinsGame);
              // console.log(blackWinsGame);
              if (!redWinsGame && !blackWinsGame) {
                  // console.log('Game Continues');
              } else if (redWinsGame && !blackWinsGame) {
                console.log('Red Wins Game');
              } else if (!redWinsGame && blackWinsGame) {
                console.log('Black Wins Game');
              } else {
                console.log('Error');
              }
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
