"use strict";
// Primitive Types
Object.defineProperty(exports, "__esModule", { value: true });
let username = "John Doe";
let age = 30;
let isDeveloper = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
// Objects
let user = {
    id: 1,
    name: "John Doe",
};
// Union Types
let id;
id = 123; // valid
id = "abc"; // also valid
//Eg. Real Case
function printId(id) {
    console.log("ID: " + id);
}
// Type Inference
let message = "Hello, World!";
console.log(message);
// message = 1; // Error: Type 'number' is not assignable to type 'string'.
// Function with Type Annotations
function greet(name) {
    return "Hello, " + name + "!";
}
function multiply(a, b) {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
};
// Practice
function totalPrice(price, quantity) {
    return price * quantity;
}
let product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
};
let person = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
//# sourceMappingURL=index.js.map