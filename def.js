// JavaScript program to print
// table of a number entered by the user

// Ask the user for a number
let n = parseInt(prompt("Enter a number to print its multiplication table:"));

// Validate input
if (isNaN(n)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Generate and print the table
    for (let i = 1; i <= 10; ++i) {
        console.log(n + " * " + i + " = " + n * i);
    }
}
