//Comparison Operators
const a1=2;
const a2=3;
const a3='2';
    console.log(a1<a2, a1>a2);
    console.log(a1>=a2, a1<=a2);
    console.log(a1==a2);
    console.log(a1===a3);
    console.log(a1 != a2);
    console.log(a1 !== a2);

const red1 = '23';
const red2 = 23;

    console.log(red1>=red2);
    console.log(red1 != red2);
    console.log(red1 !== red2);

const word = 'summer';
const d = true;

    console.log(word == d);
    console.log(word === d);


//Logical Operators

const x = true;
const y = false;

console.log(x && y);
console.log(x || y);
console.log(!y);

const f = 'work';
const k = true;
const h = null;
const m = 6;

const result = f ?? k ?? h ?? m;

console.log(result);

const o = null;
const i = true;
const e = null;
const j = 6;

const result2 = o ?? i ?? e ?? j;

console.log(result2);

console.log(result + result2);