const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const operator = document.querySelector('.operator1');
const answer = document.querySelector('.answer');
const answerBtn = document.querySelector('.submit-answer');
const modalWindow = document.querySelector('.modal-window');
const textModalWindow = document.querySelector('.answer-message');
const nextButton = document.querySelector('.next-button');
const roundNumber = document.querySelector('.round-number');
const record = document.querySelector('.record-number');
const updateBtn = document.querySelector('.update__img');

record.innerText = localStorage.getItem('record');


let correctAnswer = 0;
let playerResponse;

const correctResponse = {
    text: 'Правильный ответ! Молодец!',
    colorText: 'rgb(70, 130, 180)',
    textBtn: 'Продолжить'
};
const incorrectResponse = {
    text: 'Неправильно :(',
    colorText: '#FD694B',
    textBtn: 'Новая игра'
};

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
    }else if (operator.innerText == '-') {
        correctAnswer = Number(num1.innerText) - Number(num2.innerText);
    }
}

answerBtn.addEventListener('click', function saveResponsePlayer() {
    playerResponse = answer.value;
    checkResponse();
});

function checkResponse() {
    if (Number(playerResponse) == correctAnswer) {
        modalWindow.classList.add('modal-window_active');
        textModalWindow.innerText = correctResponse.text;
        textModalWindow.style.color = correctResponse.colorText;
        nextButton.innerText = correctResponse.textBtn;
        counterRound();
    } else {
        modalWindow.classList.add('modal-window_active');
        modalWindow.classList.add('modal-window_active');
        textModalWindow.innerText = incorrectResponse.text;
        textModalWindow.style.color = incorrectResponse.colorText;
        nextButton.innerText = incorrectResponse.textBtn;
        roundNumber.innerText = '1';
    }
}

function counterRound() {
    roundNumber.innerText++;
    saveRecord();
}

nextButton.addEventListener('click', function() {
    modalWindow.classList.remove('modal-window_active');
    randomNumbers();
    randomOperator();
    answer.value = '';
    answer.focus();
    result(number1, number2, operator);
})

function saveRecord() {
    if (Number(roundNumber.innerText) > Number(record.innerText)) {
        record.innerText = roundNumber.innerText;
        localStorage.setItem('record', record.innerText);
    }
}

updateBtn.addEventListener('click', function(){
    location.reload();
})