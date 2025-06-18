const questions = [
    {
        question: "Which is my Favourite color?",
        answers: [
            {
                text:'Red' , correctAnswer:true },
            {
                text:'Black' , correctAnswer:false},
            {
                text:'Pink' , correctAnswer:false},
            {
                text:'Blue' , correctAnswer:false}
        ]
    },
    {
        question: "Which is my Favourite car?",
        answers: [
            {
                text:'Scorpio' , correctAnswer:false },
            {
                text:'Thar' , correctAnswer:false},
            {
                text:'Fortuner' , correctAnswer:true},
            {
                text:'Mercides' , correctAnswer:false}
        ]
    },
    {
        question: "Which is the Cleanist city?",
        answers: [
            {
                text:'Indore' , correctAnswer:true },
            {
                text:'Jabalpur' , correctAnswer:false},
            {
                text:'Bhopal' , correctAnswer:false},
            {
                text:'Delhi' , correctAnswer:false}
        ]
    },
    {
        question: "Which is your Favourite Game?",
        answers: [
            {
                text:'Hockey' , correctAnswer:false},
            {
                text:'Cricket' , correctAnswer:true},
            {
                text:'Chess' , correctAnswer:false},
            {
                text:'Football' , correctAnswer:false}
        ]
    }
];
const answerBtn = document.querySelector('#buttons'); 
const nextBtn = document.querySelector('#next-btn'); 
const questionElement = document.querySelector('#question'); 

let score = 0;
let questionIndex = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}
function  showQuestion() {
    resetItems();
    let currentQuestion = questions[questionIndex]
    let questionNo = questionIndex + 1;
      questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    //   console.log(questionNo);
      

    currentQuestion.answers.forEach((answer) =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correctAnswer){
            let ans = button.dataset.correctAnswer = answer.correctAnswer;
            // console.log(ans);
            
        }
        answerBtn.addEventListener('click', selectAnswer);
    })
}
function resetItems() {
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(eve){
    const btn = eve.target;
    // console.log(btn);
    const isCorrect = btn.dataset.correctAnswer === 'true';
    // console.log(isCorrect);
    
    if(isCorrect){
        btn.classList.add('correct');
        score++;
    } else{
        btn.classList.add('inCorrect');
    }
    Array.from(answerBtn.children).forEach((button) =>{
        if(button.dataset.correctAnswer=== 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
        nextBtn.style.display = 'block';
    });
    
}
function showScore(){
    resetItems()
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}`;
    nextBtn.innerHTML = 'Restart';
    nextBtn.style.display = 'block';
}
function handleNxtBtn(){
    questionIndex++;
    if(questionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener('click', () =>{
    if(questionIndex<questions.length){
        handleNxtBtn();
    }else{
        startQuiz()
    }
});
startQuiz();


