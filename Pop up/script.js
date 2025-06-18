const btn = document.querySelector(".btn");
const okBtn = document.querySelector(".ok-btn");
const popup = document.querySelector(".popup");

btn.addEventListener("click", () =>{
popup.classList.add("pop-show")
})

okBtn.addEventListener("click", () =>{
popup.classList.remove("pop-show")
})

