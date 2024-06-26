//Start coding here


function generateComputerChoice() 
{
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function chooseOption(choices){
    let userChoice = choices;
    document.getElementById("userChoice").value = userChoice;
    displayChoice();
    determineWinner();

}

function displayChoice(){
    let userChoice = document.getElementById("userChoice").value;
    let computerChoice = generateComputerChoice();

    if (userChoice === "rock") {
        document.getElementById("userImage").src = "rock.png";
    }
    else if (userChoice === "paper") {
        document.getElementById("userImage").src = "paper.png";
    }
    else {
        document.getElementById("userImage").src = "scissors.png";
    }

    if( computerChoice === "rock") {
        document.getElementById("computerImage").src = "rock.png";
    }
    else if (computerChoice === "paper") {
        document.getElementById("computerImage").src = "paper.png";
    }
    else {
        document.getElementById("computerImage").src = "scissors.png";
    }
}

function determineWinner() {
    let userChoice = document.getElementById("userChoice").value;
    let computerChoice = generateComputerChoice();
    let score = document.getElementById("score").value;

    if (userChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie!";
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("result").innerHTML = "You win!";
        score++;
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        document.getElementById("result").innerHTML = "You win!";
        score++;
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("result").innerHTML = "You win!";
        score++;
    }
    else {
        document.getElementById("result").innerHTML = "You lose!";
    }
}