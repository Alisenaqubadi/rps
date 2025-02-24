var players = 0;
var coms = 0;

function draw() {
    alert(`It is a tie Player = ${players} and Computer = ${coms}`);
}

function won() {
    players += 1;
    alert(`You won this time but not next time Player = ${players} and Computer = ${coms}`);
}

function lost() {
    coms += 1;
    alert(`You lost this time Player = ${players} and Computer = ${coms}`);
}

function game() {
   
    let computerChoice = Math.floor(Math.random() * 3);
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

    function getComputerChoice(choice) {
        switch (choice) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    let computerChoiceStr = getComputerChoice(computerChoice);

    if (playerChoice === computerChoiceStr) {
        draw();
    } else if (
        (playerChoice === "rock" && computerChoiceStr === "scissors") ||
        (playerChoice === "paper" && computerChoiceStr === "rock") ||
        (playerChoice === "scissors" && computerChoiceStr === "paper")
    ) {
        won();
    } else {
        lost();
    }
}

// Call the game function multiple times
game();
game();
game();
game();
game();

if( players > coms){
    alert("You won and i lost")
} else{
    alert("I won that was a good game")
}