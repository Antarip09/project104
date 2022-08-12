function Login() {
    player_name = document.getElementById("playername").value ;
    localStorage.setItem("player_name", player_name);

    window.location = "gamepage.html";
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}