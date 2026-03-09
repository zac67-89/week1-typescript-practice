interface User {
  id: number;
  name: string;
  email?: string;
}

let users: User[] = [];

function addUser(user: User): void {
  users.push(user);
}

function listUsers(): User[] {
  return users;
}

function deleteUser(id: number): boolean {
  const initialLength = users.length;
  users = users.filter((user) => user.id !== id);
  return users.length < initialLength;
}

addUser({ id: 1, name: "Alice" });
addUser({ id: 2, name: "Bob", email: "bob@example.com" });
addUser({ id: 3, name: "Charlie" });

console.log("All Users: ", listUsers());

deleteUser(2);

console.log("All Users: ", listUsers());
