console.log('Welcome to RPS game!');

function getComputedChoice() {
	// initiate var includes data ['rock', 'paper', 'scissors']
	const rpsChoices = ['rock', 'paper', 'scissors'];

	// create random number representing index  data. max num is items' num in array
	const numChoices = rpsChoices.length;
	const randomIndex = Math.floor(Math.random() * numChoices);

	// return computer choice
	const computerChoice = rpsChoices[randomIndex];
	return computerChoice;
}

console.log('Computer choice is: ', getComputedChoice());

function getHumanChoice() {
	// get human choice and store in variable
	const humanChoice = prompt('Please enter your choice: rock, paper or scissors');

	// check IF there is user input. If no return err msg, ELSE format input to lowercase
	let formattedHumanChoice;
	if (humanChoice === '' || humanChoice === null) {
		return 'ERROR: Please enter choice: rock, paper or scissors';
	} else {
		formattedHumanChoice = humanChoice.toLocaleLowerCase();
	}

	// check IF entered data is valid, otherwise return err message
	if (formattedHumanChoice !== 'rock' && formattedHumanChoice !== 'paper' && formattedHumanChoice !== 'scissors') {
		return 'ERROR: Please enter only valid choice: rock, paper or scissors';
	}

	// return formatted human choice
	return formattedHumanChoice;
}

console.log('Human choice is: ', getHumanChoice());
