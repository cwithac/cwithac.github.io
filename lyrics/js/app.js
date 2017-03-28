
//======================================================================//
//Window Onload Function START
$(function() {
//======================================================================//

//jQuery Variables
  $player1Score = $('#score1'); // Score paragraph for player 1
  $player1Name = $('#p1Name'); // Name placeholder for player 1
  $player2Name = $('#p2Name'); // Name placeholder for player 1
  $player2Score = $('#score2'); // Score paragraph for player 2

  $player1Input = $('#inputP1');
  $player2Input = $('#inputP2');
  $submitButtonP1 = $('#checkP1');
  $submitButtonP2 = $('#checkP2');

  $startGame = $('#start-game'); // Start Game div
  $howToPlay = $('#how-to-play'); // How to Play div
  $resetGame = $('#reset-game'); // Play again div resetGame();
  $turns = $('#turns'); // Turn Counter Div
  $questionsContainer = $('#container'); // Container section for both P1 and P2 questions
  $mainLogo = $('#main-logo') // Central image before start and on reset

  $player1Question = $('#p1-questions') // P1 question div
  $player2Question = $('#p2-questions') // P2 question div

  $howToPlayBox = $('<div>').attr('id', 'howTo');
  $howToPlayHeader = $('<h4>').text("Finish the Hamilton Lyric...");
  $howToPlayText = $('<p>').text("Select the next lyric in the song from the choices available.  Each correct answer will earn one point.  The game will last for ten rounds, each round consisting of a turn for each player.  The winner is determined by the highest score at the end of the game.");
  $closeButton = $('<div>').attr('id', 'close').text("close");
  $howToGraphic = $('<img>').attr('src', 'images/example.png').attr('id', 'graphic');

//======================================================================//

//Player Variables
  var scorePlayer1 = 0;
  var scorePlayer2 = 0;

//Game Variables
    var rounds = 0;

//======================================================================//

//Questions (total 46)
//See ReadMe for resources.
var questions = [
  { question: "The world's gonna know your name. What’s your name, man?", // Question 1...
    choices: ["Alexander Hamilton.  My name is Alexander Hamilton.", "Aaron Burr.  My name is Aaron Burr.", "George Washington.  My name is George Washington."], // Array of possible answers
    correctAnswer: "Alexander Hamilton.  My name is Alexander Hamilton.", // Correct answer
    fromSong: "Alexander Hamilton"
  },
  { question: "Show time! Show time! Yo!", // Question...
    choices: ["Oui oui, mon ami, je m’appelle Lafayette!", "Brrrah brraaah! I am Hercules Mulligan", "I’m John Laurens in the place to be!"], // Array of possible answers
    correctAnswer: "I’m John Laurens in the place to be!", // Correct answer
    fromSong: "Aaron Burr, Sir"
  },
  { question: "Hey yo, I’m just like my country...", // Question...
    choices: ["I am not throwing away my shot!", "It’s time to take a shot!", "I’m young, scrappy and hungry..."], // Array of possible answers
    correctAnswer: "I’m young, scrappy and hungry...", // Correct answer
    fromSong: "My Shot"
  },
  { question: "Raise a glass to freedom.", // Question...
    choices: ["No matter what they tell you.", "Something they can never take away.", "Raise a glass to the four of us."], // Array of possible answers
    correctAnswer: "Something they can never take away.", // Correct answer
    fromSong: "The Story of Tonight"
  },
  { question: "Angelica!  Eliza!", // Question...
    choices: ["And Peggy!", "And Maria!", "And Theodosia!"], // Array of possible answers
    correctAnswer: "And Peggy!", // Correct answer
    fromSong: "The Schuyler Sisters"
  },
  { question: "Chaos and bloodshed are not a solution,", // Question...
    choices: ["They’re playing a dangerous game.", "Don’t let them lead you astray.", "They have not your interests at heart."], // Array of possible answers
    correctAnswer: "Don’t let them lead you astray.", // Correct answer
    fromSong: "Farmer Refuted"
  },
  { question: "You say, the price of my love’s not a price that you’re willing to pay.", // Question...
    choices: ["You cry, in your tea which you hurl in the sea when you see me go by.", "You say our love is draining and you can’t go on.", "Remember we made an arrangement when you went away"], // Array of possible answers
    correctAnswer: "You cry, in your tea which you hurl in the sea when you see me go by.", // Correct answer
    fromSong: "You'll Be Back"
  },
  { question: "Head full of fantasies of dyin’ like a martyr?", // Question...
    choices: ["I was just like you when I was younger.", "It’s alright, you want to fight, you’ve got a hunger.", "Dying is easy, young man. Living is harder."], // Array of possible answers
    correctAnswer: "Dying is easy, young man. Living is harder.", // Correct answer
    fromSong: "Right Hand Man"
  },
  { question: "Martha Washington named her feral tomcat after him!", // Question...
    choices: ["That’s false!", "That’s true!", "What do you mean?"], // Array of possible answers
    correctAnswer: "That’s true!", // Correct answer
    fromSong: "A Winter's Ball"
  },
  { question: "Laughin’ at my sister as she’s dazzling the room...", // Question...
    choices: ["Then you walked in and my heart went BOOM!", "If it takes fighting a war for us to meet, it will have been worth it.", "I’m just sayin’, if you really loved me, you would share him."], // Array of possible answers
    correctAnswer: "Then you walked in and my heart went BOOM!", // Correct answer
    fromSong: "Helpless"
  },
  { question: "The feeling of freedom, of seein’ the light,", // Question...
    choices: ["He’s penniless, he’s flying by the seat of his pants.", "So I’m the oldest and the wittiest and the gossip in New York City is insidious", "It’s Ben Franklin with a key and a kite! You see it, right?"], // Array of possible answers
    correctAnswer: "It’s Ben Franklin with a key and a kite! You see it, right?", // Correct answer
    fromSong: "Satisfied"
  },
  { question: "If you love this woman, go get her! What are you waiting for?", // Question...
    choices: ["Congrats again, Alexander. Smile more.", "I’ll see you on the other side of the war.", "She’s married to a British officer?"], // Array of possible answers
    correctAnswer: "I’ll see you on the other side of the war.", // Correct answer
    fromSong: "The Story of Tonight (Reprise)"
  },
  { question: "Love doesn't discriminate...", // Question...
    choices: ["Between the sinners and the saints...", "And we make our mistakes.", "I’m willing to wait for it."], // Array of possible answers
    correctAnswer: "Between the sinners and the saints...", // Correct answer
    fromSong: "Wait For It"
  },
  { question: "We pick and choose our battles and places to take a stand, And ev’ry day...", // Question...
    choices: ["We write essays against slavery.", "Sir, entrust me with a command.", "Stay alive ‘til this horror show is past."], // Array of possible answers
    correctAnswer: "Sir, entrust me with a command.", // Correct answer
    fromSong: "Stay Alive"
  },
  { question: "This is commonplace, ‘specially ‘tween recruits...", // Question...
    choices: ["Number eight!", "Confess your sins. Ready for the moment.", "Most disputes die, and no one shoots."], // Array of possible answers
    correctAnswer: "Most disputes die, and no one shoots.", // Correct answer
    fromSong: "Ten Duel Commandments"
  },
  { question: "Go home, Alexander.", // Question...
    choices: ["My name’s been through a lot, I can take it.", "Or you could die and we need you alive.", "That’s an order from your commander."], // Array of possible answers
    correctAnswer: "That’s an order from your commander.", // Correct answer
    fromSong: "Meet Me Inside"
  },
  { question: "And if this child...", // Question...
    choices: ["But I’m not afraid...", "Shares a fraction of your smile...", "In the story they will write someday..."], // Array of possible answers
    correctAnswer: "Shares a fraction of your smile...", // Correct answer
    fromSong: "That Would Be Enough"
  },
  { question: "Ev’ryone give it up for America’s favorite fighting Frenchman!", // Question...
    choices: ["Lafayette!", "Hamilton!", "Madison!"], // Array of possible answers
    correctAnswer: "Lafayette!", // Correct answer
    fromSong: "Guns and Ships"
  },
  { question: "I was younger than you are now...", // Question...
    choices: ["When I was given my first command.", "I made every mistake...", "When I was young and dreamed of glory."], // Array of possible answers
    correctAnswer: "When I was given my first command.", // Correct answer
    fromSong: "History Has Its Eyes On You"
  },
  { question: "To my brother's revolutionary covenant...", // Question...
    choices: ["Hercules Mulligan, I need no introduction.", "I’m runnin’ with the Sons of Liberty and I am lovin’ it!", "I take their measurements, information and then I smuggle it."], // Array of possible answers
    correctAnswer: "I’m runnin’ with the Sons of Liberty and I am lovin’ it!", // Correct answer
    fromSong: "Yorktown (The World Turned Upside Down)"
  },
  { question: "What comes next?", // Question...
    choices: ["Awesome. Wow.", "You’re on your own.", "You’ve been freed."], // Array of possible answers
    correctAnswer: "You’ve been freed.", // Correct answer
    fromSong: "What Comes Next?"
  },
  { question: "We’ll bleed and fight for you, we’ll make it right for you...", // Question...
    choices: ["Yeah, you’ll blow us all away.", "When you smile, I fall apart.", "If we lay a strong enough foundation..."], // Array of possible answers
    correctAnswer: "If we lay a strong enough foundation...", // Correct answer
    fromSong: "Dear Theodosia"
  },
  { question: "Why do you write like you’re running out of time?", // Question...
    choices: ["Write day and night like you’re running out of time?", "Keep on fighting in the meantime.", "Why do you assume you’re the smartest in the room?"], // Array of possible answers
    correctAnswer: "Write day and night like you’re running out of time?", // Correct answer
    fromSong: "Non-Stop"
  },
  { question: "There’s a letter on my desk from the President...", // Question...
    choices: ["Headin’ to New York!", "Haven’t even put my bags down yet.", "Thomas Jefferson’s coming home!"], // Array of possible answers
    correctAnswer: "Haven’t even put my bags down yet.", // Correct answer
    fromSong: "What'd I Miss"
  },
  { question: "Thomas. That was a real nice declaration...", // Question...
    choices: ["Welcome to the present, we’re running a real nation.", "Don’t tax the South cuz we got it made in the shade", "Are you ready for a cabinet meeting?"], // Array of possible answers
    correctAnswer: "Welcome to the present, we’re running a real nation.", // Correct answer
    fromSong: "Cabinet Battle #1"
  },
  { question: "Your favorite older sister Angelica reminds you...", // Question...
    choices: ["I know your work’s important but I’m crossing the ocean and I just can’t wait.", "Tell my wife John Adams doesn’t have a real job anyway.", "There’s someone in your corner all the way across the sea."], // Array of possible answers
    correctAnswer: "There’s someone in your corner all the way across the sea.", // Correct answer
    fromSong: "Take A Break"
  },
  { question: "I know you are a man of honor...", // Question...
    choices: ["I don’t know how to say no to this", "I’m so sorry to bother you at home.", "I hope this letter finds you in good health."], // Array of possible answers
    correctAnswer: "I’m so sorry to bother you at home.", // Correct answer
    fromSong: "Say No To This"
  },
  { question: "And here’s the pièce de résistance:", // Question...
    choices: ["No one else was in the room where it happened.", "Madison is grappling with the fact that not ev’ry issue can be settled by committee.", "Click-boom then it happened."], // Array of possible answers
    correctAnswer: "No one else was in the room where it happened.", // Correct answer
    fromSong: "The Room Where It Happens"
  },
  { question: "Look! Grandpa’s in the paper!", // Question...
    choices: ["Daddy’s gonna find out any minute.", "No one knows who you are or what you do.", "War hero Philip Schuyler loses senate seat to young upstart Aaron Burr."], // Array of possible answers
    correctAnswer: "War hero Philip Schuyler loses senate seat to young upstart Aaron Burr.", // Correct answer
    fromSong: "Schuyler Defeated"
  },
  { question: "He knows nothing of loyalty...", // Question...
    choices: ["A game of chess, where France is Queen and Kingless.", "Smells like new money, dresses like fake royalty.", "If we try to fight in every revolution in the world, we never stop."], // Array of possible answers
    correctAnswer: "Smells like new money, dresses like fake royalty.", // Correct answer
    fromSong: "Cabinet Battle #2"
  },
  { question: "It must be nice, it must be nice...", // Question...
    choices: ["The ink hasn’t dried.", "To have Washington on your side.", "Look in his eyes!"], // Array of possible answers
    correctAnswer: "To have Washington on your side.", // Correct answer
    fromSong: "Washington On Your Side"
  },
  { question: "Let’s take a break tonight...", // Question...
    choices: ["And then we’ll teach them how to say goodbye.", "I wanna talk about what I have learned.", "Mr. President, they will say you’re weak."], // Array of possible answers
    correctAnswer: "And then we’ll teach them how to say goodbye.", // Correct answer
    fromSong: "One Last Time"
  },
  { question: "What was it, eighty-five?", // Question...
    choices: ["Oceans rise, empires fall...", "They will tear each other into pieces.", "That poor man, they’re gonna eat him alive!"], // Array of possible answers
    correctAnswer: "", // Correct answer
    fromSong: "I Know Him"
  },
  { question: "Jefferson’s the runner-up...", // Question...
    choices: ["Destroy his reputation?", "Which makes him the Vice President.", "Let’s let him know what we know."], // Array of possible answers
    correctAnswer: "Which makes him the Vice President.", // Correct answer
    fromSong: "The Adams Administration"
  },
  { question: "If I can prove that I never broke the law...", // Question...
    choices: ["Do you promise not to tell another soul what you saw?", "But my papers are orderly!", "That’s when Reynolds extorted me."], // Array of possible answers
    correctAnswer: "Do you promise not to tell another soul what you saw?", // Correct answer
    fromSong: "We Know"
  },
  { question: "For just a moment...", // Question...
    choices: ["A yellow sky.", "Wait for it, wait for it...", "I wrote my way to revolution."], // Array of possible answers
    correctAnswer: "A yellow sky.", // Correct answer
    fromSong: "Hurricane"
  },
  { question: "Well, he’s never gon’ be President now...", // Question...
    choices: ["Never gon’ be President now.", "Highlights!", "You ever see somebody ruin their own life?"], // Array of possible answers
    correctAnswer: "Never gon’ be President now.", // Correct answer
    fromSong: "The Reynolds Pamphlet"
  },
  { question: "Do you know what Angelica said when she read what you’d done?", // Question...
    choices: ["She said you have married an Icarus. He has flown too close to the sun.", "You built me palaces out of paragraphs.", "She said be careful with that one, love he will do what it takes to survive."], // Array of possible answers
    correctAnswer: "She said you have married an Icarus. He has flown too close to the sun.", // Correct answer
    fromSong: "Burn"
  },
  { question: "This is my very first duel...", // Question...
    choices: ["Where is this happening?", "Philip, your mother can’t take another heartbreak.", "They don’t exactly cover this subject in boarding school."], // Array of possible answers
    correctAnswer: "They don’t exactly cover this subject in boarding school.", // Correct answer
    fromSong: "Blow Us All Away"
  },
  { question: "Un deux trois quatre...", // Question...
    choices: ["Cinq six sept huit neuf.", "I would always change the line.", "Stay alive..."], // Array of possible answers
    correctAnswer: "Cinq six sept huit neuf.", // Correct answer
    fromSong: "Stay Alive (Reprise)"
  },
  { question: "Side, talking by her side, have pity.", // Question...
    choices: ["They are going through the unimaginable.", "Eliza, do you like it uptown? It’s quiet uptown.", "Can you imagine?"], // Array of possible answers
    correctAnswer: "They are going through the unimaginable.", // Correct answer
    fromSong: "It's Quiet Uptown"
  },
  { question: "Why?", // Question...
    choices: ["Hamilton’s on your side.", "Because I’m the President.", "Jefferson has my vote."], // Array of possible answers
    correctAnswer: "Because I’m the President.", // Correct answer
    fromSong: "The Election of 1800"
  },
  { question: "Careful how you proceed, good man...", // Question...
    choices: ["Intemperate indeed, good man.", "Burr, your grievance is legitimate.", "I have the honor to be Your Obedient Servant."], // Array of possible answers
    correctAnswer: "Intemperate indeed, good man.", // Correct answer
    fromSong: "Your Obedient Servant"
  },
  { question: "Come back to sleep.", // Question...
    choices: ["This meeting’s at dawn.", "I have an early meeting out of town.", " I just need to write something down."], // Array of possible answers
    correctAnswer: "This meeting’s at dawn.", // Correct answer
    fromSong: "Best of Wives and Best of Women"
  },
  { question: "I imagine death so much it feels more like a memory.", // Question...
    choices: ["If I throw away my shot, is this how you’ll remember me?", "Is this where it gets me, on my feet, several feet ahead of me?", "What if this bullet is my legacy?"], // Array of possible answers
    correctAnswer: "Is this where it gets me, on my feet, several feet ahead of me?", // Correct answer
    fromSong: "The World Was Wide Enough"
  },
  { question: "Can I show you what I’m proudest of?", // Question...
    choices: ["I raise funds in D.C. for the Washington Monument.", "I speak out against slavery.", "The orphanage."], // Array of possible answers
    correctAnswer: "The orphanage.", // Correct answer
    fromSong: "Who Lives, Who Dies, Who Tells Your Story"
  }
];

//Question Trackers
    //Array of correct answers available (not chosen by player) as a choice is made.
    var questionCounter = [];
    //Random number generator
    var randomNumGen = function() {
        randNum = (Math.floor(Math.random() * (46 - 0)) + 0);
    }; // Generates a random number between 0 - 45, inclusive of 0. (questions array length 46, 0-45)

//======================================================================//
//Player Actions
//======================================================================//

//Player 1
var playerOneTurn = function() {
  $player1Question.removeClass('hidden')
  $player1Question.empty();
  $player2Question.removeClass('hidden')
  $player1Question.empty();
  // console.log("playerOneTurn function has been called."); //confirms function has been initalized
  randomNumGen();
  var randomQuestionP1 = questions[randNum].question;
  var randomChoicesP1 = questions[randNum].choices;
  var randomFromSongP1 = questions[randNum].fromSong;
  // console.log("Index Number is: " + randNum); // Confirms questions are random and which index
    $songTitle = $('<p>').text("Track: " + randomFromSongP1).attr('class', 'track'); //Song Title
      $player1Question.append($songTitle);
    $questionAsked = $('<h2>').text(randomQuestionP1).attr('class', 'question'); //Question Asked
      $player1Question.append($questionAsked);
    $answerUL = $('<ul>') // UL container for LI answers
    $answerIndex0 = $('<li>').text(randomChoicesP1[0]).attr('class', 'answer'); //LI for answers wrapped in UL
    $answerIndex1 = $('<li>').text(randomChoicesP1[1]).attr('class', 'answer'); //LI for answers wrapped in UL
    $answerIndex2 = $('<li>').text(randomChoicesP1[2]).attr('class', 'answer'); //LI for answers wrapped in UL
      $player1Question.append($answerUL)
      $answerUL.append($answerIndex0);
      $answerUL.append($answerIndex1);
      $answerUL.append($answerIndex2);
      $answerIndex0.on('click', checkForCorrectP1);
      $answerIndex1.on('click', checkForCorrectP1);
      $answerIndex2.on('click', checkForCorrectP1);
  };

//Player 2
var playerTwoTurn = function() {
  // console.log("playerTwoTurn function has been called."); //confirms function has been initalized
  $resetGame.on('click', resetGame);
  randomNumGen();
  var randomQuestionP2 = questions[randNum].question;
  var randomChoicesP2 = questions[randNum].choices;
  var randomFromSongP2 = questions[randNum].fromSong;
  // console.log("Index Number is: " + randNum); // Confirms questions are random and which index
    $songTitle = $('<p>').text("Track: " + randomFromSongP2).attr('class', 'track'); //Song Title
      $player2Question.append($songTitle);
    $questionAsked = $('<h2>').text(randomQuestionP2).attr('class', 'question'); //Question Asked
      $player2Question.append($questionAsked);
    $answerUL = $('<ul>') // UL container for LI answers
    $answerIndex0 = $('<li>').text(randomChoicesP2[0]).attr('class', 'answer'); //LI for answers wrapped in UL
    $answerIndex1 = $('<li>').text(randomChoicesP2[1]).attr('class', 'answer'); //LI for answers wrapped in UL
    $answerIndex2 = $('<li>').text(randomChoicesP2[2]).attr('class', 'answer'); //LI for answers wrapped in UL
      $player2Question.append($answerUL)
      $answerUL.append($answerIndex0);
      $answerUL.append($answerIndex1);
      $answerUL.append($answerIndex2);
      $answerIndex0.on('click', checkForCorrectP2);
      $answerIndex1.on('click', checkForCorrectP2);
      $answerIndex2.on('click', checkForCorrectP2);
  };

var checkForCorrectP1 = function() { //Checks for matching answer to array
  // console.log("checkForCorrectP1 function has been called.");
  var randomCorrectAnswerP1 = questions[randNum].correctAnswer;
    if (($(this).text()) === randomCorrectAnswerP1) { //Correct Answer
        questionCounter.push(randomCorrectAnswerP1);
        scorePlayer1++
        $player1Score.text(scorePlayer1)
        $theCorrectAnswerIs = $('<div>').attr('id', 'answers').text("Correct!");
    } else { //Incorrect Answer
        questionCounter.push(randomCorrectAnswerP1);
        $theCorrectAnswerIs = $('<div>').attr('id', 'answers').text("Incorrect!  The correct answer is: ");
  }
    //Actions regardless of answer's validity
    $player1Question.append($theCorrectAnswerIs);
    $theCorrectAnswerIs.append($('<h3>').attr('class', 'correctP1').text(randomCorrectAnswerP1));
    $answerIndex0.off('click', checkForCorrectP1);
    $answerIndex1.off('click', checkForCorrectP1);
    $answerIndex2.off('click', checkForCorrectP1);
    $resetGame.off('click', resetGame);
    var delayPlayerTwo = function() {
      $player1Question.empty();
      playerTwoTurn();
    };
    setTimeout(delayPlayerTwo, 3000);
};

var checkForCorrectP2 = function() { //Checks for matching answer to array
  // console.log("checkForCorrectP2 function has been called.");
  var randomCorrectAnswerP2 = questions[randNum].correctAnswer;
    if (($(this).text()) === randomCorrectAnswerP2) { //Correct Answer
        console.log("Correct");
        questionCounter.push(randomCorrectAnswerP2);
        scorePlayer2++
        $player2Score.text(scorePlayer2);
        $theCorrectAnswerIs = $('<div>').attr('id', 'answersP2').text("Correct!");
    } else { //Incorrect Answer
        console.log("Wrong answer");
        questionCounter.push(randomCorrectAnswerP2);
        $theCorrectAnswerIs = $('<div>').attr('id', 'answersP2').text("Incorrect!  The correct answer is: ");
  }
  //Actions regardless of answer's validity
    rounds++;
    $turns.text("Total Rounds: " + rounds)
    $player2Question.append($theCorrectAnswerIs);
    $theCorrectAnswerIs.append($('<h3>').attr('class', 'correctP2').text(randomCorrectAnswerP2));
    $answerIndex0.off('click', checkForCorrectP2);
    $answerIndex1.off('click', checkForCorrectP2);
    $answerIndex2.off('click', checkForCorrectP2);
    $resetGame.off('click', resetGame);
    var delayPlayerOne = function() {
      $player2Question.empty(); //clears out contents of player two's div, duplicated in case of eval not sending to P1
      evalWinner();
    };
    setTimeout(delayPlayerOne, 2000);
};


//Set Name Input for P1
$submitButtonP1.on('click', function() {
  var $p1Name = $player1Input.val();
  console.log($p1Name);
  $player1Name.html($p1Name + "'s Score");
});

//Set Name Input for P2
$submitButtonP2.on('click', function() {
var $p2Name = $player2Input.val();
console.log($p2Name);
$player2Name.html($p2Name + "'s Score");
});


//======================================================================//
//Game Actions
//======================================================================//

//Evaluates if a winner can be found or if the game needs to continue
var evalWinner = function() {
  // console.log("evalWinner function has been called.");
  if (questionCounter.length < 20) { //Asks 20 questions.  questions.length will ask length of questions available, not guaranteed all questions.
    playerOneTurn();
  } else {
    checkWinner();
  }
};

//Confirms winner of the game once evalWinner confirms game is over.
//End of Game until Reset/Play again is selected/activated
var checkWinner = function() {
  console.log("checkWinner function has been called.");
  $resetGame.on('click', resetGame);
  if (scorePlayer1 > scorePlayer2){
    $endGameNotif = $('<h3>').text("Congratulations!  Player 1 has won the game!")
    $questionsContainer.after($endGameNotif);
  } else if (scorePlayer2 > scorePlayer1) {
    $endGameNotif = $('<h3>').text("Congratulations!  Player 2 has won the game!")
    $questionsContainer.after($endGameNotif);
  } else if (scorePlayer1 === scorePlayer2) {
    $endGameNotif = $('<h3>').text("The game is a tie!")
    $questionsContainer.after($endGameNotif);
  } else {
    console.log("Something is wrong with this function.");
  }  $startGame.on('click', startGame);
};

//Resets Game, clears questions asked and score.
var resetGame = function() {
  // console.log("resetGame function has been called.");
  if (questionCounter.length < 20) { //If no one has won...
        $player1Question.empty();
        $player2Question.empty();
  } else { //If the game is over and winner has been announced...
    $endGameNotif.remove();
  }
  questionCounter = [];
  $turns.text("Total Turns: " + questionCounter.length)
  scorePlayer1 = 0;
  $player1Score.text(scorePlayer1)
  scorePlayer2 = 0;
  $player2Score.text(scorePlayer2);
  $player1Question.addClass('hidden').empty();
  $player2Question.addClass('hidden').empty();
  $mainLogo.removeClass('hidden');
  $howToPlayBox.addClass('hidden')
  $startGame.on('click', startGame);
};

//Listener for resetGame Function
$resetGame.on('click', resetGame);

//How to play game content from div 'button'
var howToPlayGame = function() {
  // console.log("howToPlayGame has been called.");
  $howToPlayBox.removeClass('hidden')
  $mainLogo.addClass('hidden');
  $questionsContainer.append($howToPlayBox);
  // $howToPlayBox.append($howToGraphic);
  $howToPlayBox.append($howToPlayHeader);
  $howToPlayBox.append($howToPlayText);
  $howToPlayBox.append($closeButton);
  var closeHowTo = function() {
    $howToPlayBox.addClass('hidden');
  };
  $closeButton.on('click', closeHowTo);
};

//Listener for howToPlayGame Function
$howToPlay.on('click', howToPlayGame);

//StartGame sends to player one for the turn
var startGame = function() {
  // console.log("startGame function has been called.");
  $startGame.off('click', startGame);
  $mainLogo.addClass('hidden');
  $howToPlayBox.addClass('hidden')
  playerOneTurn();
};

//START GAME INITALIZER
//Listener for startGame function
$startGame.on('click', startGame);


//======================================================================//
//Window Onload Function END
});
//======================================================================//
