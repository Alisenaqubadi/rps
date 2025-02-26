let rock = document.getElementById("Rock");
let paper = document.getElementById("Paper");
let scissors = document.getElementById("Scissors");
let result = document.getElementById("won");
let com = document.getElementById("Computer");
let pl = document.getElementById("Player");
let won = 0;
let computerscore = 0;
let playerscore = 0;
let a;
let i = 0;
let storedRound;

document.addEventListener("DOMContentLoaded", function() {
    // Handle player name
    let playerName = localStorage.getItem("userData");
    if (playerName) {
        document.getElementById("Player").innerText = playerName+"'s Score: 0 ";
        a = playerName;
    } else {
        a = "Player";
        document.getElementById("Player").innerText = "Player's score: 0";
    }
    
   
    console.log("Stored rounds:", storedRound);
});
     // Handle stored round count
     storedRound = parseInt(localStorage.getItem("serData"));
    console.log(storedRound);

function rockRuns(){
    const choice = 0;
    game(choice);
}

function paperRuns(){
    const choice = 1;
    game(choice);
}

function scissorsRuns(){
    const choice = 2;
    game(choice);
}

function game(player){
    let computer = Math.floor(Math.random() * 3)
    if(player === 0 && computer === 2){won = 1;}
    else if(player === 1 && computer === 0){won = 1;}
    else if(player === 2 && computer === 1){won = 1;}
    else if(player === computer){won = 2;}
    else(won = 0)

    switch(won){
        case 0:
        result.innerText = "You lost";
        computerscore += 1;
        com.innerText = "Computer Score:" + computerscore;
        break;
        case 1:
        result.innerText = "You won";
        playerscore += 1;
        pl.innerText = a + "'s Score:" + playerscore;
        break;
        case 2:
        result.innerText = "it's a tie";
    }
    i++;
    console.log(i);
    checkRounds(); // Check if rounds are complete after each game
}

rock.addEventListener("click" , rockRuns);
paper.addEventListener("click" , paperRuns);
scissors.addEventListener("click" , scissorsRuns);

function checkRounds(){
    if(storedRound === i){
        if(computerscore === playerscore){
            window.location.href = "result/tie.html";
        } else if(computerscore < playerscore){
            window.location.href = "result/won.html";
        } else {
            window.location.href = "result/lost.html";
        }
    }
}