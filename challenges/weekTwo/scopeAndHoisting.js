/*
Hoisting
-Code has two faces of it being compiled: Creation and Execution
-Creation: scans entire document and pulls out variables and functions to store to memory.
-Execution: values are assgined to functions and variables stored in memory during creation phase. 

*/
goodBye();
var hello = "hello";

console.log(hello);


function goodBye (){
    console.log("goodbye");
}

let name = "Daniel";
console.log(name);




var coffeeType = "dark roast";
function exampleFunction(){
    var coffeeType ="vanilla roast"
    console.log(coffeeType);
}

exampleFunction();

console.log("Outside the function", coffeeType);


var x = "Daniel";

function scope (){
    var x = "world";
    if (true == true){
        let x = "Hello"
        console.log("From if statement", x);
    }
    console.log("From function", x);
}

scope();

console.log("Outside the function", x);