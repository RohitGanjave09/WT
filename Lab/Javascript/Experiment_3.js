/* 
1. diff between arrow function and simple function
2. What is "this" keyword why we use in arrow and simple function ,if not why?
3. Write a code for two arrow function with two example
4. write code for switch case in js
5. How to use truthy and falsy values in js
6. How to use ternary operator in js
7. Write code for how to use loops in array 
8. Diff between forIn and forOf 
9. How to use filter and map function in js
10. How to use reduce method or function in js
*/

/******************* Activity 1 *******************/
console.log("\nActivity 1:");
//Simple function
function add1(a,b){
    return a+b;
}
console.log(`5 + 2 : ${add1(5,2)}`);

//Arrow function
const add2 = (a,b) => a + b;
console.log(`10 + 20 : ${add2(10,20)}`);




/******************* Activity 2 *******************/
console.log("\nActivity 2:");
/*this is a special keyword that refers to the object that is executing the current function
We use this when we want a function to work with its object's data*/

//Regular functions get their own this
const user1 = {
    name : "Rohit",
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
};
user1.greet();

/*Arrow functions DO NOT have their own this,Because arrow function does not take calling object as this,
 They inherit this from their surrounding (parent) scope*/
const user2 = {
    name : "Rohit",
    greet : () =>{
        console.log(`Hello ${this.name}`);
    }
};
user2.greet();




/******************* Activity 3 *******************/
console.log("\nActivity 3:");
const isEven = (num1) =>{
    return num1%2 == 0;
}
console.log(isEven(5));
console.log(isEven(8));

const square = (num2) =>{
    return num2*num2;
}
console.log(square(2));
console.log(square(7));




/******************* Activity 4 *******************/
console.log("\nActivity 4:");
let day = 2;

switch(day){
    case 1 : 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 : 
        console.log("Thursday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    case 6 : 
        console.log("Saturday");
        break;
    case 7 : 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

/******************* Activity 5 *******************/
console.log("\nActivity 5:");
// There are only 6 falsy values: false,null,undefined,0,"",NaN
//Everything else is truthy
let name = "";

if (name) {
  console.log(`${name}`);
} else {
  console.log("Name is empty");
}

let value = null
if (value) {
  console.log("Value exists");
}




/******************* Activity 6 *******************/
console.log("\nActivity 6:");
// The ternary operator is a short form of if-else
//condition ? valueIfTrue : valueIfFalse;
let age=18;
let result= age >= 18 ? "Adult" : "Minor";
console.log(result);




/******************* Activity 7 *******************/
console.log("\nActivity 7:");
let fruits = ["Apple", "Banana", "Mango","Watermelon"];

for (let i =0; i<fruits.length; i++) {
  console.log(fruits[i]);
}




/******************* Activity 8 *******************/
console.log("\nActivity 8:");
//For in : return index
//For of : return Values
let colors = ["Red", "Blue", "Green"];
for (let index in colors) {
  console.log(index);
}

for(let color of colors){
  console.log(color);
}




/******************* Activity 9 *******************/
console.log("\nActivity 9:");
//map() is used to create a new array by changing each element of the original array
//filter() is used to select some elements from an array based on a condition

let numbers1 = [1,2,3,4];
let result2 = numbers1.map(num => num * 2);
console.log(result2);

let numbers2 = [1,2,3,4,5,6];
let evenNumbers = numbers2.filter(num => num % 2 == 0);
console.log(evenNumbers);




/******************* Activity 10 *******************/
console.log("\nActivity 10:");
//reduce() combines all array values into one value
let numbers3 = [5,5,5];
let total = numbers3.reduce((total, num) => total + num, 0);
console.log(total);