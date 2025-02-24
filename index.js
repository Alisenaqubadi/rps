function next() {
    let playerName = document.getElementById("player-name").value;
    if (playerName.trim() !== "") {
        localStorage.setItem("userData", playerName);
    }
    window.location.href = "rps.html";
}