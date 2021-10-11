"use strict";
//generique
function identity(arg) {
    return arg;
}
const argfunc = identity(56);
///////////////////////////////////////
const a = "firstname";
const n = 3;
const b = true;
const d = null;
const arr = ['a', 'b', 'c'];
const user = { firstname: "john", lastname: "doe" };
const date = 'string';
// const date = new Date()
const cb = (e) => {
    console.log(date);
    return 3;
};
const compteur = document.querySelector('#compteur');
// function printId(id: number | string):void{
//     console.log(id.toString());
// }
// lastname? = optionelle, doit avoir un firstname mais pas nécessairement de lastname
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function example(a, b) {
    if (a === b) {
        a;
    }
    else {
        b;
    }
}
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
