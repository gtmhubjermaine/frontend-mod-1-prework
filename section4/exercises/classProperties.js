/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
// Write a class skeleton
// Create 2 object instances and store in variables
// Log each variable to the console.
// You do not need any proerties at this time!!

// Prompt 1: Dog
// class Dog {
//   constructor() {}
// }
// var husky = new Dog()
// var hound = new Dog()
// console.log(husky)
// console.log(hound)
// Prompt 2: Snack
class Snack {
  constructor() {}
}
var pizza = new Snack()
var chips = new Snack()
console.log(pizza)
console.log(chips)
// Prompt 3: Shirt
class Shirt {
  constructor() {}
}
var buttonDown = new Shirt()
var sweater = new Shirt()
console.log(buttonDown)
console.log(sweater)
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
// Write a class skeleton
// Add a constructor method
// Assign 3 properties (names and values of your choice) to each class
// Create an object instance and store in variable
// Log that variable to the console.

// Prompt 1: Dog
// class Dog {
//   constructor(fur, size, age) {
//     this.fur = fur
//     this.size = size
//     this.age = age
//   }
// }
// var husky = new Dog("thick", "medium", 7)
// var hound = new Dog("short", "Large", 12)
// console.log(husky)
// console.log(hound)
// Prompt 2: Snack

// Prompt 3: Shirt

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
// Write a class skeleton
// Add a constructor method
// Declare 3 parameters in the consutructor
// Assign 3 properties (names and values of your choice), using the parameters
// Create 2 object instances and store in variables (passing in different arguments)
// Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(fur, size, age) {
    // parameters
    this.fur = fur
    this.size = size //properties / state
    this.age = age
  }
}
var husky = new Dog("thick", "medium", 7) //Object instance!
var hound = new Dog("short", "Large", 12)

console.log(husky)
console.log(hound)
// Prompt 2: Snack

// Prompt 3: Shirt
