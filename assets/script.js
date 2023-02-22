const q0 = {
    question: "How do you have a link in your html open a new browser window?",
    o1: "target=\"_new\"",
    o2: "blank=\"_open\"",
    o3: "target=\"_blank\"",
    o4: "open=\"_blank\"",
    answer: "o3",
};

const q1 = {
    question: "What does HTML stand for?",
    o1: "Hyperlinks and Text Markup Language",
    o2: "Hypertext Markup Language",
    o3: "Home Tool Markup Language",
    o4: "Hyper tool Markup Language",
    answer: "o2",
};

const q2 = {
    question: "What does CSS stand for?",
    o1: "Cascading Style Sheets",
    o2: "Coding Style Sheets",
    o3: "Cascading Sheet Styles",
    o4: "Coding Sheet Styles",
    answer: "o1",
};

const q3 = {
    question: "Commonly used data types DO NOT include:",
    o1: "strings",
    o2: "booleans",
    o3: "integers",
    o4: "assets",
    answer: "o4",
};

const q4 = {
    question: "The condition in an if/else statement is enclosed within ____.",
    o1: "\"quotes\"",
    o2: "curly brackets{}",
    o3: "parentheses()",
    o4: "square brackets[]",
    answer: "o3",
};

const q5 = {
    question: "Arrays in JavaScript can be used to store which of the following?",
    o1: "numbers and strings",
    o2: "booleans",
    o3: "other arrays",
    o4: "all of the above",
    answer: "o4",
};

const q6 = {
    question: "Inside which HTML element do we put the JavaScript?",
    o1: "script",
    o2: "js",
    o3: "javascript",
    o4: "scripting",
    answer: "o1",
};

const q7 = {
    question: "Which of the following is an advantage of using JavaScript?",
    o1: "Less server interaction",
    o2: "Immediate feedback to users",
    o3: "increased interactivity",
    o4: "all of the above",
    answer: "o4",
}

const q8 = {
    question: "Which of the following type of variables takes precedence over others if names are the same?",
    o1: "Global variable",
    o2: "Local variable",
    o3: "Both of the above",
    o4: "None of the above",
    answer: "o2",
}

const q9 = {
    question: "Which built-in method reverses the order of the elements of an array?",
    o1: "changeOrder(order)",
    o2: "reverse()",
    o3: "sort(order)",
    o4: "None of the above",
    answer: "o2",
}





const q_Bank = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9]; //array of question objects
const lastIndex = q_Bank.length - 1;


highScore_Storage = window.localStorage; //local storage

var questionIndex = 0;
var curQuestion = "";

// JQUERY VARIABLES //
var introEls = $("#intro");
var startButton = $("#start-button");
var timerEl = $("#timer"); //timer display
var questionForm = $("#question-form"); //form that holds all of the elements for the questions to be displayed
var questionDisplay = $(".question-display");
var quizCompleteDisplay = $(".quizComplete-display");
var highScoresDisplay = $(".highScores-display");
var viewScoresLink = $("#view-scores");

var timeInterval = "";

// different answer choices //
var option1 = $("#option1");
var option2 = $("#option2");
var option3 = $("#option3");
var option4 = $("#option4");

var timeLeft = 200;


function startQuiz() {
    startTimer();
    introEls.hide();
    viewScoresLink.hide();
    questionDisplay.show();
    displayQuestion(questionIndex);
}


function startTimer() {
    timerEl.text("Timer:");
    timeLeft = 200;
    timeInterval = setInterval(function () {
        timeString = "Timer: " + timeLeft;
        timerEl.text(timeString);
        if (timeLeft <= 0) {
            quizComplete();
        }
        timeLeft--;


    }, 1000);
}


