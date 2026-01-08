// datatypes are of two types based on how data is saved in the memory and 
//how we can access it 
//1.primitive(Call by value-> changes made in the copy of data not in the original data)

//7 types: strings,Number,Boolean,null,undefined,symbol,BigInt


//2.Reference type(Non Primitive-> inka refernce directly allocate kiya ja skta h )

//Array,Objects,Functions

const score = 100
const scorevalue = 100.3

const isLoggedIn=false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber= 3456777777777777777777444444444444444556n

const heros=["shaktiman","naagraj","Doga"] //array- square brackets
//objects-curly brackets write in key value pairs
let myobj={
    name:  "juhi",
    age: 18,

}

const myFunction=function(){
    console.log("Helloo World");
}

console.log(typeof bigNumber)

// read typeof from book

 


