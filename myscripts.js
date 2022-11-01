let winCount = 0;

function computerPlay() {
    const options = ["rock", "paper", "scissors"];

    let pick = Math.floor(Math.random()*3);  
    return options[pick];  
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let result;
    
    if(player === computerSelection){
        result = "it's tie"
    }
    else if(player === "rock"){
        if(computerSelection === "paper"){
            result =  "You Lose! Paper beats Rock"
        }
        else{
            result = "you win! Rock beats scissors";
            winCount++;
        }
        console.log(result);
    }
    else if(player === "paper"){
        if(computerSelection === "scissors"){
            result =  "You Lose! Scissors beats paper"
        }
        else{
            result = "you win! paper beats rock";
            winCount++;
        }
        console.log(result)
    }
     else if(player === "scissors"){
        if(computerSelection === "rock"){
            result =  "You Lose! Rock beats scissors"
        }
        else{
            result = "you win! scissors beats paper";
            winCount++
        }
        console.log(result)
    }


    return result;
}


function game(){
    for (let i = 0; i < 5; i++){ 
        const computerSelection = computerPlay();    
        let playerSelection = prompt("enter choice");
        
        if (playerSelection == "" || null) {      
            playerSelection = prompt("Invalid entry. Enter choice");
        }

        playRound(playerSelection, computerSelection);
        
    }
    
    if(winCount >= 3){
        console.log("You win game")
    }
    else{
        console.log("You lose game")
    }
}

game();