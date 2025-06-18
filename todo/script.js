const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

 const listContainer = document.querySelector(".list-container");

const btn = document.querySelector(".btn");

function AddTask(){
    if(inputBox.value === ""){
        alert("you must write something!");
       console.log(inputBox.value);
       
        

    }
    else{
        let li =document.createElement("li");
        // console.log(inputBox.value);
        
        li.innerHTML = inputBox.value;
        // console.log(li);
        
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
}
btn.addEventListener("click", () =>{
    
    
    AddTask();

})