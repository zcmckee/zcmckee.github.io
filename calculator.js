

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

var min;
var max;
var avg;
var total = 0;
var totalNums = 0;
let validResults = [];

document.write(`
    <style>

    }
    table {
        width: 60%;
        margin: 20px 0;
        font-family: Arial, sans-serif;
        justify-content: center;
        border: 1px solid #4CAF50;
    }
    th, td {
        border: 1px solid #333;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #4CAF50;
        color: white;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    </style>`);


document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>")
while (true){

    let x = prompt("Enter a number: ");
    if (x === null) break

    let op = prompt("Enter an operator: ")
    if (op === null) break 

    let y = prompt("Enter another number: ")
    if (y === null) break

    var numx = Number(x);
    var numy = Number(y);
    let result;

    if (isNaN(numx) ||  isNaN(numy)){
        result =  "Error not a number";
    } else if (op === "+"){
        result = add(numx, numy);
    } else if (op === "-"){
        result = sub(numx, numy);
    } else if (op === "*"){
        result = mult(numx, numy);
    } else if (op === "/"){
        result = div(numx, numy);
    } else if (op === "%"){
        result = mod(numx, numy);
    } else {
        result = "Error: invalid operator";
    }

    if (Number.isFinite(result)){
        validResults.push(result)
        totalNums = totalNums + 2;
        total = total + result;

    } 
    
    
    document.write("tr><td>" + numx + "</td><td>" + op + "</td><td>" + numy + "</td><td>"+ result + "</td></tr>");
}

document.write("</table>")
document.write("<br>");

min = Math.min(...validResults);
max = Math.max(...validResults);
avg = total / validResults.length;

document.write("<table>")
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>")
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");

document.write("<br><button><a href=index.html>Home</a></button>")

