var startButton = document.getElementById('start');
var startPage = document.getElementById('start-page');
var quizCard = document.getElementById('quiz-card');


startButton.addEventListener('click',startGame)


function startGame () {
startPage.style.display = 'none';
quizCard.style.display = 'block';
questionOne();
setTime();
};

var time = document.getElementById('timer');

var secondsLeft = 50;
var userScore = 0;

function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
     
      clearInterval(timerInterval);
      
    }

  }, 1000);
}
// questions:
var listOfQuestions = [
    {
        question:'The condition in an if/else statement is enclosed within ____.',
        choice1:'\"quotes\"',
        choice2:'{curly brackets}',
        choice3:'(parentheses)',
        choice4:'[square brackets]',
        answer: '(parentheses)'
    },

{
    question:"How do you have a link in your html open a new browser window? ",
    choice1:'target=\"_new\"',
    choice2:'blank=\"_open\"',
    choice3:'target=\"_blank\"',
    choice4:'open=\"_blank\"',
    answer: 'target=\"_blank\"'
},

{
    question:'What does API stand for?',
    choice1:'Application Programming Intelligence',
    choice2:'Automated Programming Instructor ',
    choice3:'Application Programming Interface',
    choice4:'Aplicatioin Programming Interruption',
    answer: 'Application Programming Interface'
},

{
    question:'Which built-in method reverses the order of the elements of an array?',
    choice1:'changeOrder(order)',
    choice2:'reverse()',
    choice3:'sort(order',
    choice4:'one of the above',
    answer: 'reverse()'
},



]

var questions = document.getElementById('questions');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');


function questionOne () {

questions.textContent = listOfQuestions[0].question;
answerOne.textContent = listOfQuestions[0].choice1;
answerTwo.textContent = listOfQuestions[0].choice2;
answerThree.textContent = listOfQuestions[0].choice3;
answerFour.textContent = listOfQuestions[0].choice4;

answerOne.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer1')){
        secondsLeft -= 5;
        userScore -= 5;
    }
    questionTwo();
});

answerTwo.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer2')){
        secondsLeft -= 5;
        userScore -= 5;
    }
    questionTwo();
});

answerThree.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer3')){
        secondsLeft -= 5;
        userScore -= 5;
    }
    questionTwo();
});

answerFour.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer4')){


        secondsLeft += 5;
        userScore += 5;
    }
    questionTwo();
});
};



function questionTwo () {

questions.textContent = listOfQuestions[1].question;
answerOne.textContent = listOfQuestions[1].choice1;
answerTwo.textContent = listOfQuestions[1].choice2;
answerThree.textContent = listOfQuestions[1].choice3;
answerFour.textContent = listOfQuestions[1].choice4;

answerOne.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer1')){

        secondsLeft -= 5;
        userScore -= 5;
        questionThree();
    }

});

answerTwo.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer2')){

        secondsLeft -= 5;
        userScore -= 5;
        questionThree();
    }

});

answerThree.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer3')){

        secondsLeft -= 5;
        userScore -= 5;
        questionThree();
    }

});

answerFour.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer4')){

        secondsLeft += 5;
        userScore += 5;
        questionThree();
    }

});


}

function questionThree () {
    
questions.textContent = listOfQuestions[2].question;
answerOne.textContent = listOfQuestions[2].choice1;
answerTwo.textContent = listOfQuestions[2].choice2;
answerThree.textContent = listOfQuestions[2].choice3;
answerFour.textContent = listOfQuestions[2].choice4;
    
answerOne.addEventListener('click', function(event){
  userChoice = event.target;
    
  if (userChoice.matches('#answer1')){

    secondsLeft -= 5;
    userScore -= 5;
    questionFour();
  }
});
    
answerTwo.addEventListener('click', function(event){
  userChoice = event.target;
      
  if (userChoice.matches('#answer2')){

    secondsLeft -= 5;
    userScore -= 5;
    questionFour();
  } 
});
    
answerThree.addEventListener('click', function(event){
  userChoice = event.target;
  
  if (userChoice.matches('#answer3')){

    secondsLeft -= 5;
    userScore -= 5;
    questionFour();
  }
});
    
answerFour.addEventListener('click', function(event){
  userChoice = event.target;
    
  if (userChoice.matches('#answer4')){

    secondsLeft += 5;
    userScore += 5;
    questionFour();
  }
});
    
};


function questionFour () {
questions.textContent = listOfQuestions[3].question;
answerOne.textContent = listOfQuestions[3].choice1;
answerTwo.textContent = listOfQuestions[3].choice2;
answerThree.textContent = listOfQuestions[3].choice3;
answerFour.textContent = listOfQuestions[3].choice4;
        
answerOne.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer1')){

        secondsLeft -= 5;
        userScore -= 5;
        Scores();
    }
        
});
        
answerTwo.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer2')){

        secondsLeft -= 5;
        userScore -= 5;
        Scores();
    }
});
        
answerThree.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer3')){

        secondsLeft -= 5;
        userScore -= 5;
        Scores();
    }
});
        
answerFour.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer4')){

        secondsLeft += 5;
        userScore += 5;
        Scores();
    }
        
});
        
}



var scorePage = document.getElementById('score-page')
function Scores () {
    quizCard.style.display = 'none';
    scorePage.style.display = 'block';
    };