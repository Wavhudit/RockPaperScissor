const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSOR = 'Scissor';


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
       return 'Its a tie!'
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You loose! paper beats rock'
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        return 'You loose! scissor beats paper'
    }
    else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        return 'You loose! rock beats scissor'
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        return 'You Win!'
    }
    else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        return 'You Win!'
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win!'
    }else{
        return "UNDEFINED INPUT!"
    }


} 

const playerSelection ='Rock';
const computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));