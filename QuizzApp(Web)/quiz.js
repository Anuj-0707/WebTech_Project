// LOAD QUESTIONS FROM ADMIN PANEL

let questions = JSON.parse(localStorage.getItem("quizQuestions")) || [];


// LOAD TIMER FROM ADMIN PANEL OR DEFAULT (10 minutes)

let timerMinutes = localStorage.getItem("quizTimer") || 10;

let time = timerMinutes * 60;

let timerDisplay = document.getElementById("timer");

let timerInterval;


// TIMER FUNCTION

function startTimer(){

timerInterval = setInterval(()=>{

let minutes = Math.floor(time/60);

let seconds = time % 60;

timerDisplay.innerText =
"Time: " + minutes + ":" + (seconds<10?"0":"") + seconds;

time--;

if(time < 0){

clearInterval(timerInterval);

submitQuiz();

}

},1000);

}

startTimer();


// DISPLAY QUESTIONS

let container = document.getElementById("questionContainer");

questions.forEach((q,index)=>{

let div = document.createElement("div");

div.classList.add("question");

div.innerHTML =

`<p>${index+1}. ${q.question}</p>

<label><input type="radio" name="q${index}" value="1"> ${q.options[0]}</label><br>

<label><input type="radio" name="q${index}" value="2"> ${q.options[1]}</label><br>

<label><input type="radio" name="q${index}" value="3"> ${q.options[2]}</label><br>

<label><input type="radio" name="q${index}" value="4"> ${q.options[3]}</label><br>`;

container.appendChild(div);

});


// SUBMIT QUIZ FUNCTION

function submitQuiz(){

clearInterval(timerInterval);

let score = 0;

questions.forEach((q,index)=>{

let selected = document.querySelector(
`input[name="q${index}"]:checked`
);

if(selected && selected.value === q.correct){
score++;
}

});

let totalQuestions = questions.length;

let wrongAnswers = totalQuestions - score;

let passingMarks = Math.ceil(totalQuestions * 0.4);

let resultStatus = score >= passingMarks ? "PASS ✅" : "FAIL ❌";

document.getElementById("quizForm").style.display="none";

document.getElementById("timer").innerText = "Quiz Submitted ✅";

document.getElementById("resultBox").innerHTML =

`
<h2>Quiz Result</h2>

<p>Total Questions: ${totalQuestions}</p>

<p>Correct Answers: ${score}</p>

<p>Wrong Answers: ${wrongAnswers}</p>

<p>Passing Marks: ${passingMarks}</p>

<h3>Status: ${resultStatus}</h3>
`;

}