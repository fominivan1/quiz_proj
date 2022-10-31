var startQuizButton = document.querySelector("#start-quiz");
var time = document.querySelector(".time");
var mainEl = document.querySelector('main')
var question1 = ["Commmonly used data types DO NOT include: ", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
var question2 = ["String values must be enclosed within ________ when being assigned to variables. ", "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
var question3 = ["The condition in an if/else statement is enclosed with _________ ", "1. quotes", "2. curly brackets", "3. square quotes", "4. parenthesis"]

var correctChoice = document.createElement("h1")
correctChoice.textContent = "Correct!"
var incorrectChoice = document.createElement("h1")
incorrectChoice.textContent = "Incorrect Choice"

var timeLeft = 75;

function countdown() {
var timeInterval = setInterval(function () {
    timeLeft--;
    var message = timeLeft
    if (timeLeft === 0){
        clearInterval(timeInterval)
        displayMessage()
    }
    time.textContent = message
}, 1000);
}

function displayMessage() {
    var endQuizMessage = "QUIZ IS OVER!!!"
    mainEl.textContent = endQuizMessage
}

function firstQuestion() {
    var choice1 = document.createElement("button")
    var choice2 = document.createElement("button")
    var choice3 = document.createElement("button")
    var choice4 = document.createElement("button")
    choice1.textContent = question1[1]
    choice2.textContent = question1[2]
    choice3.textContent = question1[3]
    choice4.textContent = question1[4]
    mainEl.textContent = question1[0]
    mainEl.appendChild(choice1)
    mainEl.appendChild(choice2)
    mainEl.appendChild(choice3)
    mainEl.appendChild(choice4)

    choice1.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice);
        secondQuestion();
    })
    choice2.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice);
        secondQuestion();
    })
    choice3.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice);
        secondQuestion();
    })
    choice4.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft + a;
        mainEl.appendChild(correctChoice)
        secondQuestion();
    })
}

function secondQuestion() {
    var choice1 = document.createElement("button")
    var choice2 = document.createElement("button")
    var choice3 = document.createElement("button")
    var choice4 = document.createElement("button")
    choice1.textContent = question2[1]
    choice2.textContent = question2[2]
    choice3.textContent = question2[3]
    choice4.textContent = question2[4]
    mainEl.textContent = question2[0]
    mainEl.appendChild(choice1)
    mainEl.appendChild(choice2)
    mainEl.appendChild(choice3)
    mainEl.appendChild(choice4)

    choice1.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft + a;
        mainEl.appendChild(correctChoice)
        thirdQuestion()
    })
    choice2.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice);
        thirdQuestion()
    })
    choice3.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice);
        thirdQuestion()
    })
    choice4.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice)
        thirdQuestion()
    })
}

function thirdQuestion() {
    var choice1 = document.createElement("button")
    var choice2 = document.createElement("button")
    var choice3 = document.createElement("button")
    var choice4 = document.createElement("button")
    choice1.textContent = question3[1]
    choice2.textContent = question3[2]
    choice3.textContent = question3[3]
    choice4.textContent = question3[4]
    mainEl.textContent = question3[0]
    mainEl.appendChild(choice1)
    mainEl.appendChild(choice2)
    mainEl.appendChild(choice3)
    mainEl.appendChild(choice4)

    choice1.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice)
    })
    choice2.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice);
    })
    choice3.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft + a;
        mainEl.appendChild(correctChoice);
    })
    choice4.addEventListener("click", function(){
        let a = 10;
        timeLeft = timeLeft - a;
        mainEl.appendChild(incorrectChoice)
    })
}



startQuizButton.addEventListener("click", function(){
    countdown();
    firstQuestion();
})
