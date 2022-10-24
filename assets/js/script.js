// highscores:
// if .hsButton clicked, display highscores
// use local storage to append new game results into highscores{} (JSON.parse, JSON.stringify) and have highscores display the contents of highscores{} by using the index values to line item them.

//TO DO:
//write highscore();

var startButton = document.querySelector(".start");
var viewHighscore = document.querySelector("#seeHS");
var h1 = document.getElementById("h1");
var quizAnswersEl = document.getElementById("quizAnswersEl");
var answerEl = document.getElementById("answerEl");
//Used to incremend to the next question after each is answered
var currentQuestion = 0;
var timerEl = document.getElementById("timer");
var time = 5;
var quizComplete = false;
var highscoreInitials = [];
var highscoreScore = [];
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

startButton.addEventListener("click", startGame);
viewHighscore.addEventListener("click", function () {
  var initials = JSON.parse(localStorage.getItem("initials"));
  var score = JSON.parse(localStorage.getItem("score"));
  console.log(initials);
  console.log(score);

  var closeHighscore = document.createElement("button");
  closeHighscore.className = "close";
  closeHighscore.textContent = "Close Highscores";
  hsEl.appendChild(closeHighscore);
  for (i = 0; i < initials.length; i++) {
    var hsDisplay = document.createElement("p");
    hsDisplay.setAttribute("id", "close");
    hsEl.appendChild(hsDisplay);
    hsDisplay.textContent =
      "Initials: " + initials[i] + "      Score: " + score[i];
    // window.alert("Highscores: \nInitials: " + initials[i] + "   Score: " + score[i])
  }
  closeHighscore.addEventListener("click", function () {
    closeHighscore.style.display = "none";
    var close = document.querySelectorAll("#close");
    console.log(close);
    for (i = 1; i <= 100; i++) {
      document.body.children[1].children[0].children[3].children[
        i
      ].style.display = "none";
    }
  });
});

function startGame() {
  askQuestion();
  startTimer();
}

function highscores() {
  //use localStorage to store things
  //time left on timer = score
  //store initials, store score
  //set up window.alert displaying highscore if user clicks highscores button
  //SEE: miniproject
  var addNewHS = window.prompt(
    "Game Over!  Enter your initials for the highscores."
  );
  answerEl.style.display = "none";
  var addNewTime = time;
  //   highscoreInitials.splice(1, 0, addNewHS);
  //   highscoreScore.splice(1, 0, addNewTime);
  highscoreInitials.push(addNewHS);
  highscoreScore.push(addNewTime);
  console.log(highscoreInitials);
  console.log(highscoreScore);
  localStorage.setItem("initials", JSON.stringify(highscoreInitials));
  localStorage.setItem("score", JSON.stringify(highscoreScore));
  console.log(highscoreInitials);
  //this is overriding data.  find out why and fix

  //resets landing page so user can take the quiz again
  button.style.display = "block";
  currentQuestion = 0;
  time = 5;
}

function startTimer() {
  // time = X;
  // Time interval
  // if time = 0, end Game
  // if user wins, time = score
  var timer = setInterval(function () {
    if (time > 1) {
      timerEl.textContent = time + " seconds remaining";
      time--;
      if (currentQuestion == testQuestions.length) {
        timerEl.textContent = "";
        clearInterval(timer);
      }
    } else if (time === 1) {
      timerEl.textContent = time + " second remaining";
      time--;
    } else {
      timerEl.textContent = "";
      clearInterval(timer);
      console.log(time);
      highscores();
      var button = document.getElementById("button");
      button.style.display = "block";
      h1.textContent = "Welcome to Code Quiz!";
      var answerEl = document.querySelectorAll(".answerButton");
      console.log(answerEl[0]); 
      for (i = 0; i < (answerEl.length); i++) {
        console.log(answerEl[i]);
        answerEl[i].style.display = "none";
      }
      
      //bugged, make sure this resets the page
    }
  }, 1000);
}

