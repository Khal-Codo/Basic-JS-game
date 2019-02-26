let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')
const lizard_div = document.getElementById('l')
const spock_div = document.getElementById('v')

function getComputerChoice() {
    const choices = ['r','p','s','l','v'];
    const randomNumber = (Math.floor(Math.random()*5));
    return choices[randomNumber];
}




function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "lizard";
    if (letter === "v") return "Spock";

}

function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>  userChoice_div.classList.remove('green-glow') , 500);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 500);
}


function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() =>  userChoice_div.classList.remove('gray-glow') , 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        case "lv":
        case "lp":
        case "rl":
        case "sl":
        case "vs":
        case "vr":
        case "pv":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        case "lr":
        case "ls":
        case "vl":
        case "vp":
        case "sv":
        case "pl":
        case "rv":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "vv":
        draw(userChoice, computerChoice);
        break;


    }
}



function main (){
    rock_div.addEventListener('click', () => game ('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissors_div.addEventListener('click', () => game('s'));

    lizard_div.addEventListener('click', () => game('l'));

    spock_div.addEventListener('click', () => game('v'));



}

main();