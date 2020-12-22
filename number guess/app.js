var total1;
var total2;
function add1() {
    let num1 = parseInt(document.getElementById('num1').value)
    let length = parseInt(document.getElementById('num1').value.length)
    if (length > 4 || length < 4) {
        alert("Allow only 4 digits")
    }
    else{
    document.getElementById('u1').innerHTML = num1;
    var calNum1 = 9999 - num1;
    document.getElementById('c1').innerHTML = calNum1;
    total1 = calNum1 + num1; 
}
}
function add2() {
    var num2 = parseInt(document.getElementById('num2').value)
    let len = parseInt(document.getElementById('num2').value.length)
    if (len > 4 || len < 4) {
        alert("Allow only 4 digits")
    }
    else{
    document.getElementById('u2').innerHTML = num2;
    var calNum2 = 9999 - num2;
    document.getElementById('c2').innerHTML = calNum2;
    total2 = calNum2 + num2; 
}
}
function calculate(){
    var total = parseInt(total1) + parseInt(total2)
    console.log(total)
    document.getElementById('res').innerHTML = total;
}
