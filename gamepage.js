// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses
// made for correct Guess
if(x == y)
{
    alert("congratulation!!!" + playername + "YOU GUESSED IT RIGHT IN"
    + GUESS + "GUESS");
    guess = 1;
}

  
// function for number guessed by user     
var x = document.getElementById("guessfield"). value ;