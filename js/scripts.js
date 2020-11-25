function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

let playerOne;
let playerTwo;
let currentPlayer;

  $(document).ready(function(event) {
    // event.preventDefault();
    playerOne = new Player(prompt("Player one, please enter your name:"));
    playerTwo = new Player(prompt("Player two, please enter your name:"));
    console.log(playerOne.name);
    console.log(playerTwo.name);
    
    currentPlayer = playerOne;
    currentPlayer.turn();

}); 

Player.prototype.choice = function (){
  $(".hold").show();
  $(".roll").show();
}

Player.prototype.roll = function() {
  let dice = Math.floor((Math.random() * 6) + 1);  
  console.log("dice =" + dice)
  currentPlayer.addToTurnScore(dice);
  currentPlayer.choice();
}

Player.prototype.hold = function() {
  this.addToTotalScore(this.turnScore);  
  currentPlayer.switchPlayer();
  console.log("currentPlayer =" + currentPlayer.name);

  $(".hold").hide();
  $(".roll").hide();
}

Player.prototype.addToTurnScore = function(amount) {
  this.turnScore += amount;  
  console.log("turnScore =" + this.turnScore)
}

Player.prototype.addToTotalScore = function(amount) {
  this.totalScore += amount;
  this.turnScore = 0;
  console.log("totalScore =" + this.totalScore)
  console.log("2turnScore =" + this.turnScore)
}


Player.prototype.turn = function() {
  alert("Choose to roll or to hold")
  $(".hold").show();
  $(".roll").show();
  $(".roll").click(function(){
    currentPlayer.roll();
  }); 

  $(".hold").click(function(){
    currentPlayer.hold();
  }); 

  
}

Player.prototype.switchPlayer = function() {
  if(currentPlayer === playerOne) {
      currentPlayer = playerTwo;
  }
  else {
    currentPlayer = playerOne;
    alert(currentPlayer.name + ", its your turn now");
  }
  console.log("2currentPlayer =" + currentPlayer.name)
  return currentPlayer;
  
}