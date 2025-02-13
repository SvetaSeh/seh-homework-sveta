//Перша частина завдання

function sumNewAr(something) {
    let s = 0;
    for (let i = 0; i < something.length; i++) {
        s += something[i];
    }
    return s;
}

console.log(sumNewAr([15, 25, 48, 95]));

//Друга частина завдання

function runArrOne(d1, d2) {
    console.log (d1, d2);
}

const d1 = [3, 9, 27];
const d2 = ['red', 'blue', 'green'];

runArrOne (d1, d2);

// Або

function runArrTwo(f1, f2) {
    return f1.concat(f2);
}

const numberArr = [15, 26, 59];
const stringArr = ['butter', 'milk', 'flour'];

const mixArr = runArrTwo(numberArr, stringArr);

console.log(mixArr);
