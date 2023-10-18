let score = {
    wins: 0,
    losses: 0,
    ties: 0,
    updateScore
};

// grab all buttons. They are constant so const can be used.
const buttons = document.querySelectorAll('.choice')
// buttons[0].textContent; or buttons[0].innerHTML yields a specific choice
// .getAttribute('data-choice') will do the same in this instance

// for each, add an event listener.
// https://devdocs.io/dom/eventtarget/addeventlistener
buttons.forEach(button => {
    button.addEventListener('click', () => {playGame(button)});
});

displayScore();

let choiceReport = document.getElementById('js-player-selection');

function computerPlay(){
    // .random is [0, 1)
    // ex: 0.99 * 3 = 2.97, floor is 2
    // randomInt will go from 0 to 2
    // choice starts at zeroth index, so 0, 1, 2
    let randomInt = Math.floor(Math.random() * 3);
    let choice = buttons[randomInt].getAttribute('data-choice');
    return choice;
}

function playGame(button){
    // grab the choice using .getAttribute
    // could also use .innerHTML or .textContent, although .innerHTML may have whitespace
    let playerChoice = button.getAttribute('data-choice');
    
    let computerChoice = computerPlay();
        
    choiceReport.innerText = `You selected ${playerChoice}, I selected ${computerChoice}`;

    // rock beats scissors 
    // paper beats rock
    // scissors beat paper
    
    if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score.updateScore('wins');
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score.updateScore('wins');
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score.updateScore('wins');
    } else if (playerChoice == computerChoice) {
        score.updateScore('ties');
    } else {
        score.updateScore('losses');
    }

    // note how we run all true or 'special' conditions (ties),
    // anything inverse of true is else; ie a loss. ⭐

    displayScore();
}


function updateScore(result){
    // check if the object has this property, key
    if (score.hasOwnProperty(result)) {
        score[result]++;
    }
}

function displayScore(){
    // assign scoreElement to selection
    let scoreElement = document.querySelector('.js-score-results');
    // adjust score
    scoreElement.innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `;
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    choiceReport.innerText = ``
    displayScore();
}