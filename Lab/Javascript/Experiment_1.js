/*
    const → cannot be reassigned or redeclared
    let   → block scoped, can be reassigned
    var   → function/global scoped, affects all scopes
*/

// ================= CONST / LET / VAR =================
console.log("===== CONST / LET / VAR Example =====");
document.writeln("<h3>CONST / LET / VAR Example</h3>");

const a = 10;
console.log("const a =", a);
document.writeln("const a = " + a + "<br>");

var b = 10;
let c = 20;

console.log("Before block → b =", b, "c =", c);
document.writeln("Before block → b = " + b + ", c = " + c + "<br>");

{
    var b = 100;
    let c = 200;

    console.log("Inside block → b =", b, "c =", c);
    document.writeln("Inside block → b = " + b + ", c = " + c + "<br>");
}

console.log("After block → b =", b, "c =", c);
document.writeln("After block → b = " + b + ", c = " + c + "<br><br>");


// ================= DATA TYPES =================
console.log("\n===== DATA TYPES =====");
document.writeln("<h3>JavaScript Data Types</h3>");

let accountNumber = 123456789;
console.log("Number:", accountNumber, "| Type:", typeof accountNumber);
document.writeln("Number → " + accountNumber + " | Type: " + typeof accountNumber + "<br>");

let isActive = true;
console.log("Boolean:", isActive, "| Type:", typeof isActive);
document.writeln("Boolean → " + isActive + " | Type: " + typeof isActive + "<br>");

let accountName = "abcde";
console.log("String:", accountName, "| Type:", typeof accountName);
document.writeln("String → " + accountName + " | Type: " + typeof accountName + "<br>");

let loanAmt = null;
console.log("Null:", loanAmt, "| Type:", typeof loanAmt);
document.writeln("Null → " + loanAmt + " | Type: " + typeof loanAmt + "<br>");

let pin;
console.log("Undefined:", pin, "| Type:", typeof pin);
document.writeln("Undefined → " + pin + " | Type: " + typeof pin + "<br>");

let balance = 12233n;
console.log("BigInt:", balance, "| Type:", typeof balance);
document.writeln("BigInt → " + balance + " | Type: " + typeof balance + "<br><br>");


// ================= ACTIVITY 1 =================
console.log("\n===== Activity 1 : Student Details =====");
document.writeln("<h3>Activity 1 : Student Details</h3>");

let name = "Rohit";
let age = 21;
let address = "ichalkaranji";
const PRN = "23UAM031";

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);
console.log("PRN:", PRN);

document.writeln("Name : " + name + "<br>");
document.writeln("Age : " + age + "<br>");
document.writeln("Address : " + address + "<br>");
document.writeln("PRN : " + PRN + "<br><br>");


// ================= ACTIVITY 2 =================
console.log("\n===== Activity 2 : Even or Odd =====");
document.writeln("<h3>Activity 2 : Even or Odd</h3>");

let num = 10;
console.log("Number : " + num);
document.writeln("Number : " + num + "<br>");
if (num % 2 === 0) {
    console.log(num + " is Even");
    document.writeln(num + " is Even<br>");
} else {
    console.log(num + " is Odd");
    document.writeln(num + " is Odd<br>");
}


// ================= ACTIVITY 3 =================
console.log("\n===== Activity 3 : Pass or Fail =====");
document.writeln("<h3>Activity 3 : Pass or Fail</h3>");

let marks = 50;
console.log("Marks : " + marks);
document.writeln("Marks : " + marks + "<br>");
if (marks < 35) {
    console.log("Grade : Fail");
    document.writeln("Grade : Fail<br>");
} else {
    console.log("Grade : Pass");
    document.writeln("Grade : Pass<br>");
}


// ================= ACTIVITY 4 =================
console.log("\n===== Activity 4 : Print Numbers =====");
document.writeln("<h3>Activity 4 : Print Numbers</h3>");

for (let i = 1; i < 10; i++) {
    console.log(i);
    document.writeln(i + " ");
}
document.writeln("<br><br>");


// ================= ACTIVITY 5 =================
console.log("\n===== Activity 5 : Value Copy Example =====");
document.writeln("<h3>Activity 5 : Value Copy Example</h3>");

let a1 = 10;
let b1 = a1;
a1 = 20;

console.log("a =", a1);
console.log("b =", b1);
console.log("Changing 'a' does NOT affect 'b'");

document.writeln("a = " + a1 + "<br>");
document.writeln("b = " + b1 + "<br>");
document.writeln("Note: Changing 'a' does not affect 'b'");
