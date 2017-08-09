// console.log('connect four app.js');
//https://en.wikipedia.org/wiki/Connect_Four

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

    //GAME BOARD - Numbers represent applied #id upon creation
    //  0  1  2  3  4  5  6
    //  7  8  9 10 11 12 13
    // 14 15 16 17 18 19 20
    // 21 22 23 24 25 26 27
    // 28 29 30 31 32 33 34
    // 35 36 37 38 39 40 41

      for (let i = 0; i < 42; i++) {
          const $gameBoard = $('#gameboard');
          const $square = $('<div>').attr('class', 'emptySpace').attr('id', i);
          $gameBoard.append($square).eq(i);
          //identifies lowest row as a legal move
            if (i > 34) {
              $square.addClass('canBePlayed');
            }

            //Edge Columns (far right, far left), setting for win scenarios with 'wrap around'
            const $zero = $('#0');
            const $seven = $('#7');
            const $fourteen = $('#14');
            const $twentyone = $('#21');
            const $twentyeight = $('#28');
            const $thirtyfive = $('#35');
            const $six = $('#6');
            const $thirteen = $('#13');
            const $twenty = $('#20');
            const $twentyseven = $('#27');
            const $thirtyfour = $('#34');
            const $fortyone = $('#41');

            const farLeftCol = [$zero, $seven, $fourteen, $twentyone, $twentyeight, $thirtyfive];
            const farRightCol = [$six, $thirteen, $twenty, $twentyseven, $thirtyfour, $fortyone];

            for (let i = 0; i < farLeftCol.length; i++) {
              farLeftCol[i].addClass('farLeftCol');
            }
            for (let i = 0; i < farRightCol.length; i++) {
              farRightCol[i].addClass('farRightCol');
            }

          $square.on('click', PA.playPiece);
        };
        this.whoseTurnIsIt();
        this.keepScore();
        this.howToPlayModal();
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
    howToPlayModal(){
      //Functionality of how to play modal
      const $howToButton = $('#howToPlay');
      const $howToModal = $('#modal');
      const $closeButton = $('#close');

      const openHowTo = () => {
        $howToModal.css('display', 'block');
      };
      const closeHowTo = () => {
        $howToModal.css('display', 'none');
      };

      $howToButton.on('click', openHowTo);
      $closeButton.on('click', closeHowTo);
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

      //Edge cases, to prevent wrap around from '+ #' checks for row and diag wins.
        const winningFourPieces = [];
        const containsEdges = [];

                                  //*** *** ***//

      //Apply if winning condition is met
      //Verifies whether or not an edge case is not creating a false win (row/diag) or all edge (column)
        //Sets winner of game based on condition
          //Highlights winner's play
        for (let i = 0; i < arrayOfWinning.length; i++) {

//RED ROW CHECK 1
          if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[1].hasClass('redChip')) && (arrayOfWinning[2].hasClass('redChip')) && (arrayOfWinning[3].hasClass('redChip'))) {
            // console.log('Red Wins Row');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[1], arrayOfWinning[2], arrayOfWinning[3]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
                redWinsGame = true;
                blackWinsGame = false;

                      arrayOfWinning[0].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[1].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[2].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[3].attr('class', 'highlightWinnerRed');
            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//RED ROW CHECK 2
          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[4].hasClass('redChip')) && (arrayOfWinning[5].hasClass('redChip')) && (arrayOfWinning[6].hasClass('redChip'))) {
            // console.log('Red Wins Row');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[4], arrayOfWinning[5], arrayOfWinning[6]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
                redWinsGame = true;
                blackWinsGame = false;

                      arrayOfWinning[0].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[4].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[5].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[6].attr('class', 'highlightWinnerRed');
            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//BLACK ROW CHECK 1
          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[1].hasClass('blackChip')) && (arrayOfWinning[2].hasClass('blackChip')) && (arrayOfWinning[3].hasClass('blackChip'))) {
            // console.log('Black Wins Row');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[1], arrayOfWinning[2], arrayOfWinning[3]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
                redWinsGame = false;
                blackWinsGame = true;

                      arrayOfWinning[0].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[1].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[2].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[3].attr('class', 'highlightWinnerBlack');
            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//BLACK ROW CHECK 2
          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[4].hasClass('blackChip')) && (arrayOfWinning[5].hasClass('blackChip')) && (arrayOfWinning[6].hasClass('blackChip'))) {
            // console.log('Black Wins Row');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[4], arrayOfWinning[5], arrayOfWinning[6]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
                redWinsGame = false;
                blackWinsGame = true;

                      arrayOfWinning[0].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[4].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[5].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[6].attr('class', 'highlightWinnerBlack');
            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//RED COL CHECK
          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[7].hasClass('redChip')) && (arrayOfWinning[8].hasClass('redChip')) && (arrayOfWinning[9].hasClass('redChip'))) {
            // console.log('Red Wins Col');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[7], arrayOfWinning[8], arrayOfWinning[9]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2 || containsEdges.length === 4) {
                redWinsGame = true;
                blackWinsGame = false;

                      arrayOfWinning[0].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[7].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[8].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[9].attr('class', 'highlightWinnerRed');

            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//BLACK COL CHECK
          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[7].hasClass('blackChip')) && (arrayOfWinning[8].hasClass('blackChip')) && (arrayOfWinning[9].hasClass('blackChip'))) {
            // console.log('Black Wins Col');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[7], arrayOfWinning[8], arrayOfWinning[9]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2 || containsEdges.length === 4) {
                redWinsGame = false;
                blackWinsGame = true;

                      arrayOfWinning[0].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[7].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[8].attr('class', 'highlightWinnerBlack');
                      arrayOfWinning[9].attr('class', 'highlightWinnerBlack');

            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//RED DIAG CHECK 1
          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[10].hasClass('redChip')) && (arrayOfWinning[11].hasClass('redChip')) && (arrayOfWinning[12].hasClass('redChip'))) {
            // console.log('Red Wins Diag');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[10], arrayOfWinning[11], arrayOfWinning[12]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
                redWinsGame = true;
                blackWinsGame = false;

                      arrayOfWinning[0].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[10].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[11].attr('class', 'highlightWinnerRed');
                      arrayOfWinning[12].attr('class', 'highlightWinnerRed');

            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }


