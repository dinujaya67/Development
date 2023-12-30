// Number 0 Button
function fn0() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 0;
}
// Number 1 Button
function fn1() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 1;
}
// Number 2 Button
function fn2() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 2;
}
// Number 3 Button
function fn3() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 3;
}
// Number 4 Button
function fn4() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 4;
}
// Number 5 Button
function fn5() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 5;
}
// Number 6 Button
function fn6() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 6;
}
// Number 7 Button
function fn7() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 7;
}
// Number 8 Button
function fn8() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 8;
}
// Number 9 Button
function fn9() {
   let previous = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = previous + 9;
}
// Eraser Button
function feraser() {
   let previous = document.getElementById('display').innerHTML;
   let erasedPre = previous.slice(0, -1);
   document.getElementById('display').innerHTML = erasedPre;
}

let op;
let FirstSave;
let secondSave;

// AD Button
function fnAD() {
   FirstSave = document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML = 0;
   op = 1;
}
// MN Button
function fnMN() {
    FirstSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = 2;
}
// ML Button
function fnML() {
    FirstSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = 3;
}
// DV Button
function fnDV() {
    FirstSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = 4;
}

// EQ Button
function fnEQ() {
    secondSave = document.getElementById('display').innerHTML;
    if (op == 1) {
        document.getElementById('display').innerHTML = parseInt(FirstSave) + parseInt(secondSave);
    } else if (op == 2) {
        document.getElementById('display').innerHTML = parseInt(FirstSave) - parseInt(secondSave);
    } else if (op == 3) {
        document.getElementById('display').innerHTML = parseInt(FirstSave) * parseInt(secondSave);
    } else if (op == 4) {
        document.getElementById('display').innerHTML = parseInt(FirstSave) / parseInt(secondSave);
    } else {
        document.getElementById('display').innerHTML = "INVALID";
    }
}

// AC Button
function fAC() {
    document.getElementById('display').innerHTML = 0;
    op = 0;
    FirstSave = 0;
    secondSave = 0;
}
