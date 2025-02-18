// Перша частина завдання

const arrNumber = [150, 125, 852, 9563];
const someNumber = arrNumber.reduce((sum, num) => sum + num, 0);

console.log(someNumber);

// Друга частина завдання

const runArrFunOne = (set1: number[], set2: string[]): void => {
    console.log('Number Array:', set1);
    console.log('String Array:', set2);
};

const set1 = [4, 16, 64];
const set2 = ['white', 'pink', 'orange'];

runArrFunOne(set1, set2);

// Узагальнена функція для об'єднання масивів
const runArrFunTwo = <T, U>(f1: T[], f2: U[]): (T | U)[] => {
    return [...f1, ...f2];
};

const numberFunArr = [15, 26, 59];
const stringFunArr = ['butter', 'milk', 'flour'];

const mixFunArr = runArrFunTwo(numberFunArr, stringFunArr);

console.log('Mixed Array:', mixFunArr);
