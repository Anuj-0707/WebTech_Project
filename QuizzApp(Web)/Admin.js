function validateAdmin(){
    let username = document.getElementById("admin_user").value;
    let password = document.getElementById("password").value;
    if(username=="0241ITE309" && password=="0241ite309"){
        alert("Admin login successfull ✅");
        window.location.href="adminpanel.html";
    }
    else if(username=="" && password==""){
        alert("Enter ➤ Username and Password");
    }
    else if(username==""){
        alert("Enter ➤ Username");
    }
    else if(password==""){
        alert("Enter ➤ Password");
    }
    else{
        document.getElementById("error-msg").innerText =
        "Invalid Admin Credentials ❌";
    }
}