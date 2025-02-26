document.addEventListener("DOMContentLoaded", function() {
    let playerName = localStorage.getItem("userData");
    if (playerName) {
        document.getElementById("Player").innerText = playerName+"'s Score: 0 ";
    } else {
        playerName = "Player";
        document.getElementById("Player").innerText = "Player's score: 0";
    }
});

