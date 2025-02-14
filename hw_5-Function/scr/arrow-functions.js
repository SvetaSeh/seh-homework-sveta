//Перша частина завдання

const arrNumber = [150, 125, 852, 9563];
let w = 0;

arrNumber.forEach((arrN) => w += arrN);

console.log(w);

//Друга частина завдання

const runArrOne = (d1, d2) => {
    console.log (d1, d2);
};

const d1 = [4, 16, 64];
const d2 = ['white', 'pink', 'orange'];

runArrOne (d1, d2);

//Або

const runArrTwo = (f1, f2) => {
    return f1.concat(f2);
};

const numberArr = [15, 26, 59];
const stringArr = ['butter', 'milk', 'flour'];

const mixArr = runArrTwo(numberArr, stringArr);

console.log(mixArr);

