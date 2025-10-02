/* Tutorial 4
Example 1 JavaScript code
*/
console.log("Arjun's Output from Tutorial 4 Example 2");

function startGame() {
    const randNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    console.log("I'm thinking of a number (1–100). Try to guess it!");

    while (true) {
    const numInput = prompt("Guess the number (1–100):");
    attempts++;

    // Per instructions: assume valid entry; still parseInt to compare
    const guess = Number.parseInt(numInput, 10);

    if (guess < randNum) {
        console.log("Too low, guess again");
        alert("Too low, guess again");
    } else if (guess > randNum) {
        console.log("Too high, guess again");
        alert("Too high, guess again");
    } else {
        console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
        alert(`Correct! It took you ${attempts} attempts to guess the correct number.`);
        break;
    }
    }

}
