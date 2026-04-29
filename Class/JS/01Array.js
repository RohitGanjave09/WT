//Array
let arr = [1, 2, 3, 4];
console.log(`My array ${arr}`);
console.log(typeof arr);

const myArray = new Array(0, 1, 2, 4);
console.log(`${myArray[1]}`);

//Array methods
myArray.push(10); //Add value in array
console.log(`push 10 :${myArray}`);

myArray.pop(); //remove last value from array
console.log(`pop : ${myArray}`);

myArray.unshift(9); //it shifts all element and added at new position
console.log(`unshift 9 : ${myArray}`);

//it remove the fisrt value and shift all element
console.log(`shift : ${myArray.shift()}`);

//Check given value present in array or not
console.log(`include 1 : ${myArray.includes(1)}`);

console.log(`indexOf 4 : ${myArray.indexOf(4)}`);

//*******************************Activity 3 : slice and split

//Slice : Extracts part of an array without changing original
let a = [10, 20, 30, 40, 50];
let result = a.slice(1, 4);
console.log(result);
console.log(arr);

//Split : Converts a string into an array using a separator
let text = "apple,banana,mango";
let fruits = text.split(",");
console.log(fruits);
