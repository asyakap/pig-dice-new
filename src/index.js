
import { startGame } from './pigdice.js'
import { player1Roll } from './pigdice.js';
import { player1Pass } from './pigdice.js';
import { player2Roll } from './pigdice.js';
import { player2Pass } from './pigdice.js';
import './css/styles.css';



//User Interface Logic


document.getElementById("submit").addEventListener("click", startGame);
document.getElementById("roll1").addEventListener("click", player1Roll);
document.getElementById("pass1").addEventListener("click", player1Pass);
document.getElementById("roll2").addEventListener("click", player2Roll);
document.getElementById("pass2").addEventListener("click", player2Pass);
