alert("I have chosen a number between 1 and 10. Try to guess it.");

var answer = Math.floor(Math.random() * 10 ) + 1;
var guess = prompt("What's your guess?");

for (i=0; i==i; i++) {
    if (answer == guess) {
        alert("Your guess: " + guess + " That's right! You're a good guesser.");

        break;
    } else {
        guess = prompt("Your guess: " + guess + " That is incorrect. Guess again.");
    }
}