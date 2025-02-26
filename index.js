function next() {
    // Get and validate player name
    let playerName = document.getElementById("player-name").value;
    if (playerName.trim() === "") {
        alert("Please enter a valid player name");
        return;
    }
    localStorage.setItem("userData", playerName.trim());

    // Get and validate round count
    let round = parseInt(document.getElementById("round-count").value);
    if (isNaN(round) || round <= 0) {
        alert("Please enter a valid number of rounds (greater than 0)");
        return;
    }
    localStorage.setItem("serData", round.toString());

    // Redirect to game page
    window.location.href = "rps.html";
}