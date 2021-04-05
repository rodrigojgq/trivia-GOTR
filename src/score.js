const score = localStorage.getItem("score");
const checkedQuestions = JSON.parse(localStorage.getItem("questions"));
function showResults() {
    document.getElementById("score").innerHTML = score + "/6";
}
function showCorrectAnswers() {
    let questions = checkedQuestions.map(x => x[0]);
    let corrects = checkedQuestions.map(x => x[1]);
    document.getElementById("question-list").innerHTML = `
        <div class="question" id = "question-0" >
            <span class="flaticon-archery" id = "icon-0"></span>
            <p>${questions[0]}</p>
        </div>
        <div class="question" id = "question-1">
            <span class="flaticon-archery" id = "icon-1"></span>
            <p>${questions[1]}</p>
        </div>
        <div class="question" id = "question-2">
            <span class="flaticon-joker" id = "icon-2"></span>
            <p>${questions[2]}</p>
        </div>
        <div class="question" id = "question-3">
            <span class="flaticon-archery" id = "icon-3"></span>
            <p>${questions[3]}</p>
        </div>
        <div class="question" id = "question-4">
            <span class="flaticon-archery" id = "icon-4"></span>
            <p>${questions[4]}</p>
        </div>
        <div class="question" id = "question-5">
            <span class="flaticon-joker" id = "icon-5"></span>
            <p>${questions[5]}</p>
        </div>
    `;
    for(i = 0; i < corrects.length; i++) {
        if(corrects[i]){
            document.getElementById("icon-"+i).className = "flaticon-archery";
        }else{
            document.getElementById("icon-"+i).className = "flaticon-joker";
            document.getElementById("question-"+i).style.backgroundColor = "#AAADBF";
        }
    }
}

showResults();
showCorrectAnswers();