/* Tutorial 4
Example 1 JavaScript code
*/
console.log("Arjun's Output from Tutorial 4 Example 1");



// 1. Validate Inputs //

// Reminders:
// - Numeric: "7" - valid
// - Non-numeric: "a" - invalid
// - Spaces: "   " - invalid
// - Blank: "" - invalid
// - Double: "3.14" - invalid
// - Out of range: "0" or "101" - invalid


(function validateInput1to100() {
  // Ask for input
  const inputDirections = prompt("Enter a number between 1 and 100:");

  // Validation
  function isValid1to100(input) {
    // Null (Cancel), blank, or spaces are invalid
    if (input === null) return false;
    const trimmed = input.trim();
    if (trimmed === "") return false;

    // Must be an integer number
    // parseInt handles leading/trailing spaces; ensure no stray non-digits

    const intPattern = /^[+-]?\d+$/;
    if (!intPattern.test(trimmed)) return false;

    const n = Number.parseInt(trimmed, 10);
    if (!Number.isInteger(n)) return false;
    if (Number.isNaN(n)) return false;

    // Range check
    return n >= 1 && n <= 100;
  }

  if (isValid1to100(inputDirections)) {
    console.log(`Thank you! You entered ${inputDirections.trim()}, a valid number.`);
  } else {
    // Preserve exactly what the user typed (even spaces / null)
    const enteredInput = inputDirections === null ? "null" : inputDirections;
    console.log(`Sorry, ${enteredInput} is not a valid entry.`);
  }

  
})();




// 2. Functions - Arrays and Objects

function validArray(arr) {
  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    length: arr.length,
  };
}

(function getUserArray() {
  // Prompt the user to enter array elements separated by commas
  const inputArray = prompt("Enter array elements separated by commas:");

  if (inputArray !== null) {
    // Split input into array and trimming spaces
    const arr = inputArray.split(",").map(item => item.trim());

    // Show the summary object in console
    const result = validArray(arr);
    console.log("Your array:", arr);
    console.log("Summary object:", result);
  } else {
    console.log("No array entered.");
  }
})();