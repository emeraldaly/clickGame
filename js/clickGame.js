var players = document.getElementsByClassName("clique");
var score = 0;
var startTime = document.getElementById('start');
var resetGame = document.getElementById('stop')
var clock = 20;
var timeLeft;

//Game timer and re-enable pictures

function start() {
  setTimeout(function() {
    if (score < 10) {
      alert("You only clicked on " + score + " members of my clique!");
    } else if (score >= 10 && score <= 15) {
      alert("Not bad you clicked on " + score + " members of my clique!");
    } else {
      alert("It's a shame you can't play ALL DAY! You clicked " + score + " members of my clique!");
    };
  }, 20000)
  this.disabled=true;
  timeLeft = setInterval(function() {
    document.getElementById('runningTime').innerHTML = --clock;
    if (clock <= 0) {
      document.getElementById('runningTime').innerHTML = "It's a shame you can't play ALL DAY! You clicked " + score + " members of my clique!";
      clearInterval(interval);
    }
  }, 1000);
  for (var i = 0; i < players.length; i++) {
  players[i].removeAttribute("disabled");
}

}
startTime.addEventListener("click", start);

//Loop to increment score and disable pictures to prevent double clicks

for (var i = 0; i < players.length; i++) {
  players[i].addEventListener("click", function() {
    score = score + 1;
    this.disabled = true;
  });
}

//Restart Game by Pushing Button

function restartGame() {
  window.location.reload();
};
resetGame.addEventListener("click", restartGame);