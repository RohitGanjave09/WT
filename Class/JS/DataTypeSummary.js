//symbol : used for unique id
const anotherId = Symbol("123");
console.log(typeof anotherId);

const id = 123;
console.log(id === anotherId);

//JS is a Dynamic language

//Array
const cars = ["BMW", "Ford", "Mercedes"];
const nums = [1, 2, 3, 4, 5];
console.log(cars);
console.log(nums);

//Objects : key and value pair
const obj = {
  name: "Tahir",
  age: 21,
};
console.log(obj.name, obj.age);

//Functions

const hello1 = function () {
  console.log("Hello World");
};
hello1();

function hello2() {
  console.log("Hello World");
}
hello2();

//*******************************Activity 1 : deep study of Functions
//Function : A function in Java is a block of code designed to perform a specific task.
