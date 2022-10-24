// highscores:
// if .hsButton clicked, display highscores
// use local storage to append new game results into highscores{} (JSON.parse, JSON.stringify) and have highscores display the contents of highscores{} by using the index values to line item them.

var startButton = document.querySelector(".start");
var h1 = document.getElementById("h1");
var p = document.getElementById("p");

var quizAnswersEl = document.getElementById("quizAnswersEl");

var testQuestions = [
  {
    //property = value
    //key value pairs
    questionText:
      "When a browser displays a page, what is it referencing to build the page?",
    options: [
        {option:"DOM",answer:true}, 
        {option:"JavaScript",answer:false}, 
        {option:"HTML",answer:false}, 
        {option:"CSS",answer:false}
    ],
  },
  {
    //finish setting up questions once linked
    questionText:
      "What is the best way to find out more information about a data type in your code?",
    options: [
        {option:"Educated guess based on reading the code" ,answer:false},
        {option:"use console.log() to display it in DevTools" ,answer:true},
        {option:"use window.alert() to display it on the web app" ,answer:false},
        {option: "Cry and give up",answer:false},
    ],
  },
  {
    questionText: "How do you create a function in JavaScript?",
    options: [
        {option:"function:myFunction()",answer:false},
        {option: "function myFunction()" ,answer:false},
        {option: "myFunction(function)",answer:false},
        {option:"function = myFunction()" ,answer:true},
    ],
    answer: 4,
  },
  {
    questionText: "How does a FOR loop start?",
    options: [
        {option:"for (i=0; i<=5)" ,answer:false},
        {option:"for i = i to 5" ,answer:false},
        {option:"for (i=0; i<=5, i++)" ,answer:true},
        {option:"for (i<=5, i++)" ,answer:false},
    ],
  },
  {
    questionText: "How do you add a comment in a JavaScript file?",
    options: [
        {option:"//Comment" ,answer:true},
        {option:"`Comment" ,answer:false},
        {option:"<!--Comment-->" ,answer:false},
        {option:">comment" ,answer:false},
    ],
  },
  {
    questionText:
      "What is the correct “if” statements to execute certain code if “x” is equal to 2?",
    options: [
        {option:"if(x 2)" ,answer:false},
        {option:"if(x = 2)" ,answer:false},
        {option:"if(x == 2)" ,answer:true},
        {option:"if(x != 2 )" ,answer:false},
    ],
  },
  {
    questionText: "What will Boolean(3<7) return?",
    options: [
        {option:"true" ,answer:true},
        {option:"false" ,answer:false},
        {option:"NaN" ,answer:false},
        {option:"SyntaxError",answer:false},
    ],
  },
];

// for randomly selecting questions - will add later
// var questionRandomIndex = Math.floor(Math.random() * testQuestions.length);

startButton.addEventListener("click", startGame);

function startGame() {
  askQuestion();
  //   questionFormat();
}

// function askQuestion(){
//this function will ask the user questions
//upon multiple choice selection, check if answer correct, and store result
//
// }

function askQuestion() {
  var button = document.getElementById("button");
  var correct = 
  //1) randomly select a question
  h1.textContent = testQuestions[0].questionText;
  //hide the p tag here
  //these are hidden, not deleted
  button.style.display = "none";
  p.style.display = "none";
  //hide the start button
  //insert new content
  var newButton1 = document.createElement("button");
  quizAnswersEl.appendChild(newButton1);
  newButton1.className = 0;
  newButton1.textContent = testQuestions[0].options[0];
  var newButton2 = document.createElement("button");
  quizAnswersEl.appendChild(newButton2);
  newButton2.className = 1;
  newButton2.textContent = testQuestions[0].options[1];
  var newButton3 = document.createElement("button");
  quizAnswersEl.appendChild(newButton3);
  newButton3.className = 2;
  newButton3.textContent = testQuestions[0].options[2];
  var newButton4 = document.createElement("button");
  quizAnswersEl.appendChild(newButton4);
  newButton4.className = 3;
  newButton4.textContent = testQuestions[0].options[3];
  console.log();


  //let testQuestions[0].answer = correct answer, otherwise wrong answer
  //if button is pressed, testQuestions[i++];, repeat until done
}
