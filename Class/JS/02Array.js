const superHero = ["Spider-man", "Batman", "Thor", "iron-man", "Hulk"];
const name = "Captan-america";

superHero.push(name);
console.log(`${superHero}`);

console.log(`${superHero[4]}`);
console.log(`${superHero[4][1]}`);

//array concat - return new array without modifying original
const arr1 = superHero.concat(name);
console.log(`${arr1}`);

const arr2 = [1, 2, 3, [4, 5, [9, 10, 11], 6], 7, 8, 12, 13]; //nested array
console.log(arr2);
// console.log(`${arr2[3]}`);

//The flat(depth) method is used to flatten nested arrays into a single-level array
const arr3 = arr2.flat(Infinity);
console.log(arr3);

//how the nested array should be flated specifies default value is 1
// infinity - flaten all levels no mater how deep
/*Flat does not change original array it returns the new array*/
const arr4 = arr2.flat(1);
console.log(arr4);

//Data scripting this method

//Check given value is array or not
console.log(Array.isArray("tahir"));
console.log(Array.isArray(arr2));

//Converts an iteratable object like string,set,math into an array
console.log(Array.from("Tahir"));
// console.log(Array.from(name1 : "Tahir));
Object.keys("Tahir");
console.log(Object.keys("Tahir"));
console.log(Object.values("Tahir"));

//create new array from given values ,no matter how many
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

//.of - converts values
//.from - convert iteretables