function askQuestion() {
  //ADD A TIMER
  var button = document.getElementById("button");
  button.style.display = "none";
  h1.textContent = testQuestions[currentQuestion].questionText;
  //hide the p tag here
  //these are hidden, not deleted

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

  /// WORK ON THIS ONE
  newButton1.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[0].answer == true) {
      currentQuestion++;
      var correct = document.createElement("p");
      quizAnswersEl.appendChild(correct);
      correct.textContent = "Correct Answer!";
      correct.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      var timerTimeout = setTimeout(function () {
        correct.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          // window.alert("highscore: " + time);
          highscores();
        } else {
          askQuestion();
        }
      }, 2000);
    } else {
      currentQuestion++;
      var wrong = document.createElement("p");
      quizAnswersEl.appendChild(wrong);
      wrong.textContent = "Wrong Answer!";
      wrong.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      //REDUCE TIME ON TIMER
      time = time - 10;
      var timerTimeout = setTimeout(function () {
        wrong.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          // window.alert("highscore: " + time);
          highscores();
        } else {
          askQuestion();
        }
      }, 2000);
    }
  });
  newButton2.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[1].answer == true) {
      currentQuestion++;
      var correct = document.createElement("p");
      quizAnswersEl.appendChild(correct);
      correct.textContent = "Correct Answer!";
      correct.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      var timerTimeout = setTimeout(function () {
        correct.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          // window.alert("highscore: " + time);
          highscores();
        } else {
          askQuestion();
        }
      }, 2000);
    } else {
      currentQuestion++;
      var wrong = document.createElement("p");
      answerEl.appendChild(wrong);
      wrong.textContent = "Wrong Answer!";
      wrong.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      time = time - 10;
      var timerTimeout = setTimeout(function (ev) {
        ev.stopPropagation();
        wrong.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          // window.alert("highscore: " + time);
          highscores();
        } else {
          askQuestion();
        }
      }, 2000);
    }
  });
  newButton3.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[2].answer == true) {
      currentQuestion++;
      var correct = document.createElement("p");
      quizAnswersEl.appendChild(correct);
      correct.textContent = "Correct Answer!";
      correct.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      var timerTimeout = setTimeout(function () {
        correct.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          window.alert("highscore: " + time);
        } else {
          askQuestion();
        }
      }, 2000);
    } else {
      currentQuestion++;
      var wrong = document.createElement("p");
      quizAnswersEl.appendChild(wrong);
      wrong.textContent = "Wrong Answer!";
      wrong.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      //REDUCE TIME ON TIMER
      time = time - 10;
      var timerTimeout = setTimeout(function () {
        wrong.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          window.alert("highscore: " + time);
        } else {
          askQuestion();
        }
      }, 2000);
    }
  });
  newButton4.addEventListener("click", function () {
    if (testQuestions[currentQuestion].options[3].answer == true) {
      currentQuestion++;
      var correct = document.createElement("p");
      quizAnswersEl.appendChild(correct);
      correct.textContent = "Correct Answer!";
      correct.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      var timerTimeout = setTimeout(function () {
        correct.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          window.alert("highscore: " + time);
        } else {
          askQuestion();
        }
      }, 2000);
    } else {
      currentQuestion++;
      var wrong = document.createElement("p");
      quizAnswersEl.appendChild(wrong);
      wrong.textContent = "Wrong Answer!";
      wrong.setAttribute("id", "pEl");
      newButton1.style.display = "none";
      newButton2.style.display = "none";
      newButton3.style.display = "none";
      newButton4.style.display = "none";
      //REDUCE TIME ON TIMER
      time = time - 10;
      var timerTimeout = setTimeout(function () {
        wrong.style.display = "none";
        console.log(currentQuestion);
        console.log(testQuestions.length);
        if (currentQuestion == testQuestions.length) {
          window.alert("highscore: " + time);
        } else {
          askQuestion();
        }
      }, 2000);
    }
  });
}
