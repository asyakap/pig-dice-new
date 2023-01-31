//Business Logic for Pig Dice

export function Player(name) {

  this.playerName = name;
  this.score = 0;
  this.currentScore = 0;
}


export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let playersList = [];

function clearFields () {
  document.getElementById("result1").innerText = "";
  document.getElementById("rolledScore1").innerText = "";
  document.getElementById("rolledScore2").innerText = "";
  document.getElementById("score1").innerText = "";
  document.getElementById("result2").innerText = "";
  document.getElementById("score2").innerText = "";
  document.getElementById("gameResults").innerText = "";
  document.getElementById("totalScore1").innerText ="";
  document.getElementById("totalScore2").innerText ="";
}


export function startGame () {
  clearFields();
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  document.getElementById("player1").innerText = name1;
  document.getElementById("player2").innerText = name2;
  let score1 = 0;
  let score2 = 0;
  let player1 = new Player(name1, score1);
  let player2 = new Player(name2, score2);
  playersList.push(player1, player2);
  return playersList;
}

export function player1Roll() {
  clearFields();
  let player1 = playersList[0];
  let player2 = playersList[1];
  let rolledScore1 = getRandomInt(1, 7);
  if (rolledScore1 === 1) {
    player1.currentScore = 0;
    document.getElementById("rolledScore1").innerText = "You rolled " + rolledScore1;
    document.getElementById("result1").innerText = "Your score is 0. It is " + player2.playerName + "'s turn.";
    document.getElementById("totalScore1").innerText = "Your total score is " + player1.score;
  }
  else {
    player1.currentScore = player1.currentScore + rolledScore1;
    document.getElementById("rolledScore1").innerText = "You rolled " + rolledScore1;
    document.getElementById("score1").innerText = "Your current score is " + player1.currentScore ;
    let tempScore1 = player1.score + player1.currentScore;
    document.getElementById("totalScore1").innerText = "Your total score is " + tempScore1;
    if (tempScore1 > 99) {
      document.getElementById("gameResults").innerText  = "Congratulations! " + player1.playerName + " won!";
    }
  }
  return player1.currentScore;
}


export function player1Pass() {
  let player1 = playersList[0];
  let player2 = playersList[1];
  clearFields();
  player1.score += player1.currentScore;
  player1.currentScore = 0;
  document.getElementById("result1").innerText = "Your score is " + player1.score + ". It is " + player2.playerName + "'s turn.";
}

export function player2Roll() {
  clearFields();
  let player1 = playersList[0];
  let player2 = playersList[1];
  let rolledScore2 = getRandomInt(1, 7);
  if (rolledScore2 === 1) {
    player2.currentScore = 0;
    document.getElementById("rolledScore2").innerText = "You rolled " + rolledScore2;
    document.getElementById("result2").innerText = "Your score is 0. It is " + player1.playerName + "'s turn.";
    document.getElementById("totalScore2").innerText = "Your total score is " + player2.score;
  }
  else {
    player2.currentScore = player2.currentScore + rolledScore2;
    document.getElementById("rolledScore2").innerText = "You rolled " + rolledScore2;
    document.getElementById("score2").innerText = "Your current score is " + player2.currentScore ;
    let tempScore2 = player2.score + player2.currentScore;
    document.getElementById("totalScore2").innerText = "Your total score is " + tempScore2;
    //comparing scores
    if (tempScore2 > 99) {
      document.getElementById("gameResults").innerText  = "Congratulations! " + player2.playerName + " won!";
    }
  }
  return player2.currentScore;
}

export function player2Pass() {
  let player1 = playersList[0];
  let player2 = playersList[1];
  clearFields();
  player2.score += player2.currentScore;
  player2.currentScore = 0;
  document.getElementById("result2").innerText = "Your score is " + player2.score + ". It is " + player1.playerName + "'s turn.";
}
