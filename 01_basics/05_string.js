const name = " himansh"
const repoCount =  25

// console.log(name + repoCount + "Value");

console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

// decalraiton
const gameName  = new String ('Himan-sh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)  //confusion
console.log(anotherString);


const newStringOne = "   Himansh   "

console.log(newStringOne.trim());//trim remove the spaces in the string 