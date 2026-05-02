/*
    1.const - it can not be reasigned and redeclared
    2.let - it can be reasigned and can be redeclared in different scope , it is block scoped
    3.var - it can be reasigned and can be redeclared , 
            when value changes in different scope also affect to value in all scope 
*/

const a = 10
// a = 20
console.log("a = " + a);

var b = 10
let c = 20
{
    var b = 100
    let c = 200
    console.log("b = " + b + "c = " + c)
}
console.log("b = " + b + "c = " + c)


//Data types
// 1.Number
let accountNumber = 123456789
console.log(accountNumber, typeof (accountNumber));

//2.Boolean
let isActive = true
console.log(isActive, typeof (isActive));

//3.String
let accountName = "abcde"
console.log(accountName, typeof (accountName));

//4.null
let loanAmt = null
console.log(loanAmt, typeof (loanAmt));

//5.Undefined
let pin
console.log(pin, typeof (pin));

//6.BigInt
let balance = 12233n
console.log(balance, typeof (balance));

