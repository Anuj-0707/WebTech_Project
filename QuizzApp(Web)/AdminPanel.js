

/* default quest */

const defaultQuestions = [

{question:"HTML stands for?", options:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Mark Language","None"], correct:"1"},

{question:"CSS is used for?", options:["Structure","Styling","Programming","Database"], correct:"2"},

{question:"JavaScript is?", options:["Styling language","Programming language","Database","Server"], correct:"2"},

{question:"Which tag for paragraph?",options:["&lt;p&gt;","&lt;h1&gt;","&lt;div&gt;","&lt;span&gt;"],correct:"1"},

{question:"Which symbol used for ID selector?", options:["#",".","*","@"], correct:"1"},

{question:"Which keyword declares variable?", options:["int","var","string","define"], correct:"2"},

{question:"Which HTML tag for image?",options:["&lt;img&gt;","&lt;pic&gt;","&lt;image&gt;","&lt;src&gt;"],correct:"1"},

{question:"CSS stands for?", options:["Creative Style Sheets","Cascading Style Sheets","Color Style Sheets","Computer Style Sheets"], correct:"2"},

{question:"Which property changes text color?", options:["font-style","color","background","text-align"], correct:"2"},

{question:"Which event runs on button click?", options:["onhover","onchange","onclick","onmouse"], correct:"3"}

];



/*Load quest*/

let questions = JSON.parse(localStorage.getItem("quizQuestions"));

if(!questions || questions.length === 0){

questions = [...defaultQuestions];

localStorage.setItem("quizQuestions", JSON.stringify(questions));

}




window.onload = displayQuestions;



/*timer function*/

function setTimer(){

let time = document.getElementById("timerInput").value;

if(time <= 0){

alert("Please enter valid time");

return;

}

localStorage.setItem("quizTimer", time);

document.getElementById("timerStatus").innerText =
"Timer set to " + time + " minutes ✅";

}



/*Add quest*/

function addQuestion(){

let question = document.getElementById("question").value.trim();

let opt1 = document.getElementById("opt1").value.trim();

let opt2 = document.getElementById("opt2").value.trim();

let opt3 = document.getElementById("opt3").value.trim();

let opt4 = document.getElementById("opt4").value.trim();

let correct = document.getElementById("correct").value.trim();



/*validate the option*/

if(question === "" || opt1 === "" || opt2 === "" || opt3 === "" || opt4 === ""){

alert("Please fill all fields");

return;

}

if(correct < 1 || correct > 4){

alert("Correct answer must be between 1 and 4");

return;

}



/*quest obj*/

let newQuestion = {

question: question,

options: [opt1,opt2,opt3,opt4],

correct: correct

};



/*save quest*/

questions.push(newQuestion);

localStorage.setItem("quizQuestions", JSON.stringify(questions));



/*refresh the list*/

displayQuestions();



/*clear input*/

clearInputs();

}



/*quest with delete button*/

function displayQuestions(){

let list = document.getElementById("questionList");

list.innerHTML = "";

questions.forEach((q,index)=>{

let li = document.createElement("li");

li.innerHTML = `

<span>${index+1}. ${q.question}</span>

<button class="delete-btn"
onclick="deleteQuestion(${index})">Delete</button>

`;

list.appendChild(li);

});

}



/*func to delete the quest*/

function deleteQuestion(index){

let confirmDelete = confirm("Are you sure you want to delete this question?");

if(!confirmDelete) return;

questions.splice(index,1);

localStorage.setItem("quizQuestions", JSON.stringify(questions));

displayQuestions();

}



/*clear input field*/

function clearInputs(){

document.getElementById("question").value="";

document.getElementById("opt1").value="";

document.getElementById("opt2").value="";

document.getElementById("opt3").value="";

document.getElementById("opt4").value="";

document.getElementById("correct").value="";

}



/*reset to default quest*/

function resetQuestions(){

localStorage.removeItem("quizQuestions");

questions = [...defaultQuestions];

localStorage.setItem("quizQuestions", JSON.stringify(questions));

displayQuestions();

alert("Questions reset successfully ✅");

}