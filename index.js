console.log('Welcome to RPS game!');

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
	// get human choice and store in variable
	const humanChoice = prompt('Please enter your choice: rock, paper or scissors');

	// IF there is no user console.log error message
	if (humanChoice === null || humanChoice === '') {
		alert('ERROR! Please enter your choice: Rock, Paper or Scissors.');
		return;
	}

	const formattedUserChoice = humanChoice.trim().toLocaleLowerCase();

	// Check if entered valid value and return it  ELSE console error
	if (formattedUserChoice === 'rock' || formattedUserChoice === 'paper' || formattedUserChoice === 'scissors') {
		return formattedUserChoice;
	} else {
		alert('ERROR! Please enter valid value: Rock, Paper or Scissors.');
		return;
	}
}

function playRound(humanChoice, computerChoice) {
	// IF options are equal console DRAW message, ELSE IF human win increase human score by 1 and console win message
	if (humanChoice === computerChoice) {
		console.log(`DRAW. Your choice: ${humanChoice} is equal to computer choice: ${computerChoice}`);
	} else if (
		(humanChoice === 'paper' && computerChoice === 'rock') ||
		(humanChoice === 'rock' && computerChoice === 'scissors') ||
		(humanChoice === 'scissors' && computerChoice === 'paper')
	) {
		humanScore++;
		console.log(`You WIN round. Your choice - ${humanChoice} beats computer's choice - ${computerChoice}`);
	} else {
		computerScore++;
		console.log(`You LOST round. Your choice - ${humanChoice} lost to computer's choice - ${computerChoice}`);
	}
	console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();

		if (humanSelection !== undefined) {
			const computerSelection = getComputedChoice();
			console.log(`***** ROUND nr.${i + 1} ****`);
			playRound(humanSelection, computerSelection);
			continue;
		} else {
			console.log(`***** ROUND nr.${i + 1} ****`);
			console.log('Invalid user selection. Moving to next round.');
		}
	}

	const winMessage = `GAME OVER: You WIN! your total score: ${humanScore}. Computer total score: ${computerScore}`;
	const lostMessage = `GAME OVER: You LOST. your total score: ${humanScore}. Computer total score: ${computerScore}`;
	const drawMessage = `GAME OVER: DRAW. Your total score: ${humanScore}. Computer total score: ${computerScore}`;

	if (computerScore === humanScore) {
		console.log(drawMessage);
	} else if (humanScore > computerScore) {
		console.log(winMessage);
	} else {
		console.log(lostMessage);
	}
}

playGame();
