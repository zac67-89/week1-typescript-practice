// Interfaces

interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1, 
  name: "John Doe",
  email: "john.doe@example.com"
}

// Optional Properties

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99
}

// Type Aliases

type Point = {
  x: number;
  y: number;
}

const Point1: Point = {
  x: 10,
  y: 20
}

type ID = number | string;


// Function Types

function add(a: number, b: number): number {
  return a + b;
}

const greetUser = (name: string): string => {
  return "Hello, " + name + "!";
}

// Generics

function identity<T>(value: T): T {
  return value;
}

identity <number>(42); // returns 42
identity <string>("Hello"); // returns "Hello"
identity ("What's Up?"); 

// Real World Example

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

getFirst<number>([1, 2, 3]); // returns 1
getFirst<string>(["a", "b", "c"]); // returns "a"
getFirst([]); // returns undefined

