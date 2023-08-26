const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const operator = document.querySelector('.operator1');
const answer = document.querySelector('.answer');
const answerBtn = document.querySelector('.submit-answer');

let correctAnswer = 0;
let playerResponse;

randomNumbers();
randomOperator();
result(number1, number2, operator);

function randomNumbers() {
    number1.innerText = Math.floor(Math.random() * (11 - 1)) + 1;
    number2.innerText = Math.floor(Math.random() * (11 - 1)) + 1;
}

function randomOperator() {
    const operators = ['+', '-'];
    if (Number(number1.innerText) <= Number(number2.innerText)) {
        operator.innerText = '+' ;
    } else if (Number(number1.innerText) >= Number(number2.innerText)){
        operator.innerText = operators[Math.floor(Math.random() * (2 - 0)) + 0];
    }
}

function result(num1, num2, operator) {
    if (operator.innerText == '+') {
        
        correctAnswer = Number(num1.innerText) + Number(num2.innerText);
        // answer.value = correctAnswer;
    }else if (operator.innerText == '-') {
        correctAnswer = Number(num1.innerText) - Number(num2.innerText);
        // answer.value = correctAnswer;
    }
}

answerBtn.addEventListener('click', function saveResponsePlayer() {
    playerResponse = answer.value;
    checkResponse();
});

function checkResponse() {
    if (Number(playerResponse) == correctAnswer) {
        console.log("Верно!")
    } else {
        console.log("Неверно:(")
    }
}