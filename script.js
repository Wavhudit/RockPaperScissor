alert('Play a game with me : right click >inspect >console. Press OK to start')

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSOR = 'scissor';

const playerResults = {
    description : 'Intial state',
    state :  0,
};


let computerPlay = function(){
switch(Math.floor(Math.random() * 4)){
    case 0:
        return ROCK;
        break;
    case 1:
        return PAPER;
        break;
    case 2:
        return SCISSOR;
        break;
    default :
    return PAPER;
    break;
}
}

function playRound(playerSelection, computerSelection){

    computerSelection = computerSelection.toLowerCase();
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

    if(playerSelection == computerSelection){
        playerResults.description = 'Its a tie!';
        playerResults.state = 0;
        return playerResults.state;
    }
    else if(playerSelection === ROCK && computerSelection === PAPER){
        playerResults.description = 'You loose! paper beats rock';
        playerResults.state = 2;
        return playerResults.state;
    }
    else if(playerSelection === PAPER && computerSelection === SCISSOR){
        playerResults.description = 'You loose! scissor beats paper';
        playerResults.state = 2;
        return playerResults.state;
    }
    else if(playerSelection === SCISSOR && computerSelection === ROCK){
        playerResults.description = 'You loose! rock beats scissor';
        playerResults.state = 2;
        return playerResults.state;
    }
    else if(playerSelection === ROCK && computerSelection === SCISSOR){
        playerResults.description = 'You Win!';
        playerResults.state = 1;
        return playerResults.state;
    }
    else if(playerSelection === SCISSOR && computerSelection === PAPER){
        playerResults.description = 'You Win!';
        playerResults.state= 1;
        return playerResults.state;
    }
    else if(playerSelection === PAPER && computerSelection === ROCK ){
        playerResults.description = 'You Win!';
        playerResults.state = 1;
        return playerResults.state;
    }
} 

const playerSelection ='Rock';
const computerSelection = computerPlay();
console.log(computerSelection)
playRound(playerSelection, computerSelection)
console.log(playerResults.description);

function checkPlayerInput(playerSelection){

    playerSelection =playerSelection.toLowerCase();

    if(playerSelection === SCISSOR || playerSelection === ROCK || playerSelection === SCISSOR ){
        return true
    } 
    else{
        return false
    }
     
}

function game(){
    let playerCounter = 0;
    let computerCounter = 0;
    console.log('LET THE GAME BEGIN')
    for(let i = 0; i < 5; i++){

        let playerSelection = prompt('Enter your selection Rock, Paper or Scissor: ','Rock');
        if(checkPlayerInput(playerSelection) == false){
            playerSelection = prompt(' Opps invalid input! lets try that again, Enter your selection Rock, Paper or Scissor: ','Rock');
            // i = i-1;
        } 
        
        if(checkPlayerInput(playerSelection) == true){
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            switch(playerResults.state){
                case 0:
                    playerCounter++;
                    computerCounter++;
                    console.log(playerResults.description)
                    break;
                case 1:
                    playerCounter++;
                    console.log(playerResults.description)
                    break;
                case 2:
                    computerCounter++;
                    console.log(playerResults.description)
                    break;
            }
        }

    }

    if(playerCounter>computerCounter){
        console.log('Congratulations YOU WON:)');
    }else if (playerCounter == computerCounter){
        console.log('We are all winners ! ITS A TIE')
    } else if(computerCounter>playerCounter){
        console.log('Sorry YOU LOOSE!')
    }
}

game();