$(document).ready(function() {
	var correct = Math.floor(Math.random()*100);
	var totalGuesses = 5;
	$(this).click(function()) { //separate function of both buttons
		totalGuesses--;
		//record guessed number
		//check if guess if correct
		//if correct, end game
		//if wrong, allow user to keep guessing till they run of of guesses
		//if close, alert "hot"
		//if far, alert "cold"
		//if last guess and incorrect ask user to "play/try again"
		//if num was already guessed, alert user to guess new num and don't decrement totalGuesses
	}
})