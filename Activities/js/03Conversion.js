//Number -> String
let num = 33;
let numString = String(num);
console.log(numString);
console.log(typeof numString);

//String ->Number
let str = "100";
let strNum = Number(str);
console.log(strNum);
console.log(typeof strNum);

//Activity 1: all conversion

//operations
console.log(2 / 2);
console.log(2 * 2);
console.log(2 + 2);
console.log(2 / 2);
console.log(2 % 2);

//String concatination
let s1 = " Tahir",
  s2 = "hello";
console.log(s2 + s1);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + "2");
console.log(1 + 3 + "2");
//Note - js only automaticaly convert a string to a number if arithmatical operations

//Activity 2 : check this below
console.log(true);
console.log(+true);
console.log(+"");

//increment
let count = 100;
console.log(count++);

let score = 200;
console.log(++score);
