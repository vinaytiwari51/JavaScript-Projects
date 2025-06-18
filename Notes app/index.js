const notesSec = document.querySelector('.note-section');
const btn = document.querySelector('.btn');
let notes = document.querySelectorAll('.notes-text');

function showStorage(){
    notesSec.innerHTML = localStorage.getItem('notes');
}
showStorage();
function storage(){
    localStorage.setItem('notes',notesSec.innerHTML);  
}
// console.log(storage());


function handleClick(){
    let para = document.createElement('p');
    let img = document.createElement('img');
    para.classList = 'notes-text';
    img.src = "https://cdn.hugeicons.com/icons/delete-01-solid-rounded.svg";
    para.setAttribute("contenteditable",'true');
    notesSec.appendChild(para).appendChild(img);
}
btn.addEventListener('click',handleClick);
notesSec.addEventListener('click', (eve) =>{
    if(eve.target.tagName === 'IMG'){

        // console.log(eve.target.tagName);
        
        eve.target.parentElement.remove();
        storage();
    } else if (eve.target.tagName === 'P'){
        notes = document.querySelectorAll('.notes-text'); 
        notes.forEach(note =>{
            note.onkeyup = function () {
                storage();
            }
        } )
    }
});

document.addEventListener('keydown',eve =>{
    if(eve.key === "Enter"){
        document.execCommand('insertLineBreak');
        eve.preventDefault();
    }
})
