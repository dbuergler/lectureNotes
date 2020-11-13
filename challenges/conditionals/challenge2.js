let myString = "this is a string" //can use both "" and '
let myNumber = 10;
let myBoolean = true; // true or false
let myArray = [ 10, "string", []];
let myObject = {firstKey: "a string"}
let myUndefined = undefined
console.log(myUndefined);
let myNull = null;

console.log(typeof myBoolean);


let hulk = {
    color: 'green',
    age: 42,
    isStrong: true,
    residence: { placeofwork: 'Washington' , years: 45  }
}

console.log(typeof hulk.color);
console.log(typeof hulk.age);
console.log(typeof hulk.isStrong);
console.log(typeof hulk.residence);

if (hulk === "string"){
    console.log("The value is a string");
} else if (hulk === "number"){
    console.log("The value is a number");
} else if (hulk === "boolean"){
    console.log("The value is a boolean");
} else if (hulk === "object"){
    console.log("The value is an object");
} else {
    console.log("What are you!");
}









