// highscores:
// if .hsButton clicked, display highscores
// use local storage to append new game results into highscores{} (JSON.parse, JSON.stringify) and have highscores display the contents of highscores{} by using the index values to line item them.

var startButton = document.querySelector(".start");
var h1 = document.getElementById("h1");
var p = document.getElementById("p");
var quizAnswersEl = document.getElementById("quizAnswersEl");
//Used to incremend to the next question after each is answered
var currentQuestion = 0;

var testQuestions = [
  {
    //property = value
    //key value pairs
    //index 0
    questionText:
      "When a browser displays a page, what is it referencing to build the page?",
    options: [
      { option: "DOM", answer: true },
      { option: "JavaScript", answer: false },
      { option: "HTML", answer: false },
      { option: "CSS", answer: false },
    ],
  },
  {
    //finish setting up questions once linked
    //index 1
    questionText:
      "What is the best way to find out more information about a data type in your code?",
    options: [
      { option: "Educated guess based on reading the code", answer: false },
      { option: "use console.log() to display it in DevTools", answer: true },
      {
        option: "use window.alert() to display it on the web app",
        answer: false,
      },
      { option: "Cry and give up", answer: false },
    ],
  },
  {
    //index 2
    questionText: "How do you create a function in JavaScript?",
    options: [
      { option: "function:myFunction()", answer: false },
      { option: "function myFunction()", answer: false },
      { option: "myFunction(function)", answer: false },
      { option: "function = myFunction()", answer: true },
    ],
  },
  {
    //index 3
    questionText: "How does a FOR loop start?",
    options: [
      { option: "for (i=0; i<=5)", answer: false },
      { option: "for i = i to 5", answer: false },
      { option: "for (i=0; i<=5, i++)", answer: true },
      { option: "for (i<=5, i++)", answer: false },
    ],
  },
  {
    //index 4
    questionText: "How do you add a comment in a JavaScript file?",
    options: [
      { option: "//Comment", answer: true },
      { option: "`Comment", answer: false },
      { option: "<!--Comment-->", answer: false },
      { option: ">comment", answer: false },
    ],
  },
  {
    //index 5
    questionText:
      "What is the correct “if” statements to execute certain code if “x” is equal to 2?",
    options: [
      { option: "if(x 2)", answer: false },
      { option: "if(x = 2)", answer: false },
      { option: "if(x == 2)", answer: true },
      { option: "if(x != 2 )", answer: false },
    ],
  },
  {
    //index 6
    questionText: "What will Boolean(3<7) return?",
    options: [
      { option: "true", answer: true },
      { option: "false", answer: false },
      { option: "NaN", answer: false },
      { option: "SyntaxError", answer: false },
    ],
  },
];

// for randomly selecting questions - will add later
// var questionRandomIndex = Math.floor(Math.random() * testQuestions.length);

startButton.addEventListener("click", startGame);

function startGame() {
  askQuestion();
  //nextQuestion();
}

function nextQuestion(){
    currentQuestion++;
    askQuestion();
}



function askQuestion() {
    //ADD A TIMER
  var button = document.getElementById("button");
  //starts with testQuestions[0], will increment to ask questions sequentially
  //1) randomly select a question
  h1.textContent = testQuestions[currentQuestion].questionText;
  //hide the p tag here
  //these are hidden, not deleted
  button.style.display = "none";
  p.style.display = "none";
  //hide the start button
  //insert new content
  var newButton1 = document.createElement("button");
  newButton1.className = "answerButton";
  quizAnswersEl.appendChild(newButton1);
  newButton1.textContent = testQuestions[currentQuestion].options[0].option;
  var newButton2 = document.createElement("button");
  newButton2.className = "answerButton";
  quizAnswersEl.appendChild(newButton2);
  newButton2.textContent = testQuestions[currentQuestion].options[1].option;
  var newButton3 = document.createElement("button");
  newButton3.className = "answerButton";
  quizAnswersEl.appendChild(newButton3);
  newButton3.textContent = testQuestions[currentQuestion].options[2].option;
  var newButton4 = document.createElement("button");
  newButton4.className = "answerButton";
  quizAnswersEl.appendChild(newButton4);
  newButton4.textContent = testQuestions[currentQuestion].options[3].option;

  newButton1.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[0].answer == true) {
      var correct = document.createElement("p");
      quizAnswersEl.appendChild(correct);
      correct.textContent = "Correct Answer!";
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      
      //nextQuestion()
    } else {
      var wrong = document.createElement("p");
      quizAnswersEl.appendChild(wrong);
      wrong.textContent = "Wrong Answer!";
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      //REDUCE TIME ON TIMER
      //wait 1 second
      //nextQuestion()
    }
  });
  newButton2.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[1].answer == true) {
        var correct = document.createElement("p");
        quizAnswersEl.appendChild(correct);
        correct.textContent = "Correct Answer!";
        newButton1.style.display = "none";
        newButton2.style.display = "none";
        newButton3.style.display = "none";
        newButton4.style.display = "none";
        
        //nextQuestion()
    } else {
        var wrong = document.createElement("p");
        quizAnswersEl.appendChild(wrong);
        wrong.textContent = "Wrong Answer!";
        newButton1.style.display = "none";
        newButton2.style.display = "none";
        newButton3.style.display = "none";
        newButton4.style.display = "none";
        //REDUCE TIME ON TIMER
        //wait 1 second
        //nextQuestion()
    }
  });
  newButton3.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[2].answer == true) {
        var correct = document.createElement("p");
        quizAnswersEl.appendChild(correct);
        correct.textContent = "Correct Answer!";
        newButton1.style.display = "none";
        newButton2.style.display = "none";
        newButton3.style.display = "none";
        newButton4.style.display = "none";
        
        //nextQuestion()
    } else {
        var wrong = document.createElement("p");
        quizAnswersEl.appendChild(wrong);
        wrong.textContent = "Wrong Answer!";
        newButton1.style.display = "none";
        newButton2.style.display = "none";
        newButton3.style.display = "none";
        newButton4.style.display = "none";
        //REDUCE TIME ON TIMER
        //wait 1 second
        //nextQuestion()
    }
  });
  newButton4.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[3].answer == true) {
        var correct = document.createElement("p");
        quizAnswersEl.appendChild(correct);
        correct.textContent = "Correct Answer!";
        newButton1.style.display = "none";
        newButton2.style.display = "none";
        newButton3.style.display = "none";
        newButton4.style.display = "none";
        
        //nextQuestion()
    } else {
        var wrong = document.createElement("p");
        quizAnswersEl.appendChild(wrong);
        wrong.textContent = "Wrong Answer!";
        newButton1.style.display = "none";
        newButton2.style.display = "none";
        newButton3.style.display = "none";
        newButton4.style.display = "none";
        //REDUCE TIME ON TIMER
        //wait 1 second
        //nextQuestion()
    }
  });
}
