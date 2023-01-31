import { Player } from './../src/pigdice.js';
import { getRandomInt } from './../src/pigdice.js';


describe('Player', () => {

  test('should check for a new Player being created from constructor', () => {
    let name = "player1";
    let newPlayer = new Player(name);
    expect(newPlayer.playerName).toBe("player1");
    expect(newPlayer.score).toBe(0);
    expect(newPlayer.currentScore).toBe(0);
  });
});


describe('getRandomInt', () => {

  test('should check for the output beeing integer number between 1 and 7', () => {
    let number = getRandomInt(1, 7);
    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(7);
  });
});
