function getComputerChoice(p_choice) {
    console.log('yeeehaw');
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

function getHumanChoice() {
    console.log("not yeehaw");
    let player_choice = prompt('game on: rock, paper or scissors?');
    player_choice = player_choice.toLowerCase();
    let decision_made = 0;
    while (decision_made == 0){
        if (player_choice=='rock' || player_choice=='scissors' || player_choice=='paper'){
            decision_made = 1;
            return player_choice;
        }
        else
            player_choice = prompt('u made a mistake, dude. try again');

    }

}

function playRound(){
    const humanChoice = getHumanChoice();
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
    } else if (result=='human'){
        console.log('the meat sack won! ', humanChoice, ' beats ', computerChoice, '!');
    } else if (result=='tie'){
        console.log('this is a tie! would you like to upgrade it to a bow?');
    }
    return result;

}

function playGame(num){

    let humanScore = 0;
    let computerScore = 0;
    
    while (num>0) {
        let scoring = playRound(humanScore, computerScore);
        switch (scoring) {
            case 'human':
                humanScore++;
                break;
            case 'computer':
                computerScore++;
                break;
            case 'tie':
                break;
        }
        num--;
    }

    console.log('the score is thus\nhuman: ', humanScore, '; computer: ', computerScore);
    if (humanScore>computerScore){
        console.log('ultimate human victory over the machine! yay');
    } else if (humanScore<computerScore){
        console.log('they won chess, and now rock-paper-scissors??? ubelivable!!');
    } else
        console.log('ye, boring stuff, it\'s a tie, guys. refresh for another round');

}


let numberRound = prompt('give me a number of rounds, buddy');

playGame(numberRound);