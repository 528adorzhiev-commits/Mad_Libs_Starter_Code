/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));
let animal = prompt("Enter an animal:");
let age = Number(prompt("Enter an age:"));
let item = prompt("Enter an item:");
let verb = prompt("Enter a verb:");
let reason = prompt("Enter a criminal offense:");
let person1 = prompt("Enter a person:");
let person2 = prompt("Enter another person:");
let number = Number(prompt("Enter a number:"));

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;
let math = "age" - "number"


// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.



// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses,racoo plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

let story = `When ${person1} and ${person2} were sent to a jail for ${reason}. They used ${item} to dig a convenient tunnel and were digging it for ${number} days.
 When they finally escaped to the other side, security guard caught them because they were ${verb}. But they used the ${item} again to knock out the guard`

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.
