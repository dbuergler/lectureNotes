/*
Functions:
-Javascript functions are defined with the function keyword, and can be wrriten as a function declaration or a function expression


-Function declarations are hoisted in our code, and run ONLY when we call them(invoke them). So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his/her hand up, waiting to ask a question. That student does not ask the question until the teacher calls upon them. 

-Function expressions are not hoisted, and are generally stored in variables. 

-Functions without names are known as anonymous functions. 
*/

//Function Declaration

function sayHello() {
    console.log("Hi");
}

sayHello();

//Function Expression

let greetings = function () {
    console.log("Hello");
}

greetings();


/*Parameters

-Think of parameters as a newly declared variable that we have not given a value to yet
    - The value that we pass into our function when we call the function to run (which is known as an argument), is the value that gets assigned to the parameter

    -General naming convention for function parameters: the parameter should be named something related to the information we are passing into the function. If we are passing in an integer, we may name our parameter num or number. 
*/

function myDog(husky) {
    console.log(`My dogs name is ${husky}`);
}

myDog("Princess"); //"Princess" is the argument 
myDog("Luna");

function allMyDogs (smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, ${borderCollie}`);   
}

allMyDogs("Mira", "Luna", "Charlie"); //Order matters here!!

/*
Return

-Functions can also manipulate the data sent to them, and return a new value. 

-Code below or after the "return" does not get executed.
*/

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return average; //Stops execution of that function!
    console.log("Hello");
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
Arrow Functions

-Arrow functions (or fat arrow functions) were introduced ES6. They are basically just a more concise way to write  function expressions--NOT delcarations!
    -This means that arrow functions do not get hoisted

-There are two types of arrow functions: concise body and block body
    -The return happens automatically with a concise body arrow function
    -The return does not happen automatically with a block body arrow function
*/

//Concise body
// let speak = (name) => console.log(`${name} goes woooof!`);
// speak("Luna");

// let nameJoiner = (first, last) => `${first} ${last}`;
// let fullName = nameJoiner("Daniel", "Buergler");
// console.log(fullName);

//Block body
let speak = (name) => {
    console.log(`${name} goes woooof!`);
}

let nameJoiner = (first, last) => {
   return `${first} ${last}`;
}

let fullName = nameJoiner("Daniel", "Buergler")
console.log(fullName);

function areaRectangle (length, width){
    let area = length * width;
    return area;
}

let area1 = areaRectangle(5,6);
let area2 = areaRectangle(10,2);

console.log(area1);
console.log(area2);


function dogYearsToHumanYears (dogAge){
    let humanAge = (dogAge -2 )* 4 + 21
    return humanAge
}
 
console.log(dogYearsToHumanYears(14));