const p1 = {
    score: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Button"),
}

const p2 = {
    score: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Button"),
}

const resetButton = document.querySelector("#resetButton");
const selectRound = document.querySelector("#rounds");
let gameRound = selectRound.value;

function updateScore(player, opponent) {

}

function winCheck(player, opponent) {
    player.display.innerText = ++player.score;
    if (player.score >= gameRound) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");
}
}

function reset() {
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.innerText = "0";
        player.display.classList.remove("has-text-success", "has-text-danger");
        player.button.disabled = false;
    }
}

selectRound.addEventListener("click", () => {
    if (gameRound != parseInt(selectRound.value)) {
        reset();
        gameRound = parseInt(selectRound.value);
    }
})

p1Button.addEventListener("click", () => {
    winCheck(p1, p2);
})

p2Button.addEventListener("click", () => {
    winCheck(p2, p1);
})

resetButton.addEventListener("click", reset)