// 🎨 FORMATTING DEMO
// This file has intentional formatting issues that Biome will fix

const   greeting="Hello, World!"
const numbers=[1,2,3,4,5]

function   badlyFormatted(   a,b,c   ){
    if(a>b){
return a+b+c
    }else{
            return a-b-c
    }
}

const user={name:"John",age:30,city:"New York",occupation:"Developer"}

const longArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// Inconsistent quotes
const singleQuote = 'hello'
const doubleQuote = "world"
const template = `template string`

// Missing semicolons (if configured)
const x = 1
const y = 2
const z = 3

// Weird spacing
const sum=a+b+c
const product = a * b*c

// Arrow functions
const add=(a,b)=>a+b
const multiply = ( a, b ) => { return a * b }

// Object shorthand
const name = "Alice"
const age = 25
const person = { name: name, age: age }

console.log(badlyFormatted(1,2,3))
