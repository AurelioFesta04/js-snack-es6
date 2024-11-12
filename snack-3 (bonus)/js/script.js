function snack3(arrayQualunque, a, b) {
    let nuovoArrayQualunque = [];
    for (let i = a; i <= b; i++) {
        nuovoArrayQualunque[nuovoArrayQualunque.length] = arrayQualunque[i];
    }
    return nuovoArrayQualunque;
}

let arrayQualunque = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = prompt("scegli un numero da 1 a 9")
const a = prompt("scegli un numero più piccolo del precedente")
console.log(snack3(arrayQualunque, a, b))