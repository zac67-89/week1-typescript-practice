// Primitive Types

let username: string = "John Doe";
let age: number = 30;
let isDeveloper: boolean = true;

// Arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Objects

let user: { id: number; name: string } = {
  id: 1,
  name: "John Doe",
};

// Union Types

let id: number | string;

id = 123; // valid
id = "abc"; // also valid

//Eg. Real Case

function printId(id: number | string) {
  console.log("ID: " + id);
}

// Type Inference

let message = "Hello, World!";
console.log(message);

// message = 1; // Error: Type 'number' is not assignable to type 'string'.

// Function with Type Annotations

function greet(name: string): string {
  return "Hello, " + name + "!";
}

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = (a: number, b: number): number => {
  return a / b;
};

// Practice

function totalPrice(price: number, quantity: number): number {
  return price * quantity;
}

let product: { id: number; name: string; price: number } = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};

let person: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

