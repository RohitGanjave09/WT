//Synchronous javascript --> code execute line by line
//each task wait for previous task to finish
//blocking in nature

console.log("start");
add = (a, b) => {
  return a + b;
};
let r = add(5, 3);
console.log("Result : " + r);
console.log("End");

//Synchronous javascript concept
//some task take time like api call,file read,
//js does not wait it moves to next line No-locking behaviour
//fecthcing data from server,reading file,set timeout api calls,

setTimeout(() => {
  console.log("Inside TimeOut");
}, 2000);
console.log("End");
//settimeout is sychronous it wait 2 second meanwhile js print end

//activity
//1.guess the output game
//2.blocking and nonblocking code 2-ex(synchronous,asynchrouns)
//3.real life use in company (synchronous,asynchronous) real time example
//4.API fetch activity
