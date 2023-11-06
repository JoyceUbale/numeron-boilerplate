// Iteration 5: Store the player score and display it on the game over screen
const scoreBox = document.getElementById("score-board");

// we will get the score from the vault
let passcode = localStorage.getItem("squad56");
console.log(passcode)

scoreBox.innerHTML = passcode;

const playAgainButton = document.getElementById("play-again-button")

playAgainButton.onclick =()=>{
    window.location.href = "./game.html";
}