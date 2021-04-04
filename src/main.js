let playerName = '';

function gameValues() {
    localStorage.setItem("player-name", "fanático");
    localStorage.setItem("category", "");
    localStorage.setItem("score", "0")
}

function nameSubmit(event) {
    playerName = document.getElementById('player-name').value;
    localStorage.setItem("player-name", playerName);
}

const form = document.getElementById('form');
form.addEventListener('submit', nameSubmit);

gameValues();