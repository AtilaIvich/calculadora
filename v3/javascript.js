const res = document.getElementById('result');

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n0 = document.getElementById('n0');

const ac = document.getElementById('AC');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');

n1.addEventListener('click', () => click(1));
n2.addEventListener('click', () => click(2));
n3.addEventListener('click', () => click(3));
n4.addEventListener('click', () => click(4));
n5.addEventListener('click', () => click(5));
n6.addEventListener('click', () => click(6));
n7.addEventListener('click', () => click(7));
n8.addEventListener('click', () => click(8));
n9.addEventListener('click', () => click(9));
n0.addEventListener('click', () => click(0));

ac.addEventListener('click', reset);
plus.addEventListener('click', fPlus);
minus.addEventListener('click', fMinus);
multiply.addEventListener('click', fMultiply);
divide.addEventListener('click', fDivide);
equal.addEventListener('click', fEqual);

var key;
var numArray = [];
var a;
var b;

function click(n) {
    res.innerHTML += String(n);
}

function reset() {
    res.innerText = '';
    numArray = [];
    a = 'a';
    b = 'a';
    key = 'a';
}

function fPlus() {
    key = 1;

    if (isNaN(numArray[0])) {
        numArray[0] = Number(res.innerText);
        res.innerText = '';
    } else {
        numArray[0] += Number(res.innerText);
        res.innerText = '';
    }
}

function fMinus() {
    key = 2;

    if (isNaN(numArray[0])) {
        numArray[0] = Number(res.innerText);
        res.innerText = '';
    } else {
        numArray[0] -= Number(res.innerText);
        res.innerText = '';
    }
}

function fMultiply() {
    key = 3;

    if (isNaN(numArray[0])) {
        numArray[0] = Number(res.innerText);
        res.innerText = '';
    } else {
        numArray[0] *= Number(res.innerText);
        res.innerText = '';
    }
}

function fDivide() {
    key = 4;

    if (isNaN(numArray[0])) {
        numArray[0] = Number(res.innerText);
        res.innerText = '';
    } else {
        numArray[0] /= Number(res.innerText);
        res.innerText = '';
    }
}

function fEqual() {
    b = Number(res.innerText);

    if (key == 1) {
        if (Number.isInteger(numArray[0] + b)) {
            res.innerText = numArray[0] + b;
            numArray[0] = 'a';
        } else {
            res.innerText = (numArray[0] + b).toFixed(8);
            numArray[0] = 'a';
        }
    }

    if (key == 2) {
        if (Number.isInteger(numArray[0] - b)) {
            res.innerText = numArray[0] - b;
            numArray[0] = 'a';
        } else {
            res.innerText = (numArray[0] - b).toFixed(8);
            numArray[0] = 'a';
        }
    }

    if (key == 3) {
        if (Number.isInteger(numArray[0] * b)) {
            res.innerText = numArray[0] * b;
            numArray[0] = 'a';
        } else {
            res.innerText = (numArray[0] * b).toFixed(8);
            numArray[0] = 'a';
        }
    }

    if (key == 4) {
        if (Number.isInteger(numArray[0] / b)) {
            res.innerText = numArray[0] / b;
            numArray[0] = 'a';
        } else {
            res.innerText = (numArray[0] / b).toFixed(8);
            numArray[0] = 'a';
        }
    }
}