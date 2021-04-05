let category = "";
let questions;
let selectedOption;
let rightAnswers = new Array(6);
let questionNumber = 0;
let score = 0;
let checkedQuestions = new Array(6);
let timer = 30
function setCategory(){
    category = localStorage.getItem("category");
    if (category === "GOT"){
        document.getElementById("header-img").src = "../assets/GOT.jpg";
    }else if( category === "TLOTR") {
        document.getElementById("header-img").src = "../assets/TLOTR.jpg";
    }
}

function listQuestions(){
    const xhttp = new XMLHttpRequest();
    if (category === "GOT"){
        xhttp.open('GET', 'preguntas-GOT.json', true);
    }else if( category === "TLOTR") {
        xhttp.open('GET', 'preguntas-TLOTR.json', true);
    }

    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status ==200){
          questions = JSON.parse(this.responseText);
          shuffleArray(questions)
          collectRightAnswers()
          showQuestions(questions[questionNumber]["question"], questions[questionNumber]["answers"]);
        }
    }
}

function collectRightAnswers(){
    for(i = 0; i < questions.length; i++) {
        answers = questions[i]["answers"];
        rightAnswers[i] = answers[0]
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestions(question, answers){
    document.getElementById("question").innerHTML = question;
    shuffleArray(answers);
    document.getElementById("answers").innerHTML = `
        <div class="answer" id = "answer-0" onclick="clickAnswer(0)">
            <span class="flaticon-swords"></span>
            <p>${answers[0]}</p>
        </div>
        <div class="answer" id = "answer-1" onclick="clickAnswer(1)">
            <span class="flaticon-axes"></span>
            <p>${answers[1]}</p>
        </div>
        <div class="answer" id = "answer-2" onclick="clickAnswer(2)">
            <span class="flaticon-crossbow"></span>
            <p>${answers[2]}</p>
        </div>
        <div class="answer" id = "answer-3" onclick="clickAnswer(3)">
            <span class="flaticon-shield"></span>
            <p>${answers[3]}</p>
        </div>
    `; 
}

function clickAnswer(id) {
    selectedOption = document.getElementById("answer-"+id).querySelector("p").innerHTML;
    document.getElementById("answer-"+id).style.backgroundColor = "#AAADBF";
    setTimeout(checkAnswer,300);
}

function checkAnswer() {
    let checkArray = new Array(2);
    checkArray[0] = questions[questionNumber]["question"];
    if(rightAnswers[questionNumber] === selectedOption){
        checkArray[1] = true;
        score++;
    }else{
        checkArray[1]=false
    }
    checkedQuestions[questionNumber]=checkArray;
    questionNumber++;
    timer = 30;
    if (questionNumber<6){
        showQuestions(questions[questionNumber]["question"], questions[questionNumber]["answers"]);
    }else{
        localStorage.setItem("questions",JSON.stringify(checkedQuestions));
        localStorage.setItem("score",score);
        location.href = './score.html';
    }
}

function countdown(){
    if (timer >= 10){
        document.getElementById("countdown").innerHTML = "0:"+timer;
    }else {
        document.getElementById("countdown").innerHTML = "0:0"+timer;
    }
    if(timer == -1) {
        alert("El tiempo se acabo, ¿Por qué tanta duda? Inténtalo de nuevo!");
        location.href = './choice.html';
    }
    timer -= 1;
}

setCategory();
listQuestions();
setInterval(countdown,1000);