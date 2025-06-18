let userScore = 0;
let compScore = 0;
const item = document.querySelectorAll(".items");
const msg = document.querySelector(".msg");
const userScorepara = document.querySelector("#user-choice");
const compScorepara = document.querySelector("#comp-choice");


const getComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
    
}
const drawMatch = () =>{
    // console.log("Game Was Draw");
    msg.innerText = " Game Was Draw ,Play Again";
     msg.style.backgroundColor = "#ffba08";
}
const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You win");
        msg.innerText = " You Win! Your Choice Beats  Computer Choice";
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorepara.innerText =compScore;
        // console.log("You lose");
         msg.innerText = " You lose, Computer Choice Beats Your Choice";
          msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    // console.log("user choice=",userChoice);
    //compChoice
    const compChoice = getComputerChoice();
    // console.log("comp choice=",compChoice);

    // match logic
    if(userChoice === compChoice){
        // Match Was Draw
        drawMatch();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "scissors" ? true : false;
        }else if(userChoice === "paper"){
            //scissors,rock
            userWin = compChoice === "scissors" ? false : true;

        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};




item.forEach((items) =>{
    // console.log(items); {print items}
    items.addEventListener("click",() =>{
        const userChoice = items.getAttribute("id");
        // console.log("box was clicked",userChoice); {this was to show the click action and id}
        playGame(userChoice);

    });
});