let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());
console.log(myDate.getUTCMonth());
console.log(myDate.getHours());
console.log();

//Timestamp
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(Date.now()); //miliseconds
console.log(Date.now()/1000); //seconds

//calculate proper current time



