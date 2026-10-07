let username = document.getElementById("id");
let email = document.getElementById("email");
let phoneNum = document.getElementById("phonenum");
let password = document.getElementById("password");
let confPW = document.getElementById("confirmpw");

let form = document.getElementById("form");
const reset = document.getElementById("clear")

function validateUser(username){
    return username.test("[a-z]+");
}

function validateEmail(email){
    return email.test("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
}

function validateNum(number){
    return number.test("/^[(][0-9]{3}[)][-\s\.][0-9]{3}[-\s\.][0-9]{4,6}$");
}


function validatePW(password){
    return password.test("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");

}

function validateConfPW(password, confirm){
    if (password === confirm){
        alert("Passwords do not match");
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (!validateUser(username.value)){
        document.write("<style>span{color:orange;}</style>");
        document.write("Please enter <span>a valid username </span>");
         
    } else if (username.value.length === 0){
        document.write("<style>span{color:red;}</style>");
        document.write("Please enter <span> Username </span>");
    }

    if (!validateEmail(email.value)){
        document.write("<style>span{color:orange;}</style>");
        document.write("Please enter <span>a valid email </span>");
    } else if (email.value.length === 0){
        document.write("<style>span{color:red;}</style>");
        document.write("Please enter <span> Email </span>");
    }

    if (!validateNum(phoneNum.value)){
        document.write("<style>span{color:orange;}</style>");
        document.write("Please enter <span>a valid phone number </span>");
    } else if (phoneNum.value.length === 0){
        document.write("<style>span{color:red;}</style>");
        document.write("Please enter <span> Phone Number </span>");
    }

    if (!validatePW(password.value)){
        document.write("<style>span{color:orange;}</style>");
        document.write("Please enter <span>a valid password </span>");
    } else if (password.value.length === 0){
        document.write("<style>span{color:red;}</style>");
        document.write("Please enter <span> Password </span>");
    }

    validateConfPW(password.value, confPW.value);   

    
form.addEventListener("reset", function(event){
   form.reset()
})