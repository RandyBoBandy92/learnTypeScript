"use strict";
// Basic Types
let id = 5;
let myName = "Randy";
let isDeveloper = true;
// like vanilla JS, can be assigned to whatever
let x = "hello";
// for an array that only contains numbers
let ids = [1, 2, 3, 4, 5];
// for an array full of random crap lol
let arr = [1, "hello", true];
// Tuple
let person = [1, "Fred", true];
// Tuple Array
let employee;
employee = [
    [1, "Fred"],
    [1, "Fred"],
    [1, "Fred"],
    [1, "Fred"],
];
// Union
// variable holding more than 1 type
let idUnion;
idUnion = 22;
// Enum
// Represents a group of constants
// similar to when in JavaScript I would make things like
// const ADD_FAVORITE = 'ADD_FAVORITE';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Johnny",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
// Parameters and return value must be given a type
function addNum(x, y) {
    return x + y;
}
console.log("addNum", addNum(1, 2));
// void means that the function returns nothing
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Johnny",
};
// One interface, being used for two different functions
// from my little experiment here, it looks like because the interface specified the type
// not including it in my parameter declaration does not throw an error
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
add(1, 2);
sub(2, 1);
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const jeff = new Person(2, "jeff");
console.log(jeff.register());
// SubClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const jeffWorker = new Employee(3, "jeffy", "Developer");
// Generics (reusable components)
// <T> is a stand-in for a type parameter which will be added in when you call the function
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["brad", "john", "fizz"]);
numArray.push(2);
