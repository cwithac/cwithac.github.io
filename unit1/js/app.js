// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

//======================================================================//
//Window Onload Function

$(function() {

  //jQuery Variables
  $player1Score = $('#score1'); // Score paragraph for player 1
  $player2Score = $('#score2'); // Score paragraph for player 2
  $playAgain = $('#play-again'); // Play again div resegGame();
  $howToPlay = $('#howtoplay'); // How to Play div
  $questionsContainer = $('#container'); // Container section for both P1 and P2 questions
  $player1Question = $('#p1-questions') // P1 question div
  $player2Question = $('#p2-questions') // P2 question div
  $radioButton = $('<input>').attr('type', 'radio'); // Empty Radio Button


//======================================================================//

//PSEUDOCODE

// //Characters
// - Player 1 // Alexander Hamilton
// - Player 2 // Aaron Burr
//
// //Visual
// Container for Div P1 & Div P2
// Div for Player 1 question
// Div for Player 2 question
// Score 1 Div
// Score 2 Div
// Reset Div
// How to Div // Stretch
//
// //Content
// questions = [
//   { question: "Question 1", // Question 1...
//     choices: ["A1", "A2", "A3"], // Array of possible answers
//     correctAnswer: Index# // Correct answer
//   },
//   { question: "Question 2", // Question 2...
//     choices: ["A1", "A2", "A3"], // Array of possible answers
//     correctAnswer: Index# // Correct answer
//   }
// ];
//
// Text + Radio Button
//
// Player 1 Score = 0 //at start of game
// Player 2 Score = 0 //at start of game
//
// question counter // tracks questions asked (if question < questions.length...)
// user answers [] // tracks users answers (with push and .val() correct/not correct)
//
// How to Play (lorem ...)
//
// //Gameplay
// Toggle // Switches Players after question has been asked
// Player 1 Score +1 Question Correct +0 Incorrect
// Player 2 Score +1 Question Correct +0 Incorrect
//
// //If selected = index, correct, if not, incorrect ...
//
// Each player turn, send to win eval.
//
// Turn Play
//   > Question on player's side appears, question on opponents disappears.
    // 1. From question bank, pull question.
    //   - loop through questions to pull each one (in order)
    //     for (var i = 0; i < questions.length; i++) {
    //       questions[i].question
    //     }
    //   - questions[0].question) == first question
    // 2. From questions bank, pull array of answers with same index.
    //   - loop through array to pull each set (in order)
    //     for (var i = 0; i < questions.length; i++) {
    //       questions[i].question
    //       questions[i].choices
    //     }
    //   - questions[0].question == first question
    //   - questions[0].choices == choices for first question
    // 3. Append Q div $player1Question
    // 4. Append A to <ul> + <li> in $player1Question below Q.
    //         - Next Question is index + 1?
    //         - Question index Random num integer (0 - questions.length)
    // 5. Submit button
    //     If submission === correct answer index
    //       - (questions[0].correctAnswer)
    //       Player point ++
    // 6. Send to Player 2
    // 7. Eval after Player 2

// //Winner Eval
// Checks if X questions have been asked, if not continue game with P1.
// Checks between Player 1 and Player 2 Score for Winner
// Winner Message
//
// //Reset Game
// Starts game over without refresh (resets questions asked to 0, resets score)
//
// //CSS Stretch
// Background Music

//======================================================================//

//Player Variables
var player1 = {
  name: "Alexander Hamilton",
  score: 0,
  answersGiven: []
};

var player2 = {
  name: "Aaron Burr",
  score: 0,
  answersGiven: []
};

//======================================================================//

//Questions
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
    choices: ["No matter what they tell you", "Something they can never take away", "Raise a glass to the four of us"], // Array of possible answers
    correctAnswer: "Something they can never take away", // Correct answer
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
  { question: "Now my life gets better, every letter that you write me...", // Question...
    choices: ["Laughin’ at my sister, cuz she wants to form a harem.", "If it takes fighting a war for us to meet, it will have been worth it.", "I’m just sayin’, if you really loved me, you would share him."], // Array of possible answers
    correctAnswer: "Laughin’ at my sister, cuz she wants to form a harem", // Correct answer
    fromSong: "Helpless"
  },
  { question: "The feeling of freedom, of seein’ the light,", // Question...
    choices: ["He’s penniless, he’s flying by the seat of his pants.", "So I’m the oldest and the wittiest and the gossip in New York City is insidious", "It’s Ben Franklin with a key and a kite! You see it, right?"], // Array of possible answers
    correctAnswer: "It’s Ben Franklin with a key and a kite! You see it, right?", // Correct answer
    fromSong: "Satisfied"
  },
  { question: "If you love this woman, go get her! What are you waiting for?", // Question...
    choices: ["Congrats again, Alexander. Smile more.", "I’ll see you on the other side of the war", "She’s married to a British officer?"], // Array of possible answers
    correctAnswer: "I’ll see you on the other side of the war", // Correct answer
    fromSong: "The Story of Tonight (Reprise)"
  },
  { question: "Love doesn't discriminate...", // Question...
    choices: ["Between the sinners and the saints...", "And we make our mistakes.", "I’m willing to wait for it."], // Array of possible answers
    correctAnswer: "Between the sinners and the saints...", // Correct answer
    fromSong: "Wait For It"
  },
  { question: "We cut supply lines, we steal contraband, We pick and choose our battles and places to take a stand, And ev’ry day...", // Question...
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
    correctAnswer: 2, // Correct answer
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
  { question: "To my brother's revolutionary covenant", // Question...
    choices: ["When you knock me down I get the fuck back up again!", "I’m runnin’ with the Sons of Liberty and I am lovin’ it!", "I take their measurements, information and then I smuggle it."], // Array of possible answers
    correctAnswer: "I’m runnin’ with the Sons of Liberty and I am lovin’ it!", // Correct answer
    fromSong: "Yorktown (The World Turned Upside Down)"
  },
  { question: "What comes next?", // Question...
    choices: ["Awesome. Wow", "You’re on your own", "You’ve been freed"], // Array of possible answers
    correctAnswer: "You’ve been freed", // Correct answer
    fromSong: "What Comes Next?"
  },
  { question: "We’ll bleed and fight for you, we’ll make it right for you", // Question...
    choices: ["Yeah, you’ll blow us all away", "When you smile, I fall apart", "If we lay a strong enough foundation"], // Array of possible answers
    correctAnswer: "If we lay a strong enough foundation", // Correct answer
    fromSong: "Dear Theodosia"
  },
  { question: "Why do you write like you’re running out of time?", // Question...
    choices: ["Write day and night like you’re running out of time?", "Keep on fighting. In the meantime—", "Why do you assume you’re the smartest in the room?"], // Array of possible answers
    correctAnswer: "Write day and night like you’re running out of time?", // Correct answer
    fromSong: "Non-Stop"
  }
];

//Loop through all Questions
var loopQuestions = function() {
  for (var i = 0; i < questions.length; i++) {
      questions[i].question;
      questions[i].choices;
      questions[i].correctAnswer;
      questions[i].fromSong;
    }
  };

//Question Trackers
    var questionCounter = [];
    var randomNumP1 = (Math.floor(Math.random() * (23 - 0)) + 0); //Generates Random between 0-22 (23 questions, 0-22 index) for Player 1's questions -- reates different Random from P2
    var randomNumP2 = (Math.floor(Math.random() * (23 - 0)) + 0); //Generates Random between 0-22 (23 questions, 0-22 index) for Player 2's questions -- Creates different Random from P1

//Question Pulls
  //Player 1
  var randomQuestionP1 = questions[randomNumP1].question;
  var randomChoicesP1 = questions[randomNumP1].choices;
  var randomCorrectAnswerP1 = questions[randomNumP1].correctAnswer;
  var randomFromSongP1 = questions[randomNumP1].fromSong;

  //Player 2
  var randomQuestionP2 = questions[randomNumP2].question;
  var randomChoicesP2 = questions[randomNumP2].choices;
  var randomCorrectAnswerP2 = questions[randomNumP2].correctAnswer;
  var randomFromSongP2 = questions[randomNumP2].fromSong;


//======================================================================//

//Game Play

//Player Actions
//Player 1
var alexanderHamilton = function() {
  console.log("alexanderHamilton function has been called."); //confirms function has been initalized
  $songTitle = $('<p>').text("Track: " + randomFromSongP1); //Song Title
  $player1Question.append($songTitle);
  $questionAsked = $('<h2>').text(randomQuestionP1); //Question Asked
  $player1Question.append($questionAsked);
  $answerUL = $('<ul>') // UL container for LI answers
  $answerIndex0 = $('<li>').text(randomChoicesP1[0]); //LI for answers wrapped in UL
  $answerIndex1 = $('<li>').text(randomChoicesP1[1]); //LI for answers wrapped in UL
  $answerIndex2 = $('<li>').text(randomChoicesP1[2]); //LI for answers wrapped in UL
  $player1Question.append($answerUL)
  $answerUL.append($answerIndex0);
  $answerUL.append($answerIndex1);
  $answerUL.append($answerIndex2);
  $answerIndex0.on('click', checkForCorrect);
  $answerIndex1.on('click', checkForCorrect);
  $answerIndex2.on('click', checkForCorrect);
  aaronBurr();
};

//Player 2
var aaronBurr = function() {
  console.log("aaronBurr function has been called."); //confirms function has been initalized
  $songTitle = $('<p>').text("Track: " + randomFromSongP2); //Song Title
  $player2Question.append($songTitle);
  $questionAsked = $('<h2>').text(randomQuestionP2); //Question Asked
  $player2Question.append($questionAsked);
  $answerUL = $('<ul>') // UL container for LI answers
  $answerIndex0 = $('<li>').text(randomChoicesP2[0]); //LI for answers wrapped in UL
  $answerIndex1 = $('<li>').text(randomChoicesP2[1]); //LI for answers wrapped in UL
  $answerIndex2 = $('<li>').text(randomChoicesP2[2]); //LI for answers wrapped in UL
  $player2Question.append($answerUL)
  $answerUL.append($answerIndex0);
  $answerUL.append($answerIndex1);
  $answerUL.append($answerIndex2);
  $answerIndex0.on('click', checkForCorrect);
  $answerIndex1.on('click', checkForCorrect);
  $answerIndex2.on('click', checkForCorrect);
  // evalWinner();
};

var checkForCorrect = function() {
  console.log("checkForCorrect function has been called.");
  console.log($(this).text());
  console.log(randomCorrectAnswerP1);
  if (($(this).text()) === randomCorrectAnswerP1) {
    console.log("Correct");
  } else {
    console.log("Wrong answer");
  }
};

//Game Actions
var evalWinner = function() {
  console.log("evalWinner function has been called.");
  //if questionCounter.length < questions.length
  //continue game...
  //else checkWinner();
};

var checkWinner = function() {
  console.log("checkWinner function has been called.");
  //which score is higher
  //inform winner
};

var resetGame = function() {
  //Clears Question counter
  //Clears asked questions
  //Sets scores to 0
};

var startGame = function() {
  console.log("startGame function has been called.");
  alexanderHamilton();
};

startGame(); // Runs at Window Load, Disable to deactivate game


}); // closes window onload function
