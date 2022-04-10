// Basic Types

let id: number = 5;

let myName: string = "Randy";

let isDeveloper: boolean = true;

// like vanilla JS, can be assigned to whatever
let x: any = "hello";

// for an array that only contains numbers
let ids: number[] = [1, 2, 3, 4, 5];

// for an array full of random crap lol
let arr: any[] = [1, "hello", true];

// Tuple

let person: [number, string, boolean] = [1, "Fred", true];

// Tuple Array

let employee: [number, string][];

employee = [
  [1, "Fred"],
  [1, "Fred"],
  [1, "Fred"],
  [1, "Fred"],
];

// Union
// variable holding more than 1 type

let idUnion: string | number;
idUnion = 22;

// Enum

// Represents a group of constants

// similar to when in JavaScript I would make things like

// const ADD_FAVORITE = 'ADD_FAVORITE';

enum Direction1 {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects & Type

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Johnny",
};

// Type Assertion

let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions

// Parameters and return value must be given a type

function addNum(x: number, y: number): number {
  return x + y;
}

console.log("addNum", addNum(1, 2));

// void means that the function returns nothing
function log(message: string | number): void {
  console.log(message);
}

// Interface

// a custom type, or specific structure

// Interface cannot be used with primitives, or unions
// Typically used with objects

interface UserInterface {
  readonly id: number; // cannot be reassigned
  name: string;
  age?: number; // optional property
}

const user1: UserInterface = {
  id: 1,
  name: "Johnny",
};

// Interfaces with functions
interface MathFunc {
  (x: number, y: number): number;
}

// One interface, being used for two different functions

// from my little experiment here, it looks like because the interface specified the type
// not including it in my parameter declaration does not throw an error
const add: MathFunc = (x, y): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

add(1, 2);
sub(2, 1);

// Classes

// can use private and protected "data modifiers" to make properties only accessible within the class
// or not reassignable

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const jeffWorker = new Employee(3, "jeffy", "Developer");

// Generics (reusable components)

// <T> is a stand-in for a type parameter which will be added in when you call the function

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["brad", "john", "fizz"]);

numArray.push(2);
