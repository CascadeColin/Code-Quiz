// highscores:
// if .hsButton clicked, display highscores
// use local storage to append new game results into highscores{} (JSON.parse, JSON.stringify) and have highscores display the contents of highscores{} by using the index values to line item them.

var startButton = document.querySelector('.start')
var h1 = document.getElementById('h1');
var p = document.getElementById('p');
var button = document.getElementById('button');
var quizAnswersEl = document.getElementById('quizAnswersEl');


questions = ['When a browser displays a page, what is it referencing to build the page?','What is the best way to find out more information about a data type in your code?','How do you create a function in JavaScript?','How does a FOR loop start?','How do you add a comment in a JavaScript file?','What is the correct “if” statements to execute certain code if “x” is equal to 2?','What will <code>Boolean(3<7)</code> return?']
// console.log(questions.length);
console.log(questions[0]);
console.log(questions[6]);


var questionRandomIndex = Math.floor(Math.random() * questions.length);


//Questions/Answers
//When a browser displays a page, what is it referencing to build the page?
//A:  DOM, JavaScript, HTML, CSS
//What is the best way to find out more information about a data type in your code?
//A:  Educated guess based on reading the code, use console.log() to display it in DevTools, use window.alert() to display it on the web app, Cry and give up
//How do you create a function in JavaScript?
//A: function:myFunction(), function = myFunction(), function myFunction(), myFunction(function)
//How does a FOR loop start?
//A: for (i=0; i<=5), for i = i to 5, for (i=0; i<=5, i++), for (i<=5, i++)
//How do you add a comment in a JavaScript file?
//A: //Comment, `Comment, <!--Comment-->, >comment
//What is the correct “if” statements to execute certain code if “x” is equal to 2?
//A: if(x 2), if(x = 2), if(x == 2)<--correct , if(x != 2 )
//What will <code>Boolean(3<7)</code> return?
//A: true, false, NaN, SyntaxError

// POSSIBLE WAY TO SET UP QUIZ QUESTIONS
//
// var questions = [
//     {
//         questionText1: "123",
//         options: [
//             answerOptions: "1"
//             answerOptions: "2"
//             answerOptions: "3"
//             answerOptions: "4"
//         ]
//         answer: 3,
//     }
// ]

// function setUpQuestion(questions) {
//     document.querySelector(".question.text").textContent = question.text;
// }

startButton.addEventListener("click", startGame)

function startGame() {
    // removes content to be replaced with the quiz
    
    // h1.remove();
    // p.remove();
    // button.remove();
    questionFormat();
    //askQuestion();
}

// function askQuestion(){
    //this function will ask the user questions
    //upon multiple choice selection, check if answer correct, and store result
    //
// }

function questionFormat() {
    //1) randomly select a question
    console.log(questions[questionRandomIndex]);
    console.log(h1.textContent);
    // document.getElementById('h1').innerHTML = 'This is the new question?'
    h1.textContent = questions[questionRandomIndex];
    //hide the p tag here
    button.style.display = "none";
    p.style.display = "none";
    //hide the start button
    //insert new content
    var newButton1 = document.createElement('button');
    quizAnswersEl.appendChild(newButton1);
    newButton1.textContent = "test";
    var newButton2 = document.createElement('button');
    quizAnswersEl.appendChild(newButton2);
    newButton2.textContent = "test";
    var newButton3 = document.createElement('button');
    quizAnswersEl.appendChild(newButton3);
    newButton3.textContent = "test";
    var newButton4 = document.createElement('button');
    quizAnswersEl.appendChild(newButton4);
    newButton4.textContent = "test";
}