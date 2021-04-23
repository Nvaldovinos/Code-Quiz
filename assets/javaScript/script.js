//variables for html elements
var start = document.getElementById('start');
var questions = document.querySelector('.options');
var firstA = document.getElementById('firstA');
var secondB = document.getElementById('secondB');
var thirdC = document.getElementById('thirdC');
var fourthD = document.getElementById('fourthD');
var timerBox = document.getElementById('timer');
var question = document.getElementById('question');

//variable that keeps track of time, current question andscore
var timer = 75;
var currentQuestion = 0;
var score = 0;

//variable that holds all of the questions
var codeQuestion = [
    {
     questions: "What is JS?",
        firstA: "Javafx",
        secondB: "Java Script",
        thirdC:  "Java",
        fourthD: "C++",
        answer: "secondB"
    },
    //Second set of questions 
    {
        questions: "Do you like JS?",
        firstA: "no",
        secondB: "yes",
        thirdC:  "idk",
        fourthD: "yessss"
    }
];

function runTime(){

    if(timer === 0){
        console.log('Game Over');
        return;
    }

    timer--;
    console.log(timer);
    timerBox.innerText = timer;

};

function startQuiz(){
    // Starts timer 
    setInterval(runTime, 1000);
    console.log(codeQuestion);

    displayQuestion();

};

function displayQuestion(){

    //Starts displaying the questions
    question.innerText = codeQuestion[currentQuestion].questions;
    firstA.innerText = codeQuestion[currentQuestion].firstA;
    secondB.innerText = codeQuestion[currentQuestion].secondB;
    thirdC.innerText = codeQuestion[currentQuestion].thirdC;
    fourthD.innerText = codeQuestion[currentQuestion].fourthD;

    // add userinput to click on buttons and compare to answer 
    // add evenr listeners
    // if correct score++ 
    //else lose time -15
    //current question +1
    // call display questions for different questions 
};

start.addEventListener("click", startQuiz);


 