const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSOR = 'Scissor';

let ComputerPlay = function(){
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

console.log(`${ComputerPlay()}`)