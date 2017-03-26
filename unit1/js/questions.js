//DO NOT LINK THIS FILE, CONTENT IS ONLY FOR REFERENCE
//LYRICS FROM https://genius.com/albums/Lin-manuel-miranda/Hamilton-original-broadway-cast-recording

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
    choices: ["Write day and night like you’re running out of time?", "Keep on fighting. In the meantime—", "Why do you assume you’re the smartest in the room?"], // Array of possible answers
    correctAnswer: "Write day and night like you’re running out of time?", // Correct answer
    fromSong: "Non-Stop"
  }
];

//Index 0
8
//Index 1
7
//Index 2
8
//Total Songs
23

//Template to Add
,
{ question: "", // Question...
  choices: ["", "", ""], // Array of possible answers
  correctAnswer: "", // Correct answer
  fromSong: ""
}
