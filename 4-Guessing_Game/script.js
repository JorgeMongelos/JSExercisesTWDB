var secretNumber = 4;
var guess = Number(prompt("Guess the secret number by entering a number: "));

if(guess === secretNumber){
    alert("You got it right");
}else if(guess < secretNumber){
    alert("too low, try again!");
}else if(guess > secretNumber){
    alert("Too high, try again");
}