let maximum = parseInt(prompt("Enter the maximun number!"));
//NaN is falsey, therefore it will run while we enter something that is NaN
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid maximun number!"));
}
//creates a random integer that goes from 1 to the maximum number
const targetNum = Math.floor(Math.random() * maximum) + 1;
//console.log(targetNum);

let count = 1;
let guess = parseInt(prompt("Enter your first guess"));
while (!guess) {
    guess = parseInt(prompt("Enter a valid guess!"));
}

while (parseInt(guess) != targetNum) {
    count++;
    if (guess === "q") {    //if we enter q, exit
        break;
    } else if (parseInt(guess) === NaN) {   //if we did not enter q and not a number, ask for a valid number
        while (parseInt(guess) === NaN) {
            guess = prompt("Enter a valid guess!");
        }
    }
    else if (parseInt(guess) > targetNum) { //if our guess is too high...
        guess = prompt("Too high! Enter a new guess:");
    } else {    //if our guess is too low...
        guess = prompt("Too Low! Enter a new guess:");
    }
}

console.log(`It took you ${count} attempts!`);

