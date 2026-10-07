let username = document.getElementById("username");
let email = document.getElementById("email");
let phoneNum = document.getElementById("phonenum");
let password = document.getElementById("password");
let confPW = document.getElementById("confirmpw");
let gender = document.getElementById("gender");
let genderKids = gender.querySelectorAll("input[type='radio']");
let ages = document.getElementById("ages");
let form = document.getElementById("form");
const errors = document.getElementById("errors");

function validateUser(username){
    return /^[a-z]+$/.test(username);
}

function validateEmail(email){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validateNum(number){
    return /^\([0-9]{3}\)[-\s\.][0-9]{3}[-\s\.][0-9]{4,6}$/.test(number);
}


function validatePW(password){
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
}


function validateConfPW(password, confirm){
    if (password === confirm){
        return true;
    }
    return false;
}

function validateGender(genderKids){
    for (let i = 0; i< genderKids.length;i++){
        if (genderKids[i].checked){
            return true;
        }
    }
    return false;
    
}

function validateAges(ages){
    if (ages.value === ""){
        return false
    }
    return true;
}

function showError(type, before, field){
    errors.innerHTML += `<p>${before} <span class="${type}">${field}</span></p>`;
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    errors.innerHTML = "";

    if (username.value.length === 0){
        showError("empty", "Please enter", "Username");
         
    } else if (!validateUser(username.value)){
        showError("invalid", "Please enter a valid", "Username");
    }

    if (email.value.length === 0){
        showError("empty", "Please enter", "Email");


    } else if (!validateEmail(email.value)){
        showError("invalid", "Please enter a valid", "Email");
    }

    if (phoneNum.value.length === 0){
        showError("empty", "Please enter", "Phone Number");
    } else if (!validateNum(phoneNum.value)){
        showError("invalid", "Please enter a valid", "Phone Number");
    }

    if (password.value.length === 0){
        showError("empty", "Please enter", "Password");

    } else if (!validatePW(password.value)){
        showError("invalid", "Please enter a valid", "Password");
    }


    if (validateConfPW(password.value, confPW.value) === false){
        alert("Passwords do not match");
    } 
    
    var genderResults = validateGender(genderKids);
    if (genderResults === false){
        showError("empty", "Please select", "Gender");
    }

    var ageResults = validateAges(ages);
    if (ageResults === false){
        showError("empty", "Please select", "Age");
    }
});

form.addEventListener("reset", function(){
    errors.innerHTML = "";
});
