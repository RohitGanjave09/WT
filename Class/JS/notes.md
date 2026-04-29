\*\*\*Dom :
Dom is the bridge between js and html
It is programming interface in html ,When browser loads an hmtl page it convert html iin to object thta obj structure is called dom
-js uses dom to read delete and add content in html

\*\*\*Form validation :
means changing html using js
eg. show error message,clear input field,display success message,change field color

\*\*\*\*Event :
it is an action that happen in browser
eg.clicking buton, moving mouse,pressing key,submiting form,loading page
JS can detect this events and response to them

types of event:
-mouse Event - mouseover mouseout
-keyboard Event-key down and key up
-browser Event-load,resize,scroll

onclick="alert('Hi')" == html should containe structure ,js is logic so mixing them is bad practice maintain in big project

Activity-
-Jquery,time,timesstamp,default preventend, target,source element,current target,client x and y,screen x and y,alt key,ctrl key,shift key
-remove image when it is clicked

Add event listener-
it is ajs method use to attach an event handler to an html element so that specified function run when a perticular event occurs

---

map() creates a new array by applying a function to each element. - modify data
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num \* 2);
console.log(doubled);
// [2, 4, 6, 8]

filter() creates a new array with elements that pass a condition. - remove unwanted data
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
// [2, 4]

reduce() reduces the array to a single value (number, object, string, etc.).
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// 10

---

for...of is used to iterate over values of iterable objects (arrays, strings, maps, sets, etc.)
const arr = [10, 20, 30];
for (const value of arr) {
console.log(value);
}
// 10, 20, 30

for...in is used to iterate over keys (property names) of an object.
const arr = [10, 20, 30];
for (const index in arr) {
console.log(index);
}
// "0", "1", "2"

const user = { name: "Amit", age: 25 };
for (const key in user) {
console.log(key, user[key]);
}
// name Amit
// age 25
