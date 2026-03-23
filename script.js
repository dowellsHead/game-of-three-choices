function getComputerChoice(p_choice) {
    let c_choice = p_choice;
    let item = Math.random();
    if (item < 0.99) {
        if (item < 0.66){
            if (item < 0.33){
                c_choice = "rock";
            }
            else 
                c_choice = "paper";
        }
        else
            c_choice = "scissors";
    }
    return c_choice;
}


function playRound(humanChoice, scoring){
    const computerChoice = getComputerChoice(humanChoice);
    let result = 'tie';
    let scoreInfo = 'this is a tie! would you like to upgrade it to a bow?';
    if (humanChoice=='rock'){
        switch (computerChoice){
            case 'scissors': 
                result = 'human';
            break;
            case 'paper':
                result = 'computer';
                break;
        }
    } else if (humanChoice=='paper'){
        switch (computerChoice){
            case 'rock': 
                result = 'human';
            break;
            case 'scissors':
                result = 'computer';
                break;
        }
    } else if (humanChoice=='scissors'){
        switch (computerChoice){
            case 'paper': 
                result = 'human';
            break;
            case 'rock':
                result = 'computer';
                break;
        }
    }
    if (result=='computer'){
        scoreInfo = 'the tin can won! ' + computerChoice + ' beats ' + humanChoice + '!';
        scoring.computer++;
    } else if (result=='human'){
        scoreInfo = 'the meat sack won! ' + humanChoice + ' beats ' + computerChoice + '!';
        scoring.human++;
    } 
    displayComments(scoreInfo);
    activeScore = 'human: ' + scoring.human + '; computer: ' + scoring.computer;
    displayScore(activeScore);
}

function displayComments(newContext){
    const scoreDisplay = document.querySelector('.generalDisplay');
    const prevChild = document.querySelector('.generalDisplay > div#comments');
    const newChild = document.createElement('div');
    
    newChild.setAttribute('id', 'comments');
    newChild.classList.add('content');
    newChild.textContent = newContext;
    scoreDisplay.replaceChild(newChild, prevChild);

    
}

function displayScore(newContext){
    const scoreDisplay = document.querySelector('.generalDisplay');
    const prevChild = document.querySelector('.generalDisplay > div#score');
    const newChild = document.createElement('div');
    
    newChild.setAttribute('id', 'score');
    newChild.classList.add('content');
    newChild.textContent = newContext;
    scoreDisplay.replaceChild(newChild, prevChild);

    
}

function playGame(){
    let score = {
        human: 0,
        computer: 0,
    };
    
    let humanSelection = '';
    let choice = document.querySelector('#choice');
    choice.addEventListener('click', (event) => {
        let target = event.target;
        if (score.human<5 && score.computer<5){
          switch (target.id) {
            case 'rock':
                humanSelection = 'rock';
                playRound(humanSelection, score);
                break;
            case 'scissors':
                humanSelection = 'scissors';
                playRound(humanSelection, score);
                break;
            case 'paper':
                humanSelection = 'paper';
                playRound(humanSelection, score);
                break;
            }  
                
        } else if (score.human == 5 || score.computer ==5){
                    if (score.human>score.computer){
                    displayComments('ultimate human victory over the machine! yay');
                    } else if (score.human<score.computer){
                    displayComments('they won chess, and now rock-paper-scissors??? ubelivable!!');
                    } else
                    displayComments('ye, boring stuff, it\'s a tie, guys. refresh for another round');
                    displayScore('the game is over, refresh for restart');
        }
    }); 
}


playGame();


