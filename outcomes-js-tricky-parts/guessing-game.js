function guessingGame() {
  // Choose a random target number
  let target = Math.floor(Math.random() * 100);
  console.log(target);
  // Keep track of guess count and if the player has won
  let guessCount = 0;
  let hasWon = false;

  // Return a function called guess that has access to the target
  return function guess(num) {
    guessCount++;
    let status = "";
    if (!hasWon) {
      if (num === target) {
        status = `You win! You found ${target} in ${guessCount} guesses`;
        // clear guessCount
        guessCount = 0;
        hasWon = true;
      } else if (num < target) {
        status = `${num} is too low!`;
      } else if (num > target) {
        status = `${num} is too high!`;
      }
    } else {
      status = "The game is over, you have already won!";
    }
    return status;
  };
}

module.exports = { guessingGame };
