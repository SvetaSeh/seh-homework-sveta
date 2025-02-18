// Перша частина завдання

function sumNewAr(something: number[]): number {
    return something.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}

console.log(sumNewAr([15, 25, 48, 95]));

// Друга частина завдання

function runArrOne<T, U>(d1: T[], d2: U[]): void {
    console.log(d1, d2);
}

const d1 = [3, 9, 27];
const d2 = ['red', 'blue', 'green'];

runArrOne(d1, d2);

// Або

function runArrTwo<T, U>(f1: T[], f2: U[]): (T | U)[] {
    return [...f1, ...f2];
}

const numberArr = [15, 26, 59];
const stringArr = ['butter', 'milk', 'flour'];

const mixArr: (number | string)[] = runArrTwo(numberArr, stringArr);

console.log(mixArr);
