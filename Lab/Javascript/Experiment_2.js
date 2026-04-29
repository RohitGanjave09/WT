// 1. declare one array, object,string and function
// 2. find largest number in array
// 3. reverse number in string
// 4. check palindrome in string
// 5. write code for phibonacy series
// 6. count vowels in string
// 7. remove duplicate number from array
// 8. function to find even or odd
// 9. write code for sum of array


/******************* Activity 1 *******************/
console.log("\nActivity 1 :");

//Array
let myArray = [12 ,23, 34, 45];
console.log(`Array : ${myArray}`);

//String
let myString1 = "Rohit";
let myString2 = new String("abcd");
console.log(`String1 : ${myString1}`);
console.log(`String2 : ${myString2}`);

//Functiion
function myFun(){
    console.log("My function called");
    
}

function add(num1, num2){
    return num1+num2;
}
myFun();
console.log(`Add 5+7 : ${add(5,7)}`);  


/******************* Activity 2 *******************/
console.log("\nActivity 2 :");

let array = [21 ,15, 25, 30, 8]
let max = array[0]
for(let i=1; i<array.length; i++){
    if(max <= array[i])
        max = array[i];
}
console.log(`Max of [${array}] is ${max}`);


/******************* Activity 3 *******************/
console.log("\nActivity 3:");

let str = "1234567";
let revStr = "";
let j=str.length-1;

while(j>=0){
    revStr +=str[j];
    j--;
}
console.log(`String : ${str}\nReversed string : ${revStr}`);


/******************* Activity 4 *******************/
console.log("\nActivity 4:");

let str2 = "abcba";
let revStr2 = "";
let k=str2.length-1;

while(k>=0){
    revStr2 +=str2[k];
    k--;
}
console.log(`${str2}`);

if(str2 == revStr2){
    console.log("String is palindrome");

}else{
    console.log("String is not palindrome");
}


/******************* Activity 5 *******************/
console.log("\nActivity 5:");
let n = 10;
let previous = 0, current = 1;

for(let i=0; i<n; i++){
    console.log(previous);
    let sum = previous + current;
    
    previous = current;
    current = sum;
}

/******************* Activity 6 *******************/
console.log("\nActivity 6:");
let str3 = "azezizoz";
let vowels = "aeiouAEIOU";
let countV = 0;

for(let i=0; i<str3.length; i++){
    if(vowels.includes(str3[i]))
        countV++;
}
console.log(`String : ${str3}\nNo. of vowels :${countV}`);


/******************* Activity 7 *******************/
console.log("\nActivity 7:");
const numbers = [10,20,20,10,40];
console.log(`Array : ${numbers}`);
//method 1
// let unique = [];
// let x = numbers[0];
// for(let i=0; i<numbers.length; i++){
//     if(!unique.includes(numbers[i])){
//         unique.push(numbers[i]);
//     }
// }
// console.log(`Array : ${numbers}\nUnique array : ${unique}`);

//method 2
for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
        if(numbers[i] == numbers[j]){
            numbers.splice(j,1);
            j--;
        }
    }
}
console.log(`Unique array : ${numbers}`);

/******************* Activity 8 *******************/
console.log("\nActivity 8:");
function findEvenOrOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }      
}

findEvenOrOdd(7);

/******************* Activity 9 *******************/
console.log("\nActivity 9:");
const numbers2 = [15, 10, 5 ,20]
let sum = 0;

for(let num of numbers2){
    sum+=num;
}
console.log(`Array : ${numbers2}\nSum: ${sum}`);

        

