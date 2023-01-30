alert('Ready to play ? First press Ctrl+Shift+I on your keyboard to access the console. PRESS OK TO START')

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
    return SCISSOR;
    break;
}
}

function playRound(playerSelection, computerSelection){

    computerSelection = computerSelection.toLowerCase();
    console.log(`Computer selection: ${computerSelection}`);
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player selection: ${playerSelection}`);

    if(playerSelection == computerSelection){
        playerResults.description = "It's a tie!";
        playerResults.state = 0;
    }
    else if(playerSelection === ROCK && computerSelection === PAPER){
        playerResults.description = 'You loose! paper beats rock';
        playerResults.state = 2;
    }
    else if(playerSelection === PAPER && computerSelection === SCISSOR){
        playerResults.description = 'You loose! scissor beats paper';
        playerResults.state = 2;
    }
    else if(playerSelection === SCISSOR && computerSelection === ROCK){
        playerResults.description = 'You loose! rock beats scissor';
        playerResults.state = 2;
    }
    else if(playerSelection === ROCK && computerSelection === SCISSOR){
        playerResults.description = 'You Win!';
        playerResults.state = 1;
    }
    else if(playerSelection === SCISSOR && computerSelection === PAPER){
        playerResults.description = 'You Win!';
        playerResults.state= 1;
    }
    else if(playerSelection === PAPER && computerSelection === ROCK ){
        playerResults.description = 'You Win!';
        playerResults.state = 1;
    }
} 

function checkPlayerInput(playerSelection){
    playerSelection =playerSelection.toLowerCase();
    if(playerSelection === SCISSOR || playerSelection === ROCK || playerSelection === PAPER ){
        return true
    } 
    else{
        return false
    }  
}

function playerSelect(){
    let playerSelection = prompt('Enter your selection Rock, Paper or Scissor: ','Rock');
    playerSelection = playerSelection.replace(/\s+/g, '');
    return playerSelection;
}

function game(){
    let playerCounter = 0;
    let computerCounter = 0;
    console.log('LET THE GAME BEGIN')
    for(let i = 0; i < 5; i++){
        playerSelection =playerSelect();
        if(checkPlayerInput(playerSelection) == false){
            playerSelection = prompt(' Opps invalid input! lets try that again, Enter your selection Rock, Paper or Scissor: ','Rock');
            i = i-1;
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
        console.log(`YOU STILL HAVE ${5 - i - 1} ROUNDS TO GO`)
    }
    console.log(`Final scores: You ${playerCounter} Computer: ${computerCounter}`)
    if(playerCounter>computerCounter){
        console.log('Congratulations YOU WON:)');
    }else if (playerCounter == computerCounter){
        console.log("We are all WINNERS! IT'S A TIE")
    } else if(computerCounter>playerCounter){
        console.log('Sorry YOU LOOSE!')
    }
    console.log('Refresh the page to Restart the game.')
}

game();