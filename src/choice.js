let playerName = '';

function gameValues() {
    localStorage.setItem("category", "");
    localStorage.setItem("score", "0")
}

function setName(){
    playerName = localStorage.getItem("player-name")
    document.getElementById("hello-player").innerHTML = "Hola " + playerName + ", elige la categoria para la trivia";
}

document.getElementById("GOT-button").addEventListener("click", function() {
    localStorage.setItem("category", "GOT");
});

document.getElementById("TLOTR-button").addEventListener("click", function() {
    localStorage.setItem("category", "TLOTR");
});

gameValues();
setName();