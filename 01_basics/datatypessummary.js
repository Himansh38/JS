//primitive
// categories 7: String, number, Boolean, null, undefined, Symbol, BigInt.

// Q. Dynamic type langauge or static type langauge \


// There is no any float vlue declarattion in js 
const outsideTemp = null

const id = Symbol('123')
const anotherID = Symbol('123')

// console.log(id === anotherID);

const  bigNumber = 65576989022212621677987n

// Reference type (non-primitve)

// Array , Objects, Functions

const heroes = ["Shaktiman", "naagraj", "doga"]
let myObj={
    name: "himansh",
    age: 20

}
const myFunction = function(){
// console.log("heyuuyyyyyyyyyyy");
}
// console.log(typeof heroes);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive)copyvalue, Heap(non-primitive)referrencevalue


let myYoutubename = 'hiteshchoudhary.com'
let anotherename = myYoutubename
anotherename = "chaiaurcode"

console.log(myYoutubename)
console.log(anotherename)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = " hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
