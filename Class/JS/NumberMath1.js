let balance = new Number(10000);
console.log(balance);
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // When we build e-commerce websote and pricision values are to long then we use "toFixed()"
console.log(balance.toLocaleString("en-us"));

//Math
console.log(Math);
console.log(Math.abs(-4)); // absolute convert - to +
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); // choose topest value
console.log(Math.floor(4.6)); // choose lowest value
console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));

/*
How to work math.random with example
-give random decimal number between 0 to 1
*/
console.log(Math.random());
