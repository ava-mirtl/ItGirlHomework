let c;
class Calc {
    static Sum (a, b){
        c = a+b
        return c;
    }
    static Minus (a,b){
        c= a-b
        return c;
    }
    static Quotient (a, b){
        if (b===0) {alert('На ноль делить нельзя')}
        c= a/b
        return c;
    }
    static Multiplication (a,b){
        c= a*b
        return c;
    }
}

function clear() {
    document.querySelector("#first").value="";
    document.querySelector("#second").value="";
} 


document.getElementById("plus").onclick = function () {
let a = parseFloat(document.getElementById("first").value);
let b = parseFloat(document.getElementById("second").value);
let plus = document.getElementById("plus");
    Calc.Sum(a, b);
document.getElementById("result").innerText = c;
clear();
plus.className += "active";
plus.onmouseleave = function (){
    plus.classList.remove("active");
}}

document.getElementById("minus").onclick = function () {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let minus = document.getElementById("minus");
        Calc.Minus(a, b);
        document.getElementById("result").innerText = c;
        clear();
        minus.className += "active";
        minus.onmouseleave = function (){
            minus.classList.remove("active");
}}

document.getElementById("multiplication").onclick = function () {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let mult = document.getElementById("multiplication");
        Calc.Multiplication(a, b);
        document.getElementById("result").innerText = c;
        clear();
        mult.className += "active";
        mult.onmouseleave = function (){
            mult.classList.remove("active");
}}

document.getElementById("division").onclick = function () {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let division = document.getElementById("division");
        Calc.Quotient(a, b);
        document.getElementById("result").innerText = c;
        clear();
        division.className += "active";
        division.onmouseleave = function (){
        division.classList.remove("active");
}}
