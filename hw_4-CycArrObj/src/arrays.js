const stringPlace = ['car', 'ship', 'plane'];
const numberPlace = [10, 20, 30];
const booleanPlace = [true, false, true];
const anyPlace = [50, 'word', false];

//Використання операції push

stringPlace.push('motorcycle');
console.log(stringPlace);

//Використання операції pop

numberPlace.pop();
console.log(numberPlace);

//Використання операції concat

const concatArray = stringPlace.concat(anyPlace);
console.log(concatArray);

//Використання операції includes

console.log(booleanPlace.includes (true));
console.log(anyPlace.includes ('mango'));

//Використання операції map

const newArray = numberPlace.map(num => num + 10);
console.log(newArray);

const newArray2 = anyPlace.map(any => 'Yes');
console.log(newArray2);


//Використання операції forEach

const newArray3 = numberPlace.forEach(num => console.log(num*6));
