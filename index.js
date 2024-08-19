let humanScore = 0;
let computerScore = 0;
let round = 0;

const headingEl = document.createElement('h2');
const buttonsContainer = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const roundEl = document.createElement('h3');
const messageEl = document.createElement('p');
const resultsContainer = document.createElement('div');
const humanResultsEl = document.createElement('p');
const cpuResultsEl = document.createElement('p');
const roundMessageEl = document.createElement('p');

resultsContainer.classList = 'results-container';
roundMessageEl.classList = 'round-message';
buttonsContainer.setAttribute('style', 'padding:16px; display: flex; gap: 16px; width:100%; justify-content: center');
rockBtn.innerText = 'Rock';
paperBtn.innerText = 'Paper';
scissorsBtn.innerText = 'Scissors';
headingEl.innerText = 'Make a choice';

document.body.appendChild(headingEl);
document.body.appendChild(buttonsContainer);
document.body.appendChild(resultsContainer);
document.body.appendChild(roundMessageEl);

resultsContainer.appendChild(humanResultsEl);
resultsContainer.appendChild(roundEl);
resultsContainer.appendChild(cpuResultsEl);

buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);

buttonsContainer.addEventListener('click', (e) => playRound(getHumanChoice(e.target.innerText), getComputedChoice()));

function getHumanChoice(choice) {
	// get human choice and store in variable
	const humanChoice = choice;
	const formattedUserChoice = humanChoice.trim().toLocaleLowerCase();

	// Check if entered valid value and return it  ELSE console error
	if (formattedUserChoice === 'rock' || formattedUserChoice === 'paper' || formattedUserChoice === 'scissors') {
		return formattedUserChoice;
	}
}

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

function resetValues() {
	computerScore = 0;
	humanScore = 0;
	round = 0;
	roundEl.innerText = '';
}

function playRound(humanChoice, computerChoice) {
	++round;
	roundEl.innerText = `Round number: ${round}`;
	if (humanChoice === computerChoice) {
		roundMessageEl.textContent = `DRAW. Your choice ${humanChoice} is equal to computer choice - ${computerChoice}`;
	} else if (
		(humanChoice === 'paper' && computerChoice === 'rock') ||
		(humanChoice === 'rock' && computerChoice === 'scissors') ||
		(humanChoice === 'scissors' && computerChoice === 'paper')
	) {
		humanScore++;
		roundMessageEl.textContent = `You WIN round. Your choice - ${humanChoice} beats computer's choice - ${computerChoice}`;
	} else {
		computerScore++;
		roundMessageEl.textContent = `You LOST round. Your choice - ${humanChoice} lost to computer's choice - ${computerChoice}`;
	}

	if (humanScore === 5) {
		roundMessageEl.innerHTML = '<span class=winMessage>YOU WIN!</span>';
		resetValues();
	}
	if (computerScore === 5) {
		roundMessageEl.innerHTML = '<span class=lostMessage>YOU LOST!</span>';
		resetValues();
	}

	humanResultsEl.innerText = `You score: ${humanScore}`;
	cpuResultsEl.innerText = `Computer score: ${computerScore}`;
}
