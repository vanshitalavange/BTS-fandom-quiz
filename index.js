var chalk = require('chalk');
var readlineSync = require('readline-sync');

var playerName = readlineSync.question("What is your name? ");
console.log(chalk.blue("-------------------------------------------------------------------"));
console.log("Welcome",playerName+"! Let's see if you are a TRUE ARMY");
console.log("");
console.log("There are 2 levels in this quiz, each containing a set of 5 questions.");
console.log("If you call yourself a BTS fan, then u should beat the high score!!!!");

var highScore = [
  {
    name : "vanshita",
    score : 10
  },
  {
    name : "anusha",
    score : 10
  }
]

var questionOne = {
  question : "What does BTS stand for?" ,
  options : ["Behind the scene","Bangtan Sonyeondan","Burn the stage"],
  answer : 2
}
var questionTwo = {
  question : "How many members are in BTS?",
  options : ["Six","Seven","Eight","Nine"],
  answer : 2
}
var questionThree = {
  question : "Which member is the maknae (youngest) of the group?",
  options : ["Suga","Jimin","RM","Jungkook"],
  answer : 4
}
var questionFour = {
  question : "Which of the following members is the leader of the group?",
  options : ["JHope","Suga","RM","V"],
  answer : 3
}
var questionFive = {
  question : "Which member is the visual of the group and is also known as “Worldwide Handsome?”",
  options : ["Jungkook","Jimin","Jin","Kim Taehyung"],
  answer : 4
}
var questionSix = {
  question : "During which month and year did BTS debut?",
  options : ["June 2016","June 2013","July 2015","July 2014"],
  answer : 2
}
var questionSeven = {
  question : "What K-Pop entertainment is BTS signed under?",
  options : ["Big Stone Entertainment","Big Hit Entertainment","Bangtan Hit Entertainment","BTS Entertainment"],
  answer : 2
}
var questionEight = {
  question : "What American TV show did RM watch to learn how to speak English fluently?",
  options : ["Gossip Girl","Friends","The Suite Life of Zack & Cody","The Office"],
  answer : 2
}
var questionNine = {
  question : "Who is the shortest member in BTS?",
  options : ["Jungkook","Jimin","Suga","V"],
  answer : 2
}
var questionTen = {
  question : "Which BTS member has the smallest hands?",
  options : ["RM","Jimin","Suga","Jhope"],
  answer : 2
}

var btsQuiz = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

var score = 0;

function validateAnswer(question)
{
  console.log("Question : "+question.question);
  console.log("Options : ");
  for(var j=1;j<=question.options.length;j=j+1)
  {
    console.log(j+".",question.options[j-1]);
  }
  var playerAnswer = readlineSync.question("Choose any one option ");
  
  if(playerAnswer==question.answer)
  {
    score = score + 1;
    console.log("Yay! Your answer is correct.");
    console.log("Current score : "+score);
  }
  else
  {
    console.log("Oops! Your answer is wrong.");
    console.log("It doesn't really seem like you are a BTS fan!!");
    console.log("The correct answer is "+question.answer);
  }
}

for(var i=0;i<btsQuiz.length;i=i+1)
{
    if(i==0)
    {
     console.log(chalk.blue("---------------------------------LEVEL 1----------------------------"));
    }
    if(i==5)
    {
     console.log(chalk.blue("---------------------------------LEVEL 2----------------------------"));
    }
    var qts = btsQuiz[i];
    validateAnswer(qts);
}
console.log("Final score : ",score);
if(score<=5)
{
  console.log("Seems like you need to know BTS more!!");
}
else
{
  console.log("You are indeed a TRUE ARMY!!");
}
console.log("List of high scorers : ")
for(var i=0;i<highScore.length;i=i+1)
{
  var player = highScore[i];
  console.log("Name : "+player.name,"   Score : "+player.score);

}

console.log("If you scored a 10/10 then update me, I'll add your name in the list");



