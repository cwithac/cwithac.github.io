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
      const $targetIDAbove = parseInt($(e.currentTarget).attr('id'));
      const $spaceAbove = $('#' + ($targetIDAbove - 7));
        if ($openSpace) {
          $spaceAbove.addClass('canBePlayed');
          legalMove = true;
        } else {
          legalMove = false;
        };
    },
    checkForWinner() {
      
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
          UI.checkForWinner()
        } else {
          $(e.currentTarget).attr('class', 'blackChip').addClass('played').removeClass('emptySpace');
          redTurn = true;
          played = true;
          UI.checkForWinner()
        };
      }
    }
  }; //End PA Object