function displayQuestion(index) {

    curQuestion = q_Bank[index];
    var question = curQuestion.question;
    var o1 = curQuestion.o1;
    var o2 = curQuestion.o2;
    var o3 = curQuestion.o3;
    var o4 = curQuestion.o4;

    questionForm.append("<h3>" + question + "</h3>");
    questionForm.append("<button class=\"button\" type=\"button\" id=\"option1\">" + o1 + "</button><br>");
    questionForm.append("<button class=\"button\" type=\"button\" id=\"option2\">" + o2 + "</button><br>");
    questionForm.append("<button class=\"button\" type=\"button\" id=\"option3\">" + o3 + "</button><br>");
    questionForm.append("<button class=\"button\" type=\"button\" id=\"option4\">" + o4 + "</button><br>");

}


function checkAnswer(curQuestion, answer) {
    if (answer != curQuestion.answer) {
        incorrect();
        displayMessage("Incorrect!");
    } else {
        displayMessage("Correct!");
    }
    questionForm.children().remove(); //removes current question/answers from form for next question
    if ((questionIndex < lastIndex) && timeLeft > 0) {
        questionIndex += 1;
        displayQuestion(questionIndex);
    } else {
        questionDisplay.hide();
        quizComplete();
    }
}

function incorrect() {
    timeLeft -= 10;
    var timeString = "Timer: " + timeLeft;
    timerEl.text(timeString);
}

function displayMessage(message) {
    $("#answer").replaceWith("<p id=\"answer\">" + message + "</p>");

    var msgInterval = setInterval(function () {
        clearInterval(msgInterval);
        $("#answer").replaceWith("<p id=\"answer\"></p>");
    }, 750);

}


function quizComplete() {
    questionDisplay.hide();
    questionForm.children().remove();
    questionIndex = 0; //resets question index list
    clearInterval(timeInterval); //stops timer
    timerEl.text("");
    viewScoresLink.show();


    $("#your-score-was").replaceWith("<h3 id=\"your-score-was\">Your Score was " + timeLeft + "!</h3>");
    quizCompleteDisplay.show();
}


function submitScore() {
    var curInitials = $("#initials").val();
    $("#initials").val("");
    var keyFound = false;

    //if user has entered nothing
    if (curInitials == "") {
        alert("input a name or initials.");
    } else {
        //if user already has score saved
        Object.keys(highScore_Storage).forEach((key) => {
            if (key == curInitials) {
                keyFound = true;
                var score = highScore_Storage.getItem(key);
                let userAnswer = confirm("you have a score saved. (" + score + ") do you want to overwrite this score?");
                if (userAnswer) {
                    var value = curInitials + ": " + timeLeft;
                    highScore_Storage.setItem(curInitials, value);
                    quizCompleteDisplay.hide();
                    introEls.show();
                }
            }
        })
        if (!keyFound) {
            var value = curInitials + ": " + timeLeft;
            highScore_Storage.setItem(curInitials, value);
            quizCompleteDisplay.hide();
            introEls.show();
        }



    }

}

function viewScores() {
    introEls.hide();
    quizCompleteDisplay.hide();
    $("#high-score-list").children().remove();
    Object.keys(highScore_Storage).forEach((key) => {
        var score = highScore_Storage.getItem(key);
        $("#high-score-list").append("<li>" + score + "</l1>");
    });
    highScoresDisplay.show();
}

function goBack() {
    highScoresDisplay.hide();
    quizCompleteDisplay.hide();
    $("#high-score-list").children().remove();;
    introEls.show();
}

function clearScores() {
    highScore_Storage.clear();
    $("#high-score-list").children().remove();
}

// BUTTONS //
startButton.on("click", startQuiz);
$("#clear-scores").click(clearScores);
$("#submit-score").click(submitScore);


questionForm.on('click', '#option1', function (event) {
    checkAnswer(curQuestion, "o1");
})
questionForm.on('click', '#option2', function (event) {
    checkAnswer(curQuestion, "o2");
})
questionForm.on('click', '#option3', function (event) {
    checkAnswer(curQuestion, "o3");
})
questionForm.on('click', '#option4', function (event) {
    checkAnswer(curQuestion, "o4");
})

viewScoresLink.click(viewScores);
$("#go-back").click(goBack);
$("#go-back2").click(goBack);