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
    console.log('player: ', p_choice);
    console.log('computer: ', c_choice);
}

function getHumanChoice() {
    console.log("not yeehaw");
    let player_choice = prompt('game on: rock, paper or scissors?');
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



getComputerChoice(getHumanChoice())