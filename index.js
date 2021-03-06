var chalk = require("chalk");
var readlineSync = require("readline-sync");

var playerName = readlineSync.question("What is your name? ");
console.log(
  chalk.blue(
    "-------------------------------------------------------------------"
  )
);
console.log(
  chalk.green("Welcome", playerName + "! Let's see if you are a TRUE ARMY")
);
console.log("");
console.log(
  chalk.green(
    "There are 2 levels in this quiz, each containing a set of 5 questions."
  )
);
console.log(
  chalk.green(
    "If you call yourself a BTS fan, then u should beat the high score!!!!"
  )
);

var highScore = [
  {
    name: "vanshita",
    score: 10,
  },
  {
    name: "anusha",
    score: 10,
  },
];

var btsQuiz = [
  {
    question: "What does BTS stand for?",
    options: [
      "Behind the scene",
      "Bangtan Sonyeondan",
      "Burn the stage",
      "Big hit boys",
    ],
    answer: 2,
  },
  {
    question: "How many members are in BTS?",
    options: ["Six", "Seven", "Eight", "Nine"],
    answer: 2,
  },
  {
    question: "Which member is the maknae (youngest) of the group?",
    options: ["Suga", "Jimin", "RM", "Jungkook"],
    answer: 4,
  },
  {
    question: "Which of the following members is the leader of the group?",
    options: ["JHope", "Suga", "RM", "V"],
    answer: 3,
  },
  {
    question:
      "Which member is the visual of the group and is also known as “Worldwide Handsome?”",
    options: ["Jungkook", "Jimin", "Jin", "Kim Taehyung"],
    answer: 4,
  },
  {
    question: "During which month and year did BTS debut?",
    options: ["June 2016", "June 2013", "July 2015", "July 2014"],
    answer: 2,
  },
  {
    question: "What K-Pop entertainment is BTS signed under?",
    options: [
      "Big Stone Entertainment",
      "Big Hit Entertainment",
      "Bangtan Hit Entertainment",
      "BTS Entertainment",
    ],
    answer: 2,
  },
  {
    question:
      "What American TV show did RM watch to learn how to speak English fluently?",
    options: [
      "Gossip Girl",
      "Friends",
      "The Suite Life of Zack & Cody",
      "The Office",
    ],
    answer: 2,
  },
  {
    question: "Who is the shortest member in BTS?",
    options: ["Jungkook", "Jimin", "Suga", "V"],
    answer: 2,
  },
  {
    question: "Which BTS member has the smallest hands?",
    options: ["RM", "Jimin", "Suga", "Jhope"],
    answer: 2,
  },
];
var score = 0;

function validateAnswer(question) {
  console.log("Options : ");
  var playerAnswer = readlineSync.keyInSelect(
    question.options,
    chalk.magenta(question.question)
  );
  playerAnswer = playerAnswer + 1;
  if (playerAnswer === question.answer) {
    score = score + 1;
    console.log(chalk.green("Yay! Your answer is correct."));
    console.log("Current score : " + score);
    console.log(
      chalk.blue(
        "-------------------------------------------------------------------"
      )
    );
  } else {
    console.log(chalk.red("Oops! Your answer is wrong."));
    console.log("It doesn't really seem like you are a BTS fan!!");
    console.log(
      "The correct answer is " +
        chalk.green(question.options[question.answer - 1])
    );
    console.log(
      chalk.blue(
        "-------------------------------------------------------------------"
      )
    );
  }
}

for (var i = 0; i < btsQuiz.length; i = i + 1) {
  if (i == 0) {
    console.log(
      chalk.blue(
        "------------------------------LEVEL 1-------------------------------"
      )
    );
  }
  if (i == 5 && score == 5) {
    console.log(chalk.green("Congratulations! You advanced to level 2"));
    console.log(
      chalk.blue(
        "------------------------------LEVEL 2-------------------------------"
      )
    );
  } else if (i == 5 && score < 5) {
    // console.log(score);
    console.log(chalk.red("Oops you failed! You couldn't reach level 2"));
  }

  if ((i < 5 && score < 5) || (i >= 5 && score >= 5)) {
    console.log("Question : " + (i + 1));
    var qts = btsQuiz[i];
    validateAnswer(qts);
  }
}

if (score <= 5) {
  console.log(chalk.bgRed("Final score : ", score));
  console.log("Seems like you need to know BTS more!!");
} else {
  console.log(chalk.bgGreen("Final score : ", score));
  console.log("You are indeed a TRUE ARMY!!");
  console.log(chalk.yellow("List of high scorers : "));
  for (var i = 0; i < highScore.length; i = i + 1) {
    var player = highScore[i];
    console.log("Name : " + player.name, "   Score : " + player.score);
  }

  console.log(
    "If you scored a 10/10 then update me, I'll add your name in the list"
  );
}
