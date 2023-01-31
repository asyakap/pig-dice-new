import { getRandomInt } from './../src/pigdice.js';

describe('getRandomInt', () => {

  test('should check for the output beeing integer number between 1 and 7', () => {
    let number = getRandomInt(1, 7);
    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(7);
  });
});


