//Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.

// Instructions:

// Create a TypeScript program.
// Print the following message to the console:
// Hello World, I will complete this course successfully and become a Next level Web Developer!

// const welcome = () => {
//     console.log("Hello World, I will complete this course successfully and become a Next level Web Developer!")
// }
// welcome()

// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.
//
//Instructions:
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

// const info = (name:string, age:number, role?: 'admin' | 'user' | 'guest') => {
//     console.log({name, age, role})
// }
// info("Adnan", 21, "admin")

// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.
//
// Instructions:
// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

// type Person = {
//     name: string,
//     address: string,
//     hairColor: string,
//     eyeColor: string
//     income: number,
//     expense: number,
//     hobbies: string[],
//     familyMember: string[],
//     job: object,
//     skills: string[],
//     maritalStatus: string
//     friends: string[],
// }

// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.
//
// Instructions:
//
//     Define interfaces Book and Magazine.
//     Create:
// A type that is a union of Book and Magazine.
//     A type that is an intersection of Book and Magazine.

// interface Books {
//     name:string,
//     author:string,
// }
// interface Magazine {
//     name:string,
//     author:string,
// }
//
// type Union = Books | Magazine;
// type Intersection = Books & Magazine;

// Task 5: Function Type
// Objective: Write a function that reverses a string.
//
// Instructions:
// Write a function reverseString that:
//     Takes a single string argument.
//     Returns the string in reverse order.
//     Example:
// Input: "hello"
// Output: "olleh"

// const reverse = (arg:string):string => {
//     const reversed = arg.split('').reverse().join('');
//     return reversed
// }
//
// const res = reverse('hello');
// console.log(res);

// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.
//
// Instructions:
//
// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

// const sum = (...args: number[]): number => {
//     return args.reduce((prev, curr) => prev + curr, 0);
// }
// console.log(sum(1,2,3));

// Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.
//
//     Instructions:
//
// Create a function that accepts a parameter of type string | number.
//     The function should:
//     Return the length if the input is a string.
//     Return the square if the input is a number.

// const check = (arg: string | number): number => {
//     if (typeof arg === 'string') {
//         return arg.split('').length;
//     }
//     if (typeof arg === 'number') {
//         return arg*arg
//     }
// }
//
// console.log(check(4));
// console.log(check("Adnan"));

// Task 8: Intersection Types
// Objective: Practice using intersection types.
//
//     Instructions:
//
// Create a type AdminUser that is an intersection of:
//     User with properties name and email
// Admin with property adminLevel
// Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

// interface User {
//     name: String;
//     email: String;
// }
//
// interface Admin {
//     adminLevel: number;
// }
//
// type AdminUser = User & Admin
//
//
// function describeAdmin(user: AdminUser): string {
//     return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
// }
//
// const admin: AdminUser = {
//     name: "Fatima",
//     email: "fatima@example.com",
//     adminLevel: 2
// };
//
// console.log(describeAdmin(admin));

// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.
//
//     Instructions:
//
// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.

// interface Employee {
//     name: string;
//     age: number;
//     email?: string;
//     phone: number;
//     address: {
//         street: string;
//         city?: string;
//     }
//     role: string;
// }
//
// function getEmployeeCity(employee:Employee):string{
//     return employee?.address?.city;
// }
//
// const employeeOne: Employee = {
//     name: "Adnan",
//     age: 21,
//     phone: 1736932170,
//     address: {
//         street: "Maryland",
//         city: 'Khulna Sadar',
//     },
//     role: 'Engineer',
// }
//
// console.log(getEmployeeCity(employeeOne))

// Task 10: Nullish Coalescing
// Objective: Handle null and undefined values using nullish coalescing.
//
//     Instructions:
//
// Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.

// function getDisplayName(name: string | null | undefined): string {
//     return name ?? "Anonymous";
// }
//
// console.log(getDisplayName("Adnan"));
// console.log(getDisplayName(null));

// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.
//
//     Instructions:
//
// Write a function processData(data: unknown) that:
//     Checks if data is a string and returns the uppercased version.
//     If data is a number, returns the square of it.

// function processData(data: unknown):string|number {
//     if(typeof data === 'string') {
//         return data.toUpperCase();
//     }
//     if(typeof data === 'number') {
//         return data*data;
//     }
// }
//
// console.log(processData("adnan"));
// console.log(processData(4));

// Task 12: Never Type
// Objective: Use the never type for functions that don’t return.
//
// Instructions:
//
//     Write a function handleError that:
//     Accepts a message: string.
//     Throws an error with the given message.
//     Use the never return type to indicate that this function never returns.
//
// function handleError(message: string): never {
//     throw new Error(message);
// }

// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.
//
//     Instructions:
//
// Create a generic function that:
//     Accepts an array of any type.
//     Returns a new array with duplicate values removed.

// function practice<T>(input: T[]): T[] {
//     const newArray: T[] = [];
//     for (let i = 0; i < input.length; i++) {
//         if(!newArray.includes(input[i])){
//             newArray.push(input[i]);
//         }
//     }
//     return newArray;
// }

// const practice = <T>(input: T[]): T[] => {
//   return Array.from(new Set(input));
// };

// console.log(practice<number>([1, 2, 3, 2]));
// console.log(practice<string>(["Adnan", "Mamun", "Adnan"]));

// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.
//
//     Instructions:
//
// Write an asynchronous function that:
//     Simulates fetching user data (containing name and age).
// Returns the data after a short delay.

interface User {
  name: string;
  age: number;
}

async function fetchUserData(): Promise<User> {
  console.log("Fetching user data...");
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData: User = {
        name: "Adnan",
        age: 22,
      };
      console.log("User data fetched");
      resolve(userData);
    }, 2000);
  });
}

async function getUserInfo() {
  try {
    const user = await fetchUserData();
    console.log(`User Name: ${user.name}, User age: ${user.age}`);
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
}

getUserInfo();