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
        console.log('the tin can won! ', computerChoice, ' beats ', humanChoice, '!');
        scoring.computer++;
    } else if (result=='human'){
        console.log('the meat sack won! ', humanChoice, ' beats ', computerChoice, '!');
        scoring.human++;
    } else if (result=='tie'){
        console.log('this is a tie! would you like to upgrade it to a bow?');
    }
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
            console.log('the score is thus\nhuman: ', score.human, '; computer: ', score.computer);    
        } else {
                    if (score.human>score.computer){
                    console.log('ultimate human victory over the machine! yay');
                    } else if (score.human<score.computer){
                    console.log('they won chess, and now rock-paper-scissors??? ubelivable!!');
                    } else
                    console.log('ye, boring stuff, it\'s a tie, guys. refresh for another round');
        }
    }); 
}


playGame();


