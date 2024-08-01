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

console.log(getComputedChoice());
