// Перша частина завдання

function sumNewAr(something: number[]): number {
    let s = 0;
    for (const num of something) {
        s += num;
    }
    return s;
}

console.log(sumNewAr([15, 25, 48, 95]));

// Друга частина завдання

function runArrOne<T, U>(d1: T[], d2: U[]): void {
    console.log(d1, d2);
}

const d1: number[] = [3, 9, 27];
const d2: string[] = ['red', 'blue', 'green'];

runArrOne(d1, d2);

// Або

function runArrTwo<T, U>(f1: T[], f2: U[]): (T | U)[] {
    return [...f1, ...f2];
}

const numberArr: number[] = [15, 26, 59];
const stringArr: string[] = ['butter', 'milk', 'flour'];

const mixArr: (number | string)[] = runArrTwo(numberArr, stringArr);

console.log(mixArr);
