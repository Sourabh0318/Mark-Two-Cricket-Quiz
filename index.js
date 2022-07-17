var readlineSync = require("readline-sync");
var score = 0

var userName = readlineSync.question("May I have your name? ");

console.log("\nWelcome " + userName + " to the Quiz World!\nLet\'s see 'How Much You Know About Cricket'\n");

console.log("Please Note!\nAnswer will be case sensetive. Play Wisely...\n");

console.log("All The Best!\n")

//Array of Objects - Questions
var questions = [{
  question: "Who was the first player to score century in T20 from India? \n",
  answer: "Suresh Raina"
},
{
  question: "Which Indian player is known as 'The Wall'? \n",
  answer: "Rahul Dravid"
},
{
  question: "Which Player has the most century in International Cricket \n",
  answer: "Sachin Tendulkar"
},
{
  question: "Who hold the record of highest ODI score? \n",
  answer: "Rohit Sharma"
},
{
  question: "Which player holds the record of hitting continuous 6 sixes in 6 balls in ODI? \n",
  answer: "Herschelle Gibbs"
},
{
  question: "Which Indian player is known as the 'Run Machine of India'? \n",
  answer: "Virat Kholi"
},
{
  question: "Who won the First T20 World Cup? \n",
  answer: "India"
},
{
  question: "Which country has won the most World Cup? \n",
  answer: "Australia"
},
{
  question: "Where was 2019 World Cup held? \n",
  answer: "London"
},
{
  question: "Who was the captain of 2012 U-19 World Winning Team India? \n",
  answer: "Unmukt Chand"
}];

//Array of Objects - Scores
var scores = [{
  name: "Sourabh",
  score: "10"
}];


function play(question, answer){
  var question = readlineSync.question(question);
  if(question === answer){
    console.log("Cool! You are Right");
    score = score + 1;
  }else{
    console.log("Oops! Wrong Answer");
    console.log("Correct answer is: " + currentQuestion.answer);
  }
  console.log("---------------------");
}

for(var i=0; i < questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("\nYour score is: ", score);
console.log("Highscore is of " + scores[0].name + ": " + scores[0].score);
console.log("Please Send the ScreenShot after completing...");