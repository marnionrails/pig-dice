function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

let playerOne;
let playerTwo;
let currentPlayer;

/* $(document).ready(function(event) {
    // event.preventDefault();
    playerOne = new Player(prompt("Player one, please enter your name:"));
    playerTwo = new Player(prompt("Player two, please enter your name:"));
    console.log(playerOne.name);
    console.log(playerTwo.name);
    
    currentPlayer = playerOne;
    currentPlayer.turn();

}); */