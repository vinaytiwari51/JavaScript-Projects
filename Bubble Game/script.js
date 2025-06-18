const lower = document.querySelector(".lower-section");
const timerBox = document.querySelector("#timer-box");
const hitBox = document.getElementById("hit-box");
const scoreBox = document.getElementById("score-box");
let bubbles = 0;
for (let i = 0; i < 140; i++) {
    let num = Math.floor(Math.random()*10);
    // console.log(num);
    let div = document.createElement('div');
    div.classList = 'bubble'
    div.textContent = `${num}`
    lower.appendChild(div); 
}

function timer() {
    let time = 60;
    let interval = setInterval(() =>{
       

        if (time > 0) {
            time--;
            timerBox.innerText = time;
        }else{
            clearInterval(interval);
            lower.innerHTML = "";
            gameOver();
            restartGame();
            
        }
        
    },1000)
}
let numHit = 0;
function hitIncrement() {
    numHit = Math.floor(Math.random()*10);
    hitBox.textContent = numHit;
    // console.log(typeof(numHit));
    
}

function scoreIncrement() {
    let score = 0;
    lower.addEventListener("click", (eve)=>{
        let val = Number(eve.target.textContent);
        //  console.log(typeof(val),val,numHit);

         if (val === numHit) {
            // console.log("Hello");
            score += 10;
            scoreBox.innerText = score;
            hitIncrement();
            
         } else {
            console.log("Your Selection is not Matched");
         }
    })

    
}

function gameOver() {
    let div = document.createElement("div");
    div.classList = "game-over"
    div.innerText = "Game Over"
    lower.appendChild(div);

}

// function restartGame() {
//     let btn = document.createElement("button");
//     btn.id = "btn"
//     btn.innerText = "Restart Game"
//     lower.appendChild(btn);
//     btn.addEventListener("click", (eve) =>{
//         timer();
//         hitIncrement();
//         scoreIncrement();
//         console.log(eve);
        
//     })
// }

timer();
hitIncrement();
scoreIncrement();
