console.log('connect four app.js');

//https://en.wikipedia.org/wiki/Connect_Four
//The animation demonstrates Connect Four gameplay where the first player begins by dropping his/her yellow disc into the center column of the game board. The two players then alternate turns dropping one of their discs at a time into an unfilled column, until the second player, with red discs, achieves four discs in a row, diagonally, and wins. If the game board fills before either player achieves four in a row, then the game is a draw.

//---------------------------------------------------------//

$(() => { // Window Onload

  UI.createGameBoard();
  PA.resetGame();

}); //End of Window Onload

//---------------------------------------------------------//

//Global variables

  let playCounter = 0;
  let redTurn = true;
  let played = false;
  let legalMove = false;
  let redWinsGame = false;
  let blackWinsGame = false;
  let redScore = 0;
  let blackScore = 0;
  let rounds = 1;

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
        this.keepScore();
      },
    whoseTurnIsIt() {
      //Informs user if it is red turn or black turn
      const $whoseTurn = $('#whose-turn')
      if (redTurn) {
        $whoseTurn.attr('class', 'redPlayer');
        // $whoseTurn.text("It is the red player's turn!");
      } else {
        $whoseTurn.attr('class', 'blackPlayer');
        // $whoseTurn.text("It is the black player's turn!");
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
      //searches for winner, game continues if condition is not met

      const $targetID = parseInt($(e.currentTarget).attr('id'));
      //Last played space
      const $playedSpace = $('#' + ($targetID));

      //ROW CHECK
        const $rightOneSpace = $('#' + ($targetID + 1));
        const $rightTwoSpace = $('#' + ($targetID + 2));
        const $rightThreeSpace = $('#' + ($targetID + 3));
        const $leftOneSpace = $('#' + ($targetID - 1));
        const $leftTwoSpace = $('#' + ($targetID - 2));
        const $leftThreeSpace = $('#' + ($targetID - 3));
      //COLUMN CHECK
        const $downOneSpace = $('#' + ($targetID + 7));
        const $downTwoSpace = $('#' + ($targetID + 14));
        const $downThreeSpace = $('#' + ($targetID + 21));
      //DIAGONAL CHECK
        const $downRightSpaceOne = $('#' + ($targetID + 8));
        const $downRightSpaceTwo = $('#' + ($targetID + 16));
        const $downRightSpaceThree = $('#' + ($targetID + 24));
        const $downLeftSpaceOne = $('#' + ($targetID + 6));
        const $downLeftSpaceTwo = $('#' + ($targetID + 12));
        const $downLeftSpaceThree = $('#' + ($targetID + 18));

      //Array of possible winning positions delcared in checks
        const arrayOfWinning = [$playedSpace, $rightOneSpace, $rightTwoSpace, $rightThreeSpace, $leftThreeSpace, $leftTwoSpace, $leftOneSpace, $downOneSpace, $downTwoSpace, $downThreeSpace, $downRightSpaceOne, $downRightSpaceTwo, $downRightSpaceThree, $downLeftSpaceOne, $downLeftSpaceTwo, $downLeftSpaceThree];

        // const arrayOfWinningOptions = [
        //   [arrayOfWinning[0], arrayOfWinning[1], arrayOfWinning[2], arrayOfWinning[3]],
        //   [arrayOfWinning[0], arrayOfWinning[4], arrayOfWinning[5], arrayOfWinning[6]],
        //   [arrayOfWinning[0], arrayOfWinning[7], arrayOfWinning[8], arrayOfWinning[9]],
        //   [arrayOfWinning[0], arrayOfWinning[10], arrayOfWinning[11], arrayOfWinning[12]],
        //   [arrayOfWinning[0], arrayOfWinning[13], arrayOfWinning[14], arrayOfWinning[15]],
        // ];

      //Apply if winning condition is met
        //Sets winner of game based on condition
          //Highlights winner's play
        for (let i = 0; i < arrayOfWinning.length; i++) {
          if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[1].hasClass('redChip')) && (arrayOfWinning[2].hasClass('redChip')) && (arrayOfWinning[3].hasClass('redChip'))) {
            // console.log('Red Wins Row');
            redWinsGame = true;
            blackWinsGame = false;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[1].attr('class', 'highlightWinner');
                  arrayOfWinning[2].attr('class', 'highlightWinner');
                  arrayOfWinning[3].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[4].hasClass('redChip')) && (arrayOfWinning[5].hasClass('redChip')) && (arrayOfWinning[6].hasClass('redChip'))) {
            // console.log('Red Wins Row');
            redWinsGame = true;
            blackWinsGame = false;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[4].attr('class', 'highlightWinner');
                  arrayOfWinning[5].attr('class', 'highlightWinner');
                  arrayOfWinning[6].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[1].hasClass('blackChip')) && (arrayOfWinning[2].hasClass('blackChip')) && (arrayOfWinning[3].hasClass('blackChip'))) {
            // console.log('Black Wins Row');
            redWinsGame = false;
            blackWinsGame = true;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[1].attr('class', 'highlightWinner');
                  arrayOfWinning[2].attr('class', 'highlightWinner');
                  arrayOfWinning[3].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[4].hasClass('blackChip')) && (arrayOfWinning[5].hasClass('blackChip')) && (arrayOfWinning[6].hasClass('blackChip'))) {
            // console.log('Black Wins Row');
            redWinsGame = false;
            blackWinsGame = true;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[4].attr('class', 'highlightWinner');
                  arrayOfWinning[5].attr('class', 'highlightWinner');
                  arrayOfWinning[6].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[7].hasClass('redChip')) && (arrayOfWinning[8].hasClass('redChip')) && (arrayOfWinning[9].hasClass('redChip'))) {
            // console.log('Red Wins Col');
            redWinsGame = true;
            blackWinsGame = false;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[7].attr('class', 'highlightWinner');
                  arrayOfWinning[8].attr('class', 'highlightWinner');
                  arrayOfWinning[9].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[7].hasClass('blackChip')) && (arrayOfWinning[8].hasClass('blackChip')) && (arrayOfWinning[9].hasClass('blackChip'))) {
            // console.log('Black Wins Col');
            redWinsGame = false;
            blackWinsGame = true;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[7].attr('class', 'highlightWinner');
                  arrayOfWinning[8].attr('class', 'highlightWinner');
                  arrayOfWinning[9].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[10].hasClass('redChip')) && (arrayOfWinning[11].hasClass('redChip')) && (arrayOfWinning[12].hasClass('redChip'))) {
            // console.log('Red Wins Diag');
            redWinsGame = true;
            blackWinsGame = false;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[10].attr('class', 'highlightWinner');
                  arrayOfWinning[11].attr('class', 'highlightWinner');
                  arrayOfWinning[12].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[10].hasClass('blackChip')) && (arrayOfWinning[11].hasClass('blackChip')) && (arrayOfWinning[12].hasClass('blackChip'))) {
            // console.log('Black Wins Diag');
            redWinsGame = false;
            blackWinsGame = true;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[10].attr('class', 'highlightWinner');
                  arrayOfWinning[11].attr('class', 'highlightWinner');
                  arrayOfWinning[12].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[13].hasClass('redChip')) && (arrayOfWinning[14].hasClass('redChip')) && (arrayOfWinning[15].hasClass('redChip'))) {
            // console.log('Red Wins Daig');
            redWinsGame = true;
            blackWinsGame = false;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[13].attr('class', 'highlightWinner');
                  arrayOfWinning[14].attr('class', 'highlightWinner');
                  arrayOfWinning[15].attr('class', 'highlightWinner');

          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[13].hasClass('blackChip')) && (arrayOfWinning[14].hasClass('blackChip')) && (arrayOfWinning[15].hasClass('blackChip'))) {
            // console.log('Black Wins Diag');
            redWinsGame = false;
            blackWinsGame = true;

                  arrayOfWinning[0].attr('class', 'highlightWinner');
                  arrayOfWinning[13].attr('class', 'highlightWinner');
                  arrayOfWinning[14].attr('class', 'highlightWinner');
                  arrayOfWinning[15].attr('class', 'highlightWinner');

          }
        };

      //WINNER DEFINED

          if (!redWinsGame && !blackWinsGame && (playCounter === 42)) {
            console.log('Game is a Draw');
            this.announceTheWinner();
          } else if (!redWinsGame && !blackWinsGame) {
              // console.log('Game Continues');
            this.whoseTurnIsIt();
          } else if (redWinsGame && !blackWinsGame) {
            console.log('Red Wins Game');
            this.announceTheWinner();
          } else if (!redWinsGame && blackWinsGame) {
            console.log('Black Wins Game');
            this.announceTheWinner();
          } else {
            console.log('Error');
          }
    },
    announceTheWinner() {
      //Updates winner and shuts off game
    if (playCounter === 42) {
      $('#whose-turn').removeClass('blackPlayer').removeClass('redPlayer');
      $('#whose-turn').text('The Game is a Draw')
    } else {
      //turn off future possible plays
      $('.canBePlayed').removeClass('canBePlayed');

      //notify winner
      if (redWinsGame) {
        $('#whose-turn').removeClass('blackPlayer').removeClass('redPlayer');
        $('#whose-turn').text('Red Wins');
        redScore++;
        this.keepScore();
      } else if (blackWinsGame) {
        $('#whose-turn').removeClass('blackPlayer').removeClass('redPlayer');
        $('#whose-turn').text('Black Wins');
        blackScore++;
        this.keepScore();
      }

    };
    },
    keepScore() {
      //Tracks score after game win
      const $redScore = $('#red-score');
      const $blackScore = $('#black-score');
      $redScore.text(redScore);
      $blackScore.text(blackScore)
      $('#round-counter').text('Round: ' + rounds);
    },
    playAgain() {
      //resets board, does not reset score
      playCounter = 0;
      played = false;
      legalMove = false;
      redWinsGame = false;
      blackWinsGame = false;
      rounds++;
      redTurn = false;
      $('#whose-turn').empty();
      $('#gameboard').empty();
      UI.createGameBoard();
    },
    startOver() {
      //resets board and score
      playCounter = 0;
      played = false;
      legalMove = false;
      redWinsGame = false;
      blackWinsGame = false;
      redScore = 0;
      blackScore = 0;
      rounds = 1;
      $('#whose-turn').empty();
      $('#gameboard').empty();
      UI.createGameBoard();
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
          playCounter++;
          UI.checkForWinner(e);
        } else {
          $(e.currentTarget).attr('class', 'blackChip').addClass('played').removeClass('emptySpace');
          redTurn = true;
          played = true;
          playCounter++;
          UI.checkForWinner(e)
        };
      }
    },
    resetGame() {
      const $playAgain = $('#playAgain');
      $playAgain.on('click', UI.playAgain);

      const $startOver = $('#startOver');
      $startOver.on('click', UI.startOver);
    }
  }; //End PA Object
