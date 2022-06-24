function clear() {
    document.querySelector("#first").value="";
    document.querySelector("#second").value="";
}

function sum() {
    let a = parseFloat(document.getElementById("first").value);
    let k = parseFloat(document.getElementById("second").value);
    let c = a + k;
    let resultS = document.getElementById("result").innerText = c;
    return resultS;
}

document.getElementById("plus").onclick = function () {
sum();
clear();
document.getElementById("plus").className += "active";
}
document.getElementById("plus").onmouseleave = function (){
    document.getElementById("plus").classList.remove("active");
}
function difference () {
    let a = parseFloat(document.getElementById("first").value);
    let k = parseFloat(document.getElementById("second").value);
    let c = a - k;
    let resultD = document.getElementById("result").innerText = c;
    return resultD
}

document.getElementById("minus").onclick = function () {
    difference();
    clear();
    document.getElementById("minus").className += "active";}
    document.getElementById("minus").onmouseleave = function (){
        document.getElementById("minus").classList.remove("active");
    }

    function multiply () {
        let a = parseFloat(document.getElementById("first").value);
        let k = parseFloat(document.getElementById("second").value);
        let c = a * k;
        let resultM = document.getElementById("result").innerText = c;
        return resultM
    }
    
    document.getElementById("multiplication").onclick = function () {
        multiply();
        clear();
        document.getElementById("multiplication").className += "active";}
        document.getElementById("multiplication").onmouseleave = function (){
            document.getElementById("multiplication").classList.remove("active");
        }

function quotient () {
    let a = parseFloat(document.getElementById("first").value);
    let k = parseFloat(document.getElementById("second").value);
    if (k===0) {
        alert('На ноль делить нельзя');
    };
    let c = a / k;
    let resultQ = document.getElementById("result").innerText = c;
    return resultQ
}

document.getElementById("division").onclick = function () {
    quotient();
    clear();
    document.getElementById("division").className += "active";}

    document.getElementById("division").onmouseleave = function (){
        document.getElementById("division").classList.remove("active");
    }