//BLACK DIAG CHECK 1
          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[10].hasClass('blackChip')) && (arrayOfWinning[11].hasClass('blackChip')) && (arrayOfWinning[12].hasClass('blackChip'))) {
            // console.log('Black Wins Diag');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[10], arrayOfWinning[11], arrayOfWinning[12]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
              redWinsGame = false;
              blackWinsGame = true;

                    arrayOfWinning[0].attr('class', 'highlightWinnerBlack');
                    arrayOfWinning[10].attr('class', 'highlightWinnerBlack');
                    arrayOfWinning[11].attr('class', 'highlightWinnerBlack');
                    arrayOfWinning[12].attr('class', 'highlightWinnerBlack');


            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }


//RED DIAG CHECK 2
          } else if ((arrayOfWinning[0].hasClass('redChip')) && (arrayOfWinning[13].hasClass('redChip')) && (arrayOfWinning[14].hasClass('redChip')) && (arrayOfWinning[15].hasClass('redChip'))) {
            // console.log('Red Wins Daig');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[13], arrayOfWinning[14], arrayOfWinning[15]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
              redWinsGame = true;
              blackWinsGame = false;

                    arrayOfWinning[0].attr('class', 'highlightWinnerRed');
                    arrayOfWinning[13].attr('class', 'highlightWinnerRed');
                    arrayOfWinning[14].attr('class', 'highlightWinnerRed');
                    arrayOfWinning[15].attr('class', 'highlightWinnerRed');

            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

//BLACK DIAG CHECK 2
          } else if ((arrayOfWinning[0].hasClass('blackChip')) && (arrayOfWinning[13].hasClass('blackChip')) && (arrayOfWinning[14].hasClass('blackChip')) && (arrayOfWinning[15].hasClass('blackChip'))) {
            // console.log('Black Wins Diag');

            winningFourPieces.push(arrayOfWinning[0], arrayOfWinning[13], arrayOfWinning[14], arrayOfWinning[15]);

            for (let i = 0; i < winningFourPieces.length; i++) {
              if (winningFourPieces[i].hasClass('farLeftCol')) {
                  containsEdges.push(winningFourPieces[i]);
              } else if (winningFourPieces[i].hasClass('farRightCol')) {
                  containsEdges.push(winningFourPieces[i]);
              }
            };

            if (containsEdges.length < 2) {
              redWinsGame = false;
              blackWinsGame = true;

                    arrayOfWinning[0].attr('class', 'highlightWinnerBlack');
                    arrayOfWinning[13].attr('class', 'highlightWinnerBlack');
                    arrayOfWinning[14].attr('class', 'highlightWinnerBlack');
                    arrayOfWinning[15].attr('class', 'highlightWinnerBlack');

            } else {
              // console.log('Not a legal win, contains an edge case wrap around');
              // console.log('Game Continues');
              this.whoseTurnIsIt();
            }

          }
        };

                                //*** *** ***//


      //WINNER DEFINED

          if (!redWinsGame && !blackWinsGame && (playCounter === 42)) {
            // console.log('Game is a Draw');
            this.announceTheWinner();
          } else if (!redWinsGame && !blackWinsGame) {
              // console.log('Game Continues');
            this.whoseTurnIsIt();
          } else if (redWinsGame && !blackWinsGame) {
            // console.log('Red Wins Game');
            this.announceTheWinner();
          } else if (!redWinsGame && blackWinsGame) {
            // console.log('Black Wins Game');
            this.announceTheWinner();
          } else {
            // console.log('Error in Winner Defined');
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
      winningFourPieces = [];
      containsEdges = [];
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
      redTurn = true;
      winningFourPieces = [];
      containsEdges = [];
      $('#whose-turn').empty();
      $('#gameboard').empty();
      UI.createGameBoard();
    }
  }; //End UI object

//---------------------------------------------------------//
//---------------------------------------------------------//

//Player Action Objects

  const PA = {
    playPiece(e) {
      UI.checkForLegalMove(e);
      //Plays red and black alternating
      if (legalMove) {
        played = false;
        if (redTurn && !played) {
          $(e.currentTarget).addClass('redChip').addClass('played').removeClass('emptySpace').removeClass('canBePlayed');
          redTurn = false;
          played = true;
          playCounter++;
          UI.checkForWinner(e);
        } else {
          $(e.currentTarget).addClass('blackChip').addClass('played').removeClass('emptySpace').removeClass('canBePlayed');
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
