//Create Secret Number
const secretNumber = 4;

//Ask User for Guess
let guess = Number(prompt("Guess A Number!"));

//Check Guess

if (guess === secretNumber) {
    alert("Winner, Winner, Chicken Dinner!");
} else if (guess > secretNumber) {
    alert("Too High, Reload and guess again");
} else {
    alert("Too Low, reload and guess again");
}