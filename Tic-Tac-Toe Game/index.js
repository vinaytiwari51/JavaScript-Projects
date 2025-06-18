let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector(".newgm");
let resetgame = document.getElementById("resetbtn");
let restartgame = document.getElementById("newgame");
let msg = document.getElementById("win");
// players
turn0 = true;
let count = 0;


const winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
let resetGame = () =>{
    true0 = true;
    enableboxes();
    newgame.classList.add("hide");
}


   
   boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       
      if(turn0){
        box.innerText = "O";
        box.style.color = ""
      

        turn0 = false;
      } else {
        box.innerText = "X";
      
        turn0 = true;

      }
      checkWinner();
      box.disabled = true;
      count++;
      let winninggame = checkWinner();
      if(count === 8 && ! winninggame){
        matchdraw();
      }
      
      
    });
   });
   const matchdraw = () =>{
    msg.innerText = "Game was a Draw Between the Players";
    newgame.classList.remove("hide");
    disableboxes();
   }
    const disableboxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
       
    };
    const enableboxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
       
    };
  


  const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    newgame.classList.remove("hide");
    disableboxes();
  };
const checkWinner = () => {
    for(let pattern of winningpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }

    }
};
restartgame.addEventListener("click",resetGame);
resetgame.addEventListener("click",resetGame);