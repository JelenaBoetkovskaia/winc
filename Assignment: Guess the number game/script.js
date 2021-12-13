//I use prompt to ask the user for input:
function myFunction() {
    let person = prompt("What is your name?", "friend");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + " , welcome!";
    }
}
//I take a random number between 0 and 25. 
//random value generated:
let y = Math.floor(Math.random() * 25 + 1);

// counting the number of guesses
// made for correct Guess
let guess = 1;

document.getElementById("submitguess").onclick = function () {

    // number guessed by user     
    let x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
    else if (x > y) /* if guessed number is greater
                    than actual number*/ {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}
//Bonus
//geen bonus, onvoldoende kenis = lessen gehad. 
