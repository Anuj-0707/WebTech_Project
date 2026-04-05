/* PANEL SWITCHING */

function showRegister(){
document.getElementById("container").classList.add("register-mode");
}

function showLogin(){
document.getElementById("container").classList.remove("register-mode");
}


/* LOGIN VALIDATION */

function validateLogic(){

// selecting login inputs without changing HTML
let loginInputs =
document.querySelectorAll(".login-right input");

let username = loginInputs[0].value.trim();
let password = loginInputs[1].value.trim();

let storedUser =
localStorage.getItem("email");

let storedPass =
localStorage.getItem("password");

if(username === storedUser && password === storedPass){

alert("Login Successful ✅");
window.location.href = "quiz.html";

}
else{

alert("Invalid User ❌");

}

}
function goToHome(){
    window.location.href="home.html";
}

/* REGISTRATION VALIDATION */

function reg_validation(){

// selecting register inputs without changing HTML
let regInputs =
document.querySelectorAll(".register-left input");

let f_name = regInputs[0].value;
let mobile_num = regInputs[1].value;
let email = regInputs[2].value;
let pass1 = regInputs[3].value;

// validation

if(f_name==""){
alert("First name required");
return false;
}

if(email==""){
alert("Email required");
return false;
}

if(mobile_num.length!=10){
alert("Invalid mobile number");
return false;
}

if(pass1.length<8){
alert("Password must be 8+ characters");
return false;
}


// SAVE DATA

localStorage.setItem("firstName",f_name);
localStorage.setItem("email",email);
localStorage.setItem("mobile",mobile_num);
localStorage.setItem("password",pass1);

alert("Registration Successful ✅");

// return to login panel after register
showLogin();

return true;
}