//utility type
// 1. pick,
interface User {
  name: string;
  age: number;
  email: string;
}

type UserPreview = Pick<User, "name" | "email">;

const user: UserPreview = {
  name: "Adnan",
  email: "adnan@example.com",
};



// 2. Omit,
type UserWithoutEmail = Omit<User, "email">;

const user: UserWithoutEmail = {
  name: "Adnan",
  age: 22,
};



// 3. Required,
interface User {
  name?: string;
  age?: number;
}

const createUser = (user: Required<User>) => {
  // Now both name and age are required
  console.log(user.name, user.age);
};

createUser({ name: "Adnan", age: 22 }); // ✅ OK



// 4. Partial,
interface User {
  name: string;
  age: number;
}

const updateUser = (user: Partial<User>) => {
  // All fields are optional now
  console.log(user.name, user.age);
};

updateUser({ name: "Adnan" }); // ✅ OK


// 5. Readonly,
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "Adnan",
  age: 22,
};

user.age = 25; // ❌ Error: Cannot assign to 'age' because it is a read-only property


// 6. Record,
type Roles = "admin" | "user" | "editor";

const permissions: Record<Roles, boolean> = {
  admin: true,
  user: false,
  editor: true,
};



// 7.
