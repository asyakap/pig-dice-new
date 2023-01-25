# Pig Dice Game

#### By _**Kai Clausen and Asia Kaplanyan**_

#### _This application creates a game called pig dice._

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This is a game Pig dice. That follows the rules explained here: https://en.wikipedia.org/wiki/Pig_%28dice_game%29_


## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top directory._
* _Open index.html in your preferred web browser._
* _Interact with the webpage._


## Known Bugs

* _No reset functionality. Need to refresh the page to start a new game._


## License

_MIT - If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/25/2023_ _Asia Kaplanyan and Kai Calusen_

## Tests

### Describe: getRandomInt()

Test: "It outputs a randomly denerated integer number"
Code: getRandomInt(1, 7);
Expected Output: random number between 1 and 6

### Describe: clearFields()

Test: "It clears inner Text of the specified fields"
Code: clearFields();
Expected Output: fields are empty

### Describe: startGame()

Test: "It saves names of the players and sets initial values to 0s"
Code: startGame();
Expected Output: names and values are returned;


### Describe: player1Roll()

Test: "It imitates user rolling the dice"
Code: player1Roll()
Expected Output: player1.currentScore 

### Describe: player1Pass()

Test: "It adds currentScore to the score and passes the turn"
Code: player1Pass()
Expected Output: player1.score

### Describe: player2Roll()

Test: "It imitates user rolling the dice."
Code: player2Roll()
Expected Output: player2.currentScore

### Describe: player2Pass()

Test: "It adds currentScore to the score and passes the turn"
Code: player1Pass()
Expected Output: player2.score