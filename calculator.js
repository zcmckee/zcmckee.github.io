

function add(num1, num2){
    let sum = num1 + num2;
    return sum
}

function sub(num1, num2){
    let sum = num1 - num2;
    return sum
}

function mult(num1, num2){
    let sum = num1 * num2;
    return sum;
}

function div(num1, num2){
    let sum = num1 / num2;
    return sum;

}

function mod(num1, num2){
    let remainder = num1 % num2;
    return remainder;
}

function showAlert(){
    let text = "Do you want to continue? (Yes/No)"
    alert(text);
}


document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var op = document.getElementById("op")

    var result = document.getElementById("result")
    var badOp = document.getElementById("badOp");
    var numx = Number(x.value);
    var numy = Number(y.value);

    if (op.value == "+"){
        result.innerHTML = add(numx, numy);
    } else if (op.value == "-"){
        result.innerHTML = sub(numx, numy);
    } else if (op.value == "*"){
        result.innerHTML = mult(numx, numy);
    } else if (op.value == "/"){
        result.innerHTML = div(numx, numy);
    } else if (op.value == "%"){
        result.innerHTML = mod(numx, numy);
    } else {
        console.log("Please enter an allowed operator (+, -, *, /, %");
    };

});
