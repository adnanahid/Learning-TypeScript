// module 1.4 (Basic Data Types)

// In TypeScript, there are two main categories of data types, one is Primitive, and another one is non-primitive

// 1. Primitive Types
//     a. string
//     b. number
//     c. boolean (true or false)
//     d. null (Intentionally empty value)
//     e. undefine (Unassigned value)
//     f. bigint (very large integer)
//     g. symbol (unique identifier)


// 2. Non-Primitive (complex) Types
//     a. object
//     b. array
//     c. tuple (Fixed-length array with known types e.g. [string, number] = ["Alice", 30])
//     d. enum (Set of named constants enum Role { Admin, User })
//     e. function
//     f. class (Blueprint for objects)
//     g. interface (Structure definition for objects)
//     h. type alias (Custom named type)
//     i. any (Can be anything (not type-safe, use with caution))
//     j. unknown (Like `any`, but safer — must check type before using)
//     k. void (Used when a function does not return any value)
//     l. never (Used when a function never returns (e.g., throws an error))

//How to define array types
// let friends: string[] = ["Mamun", "Obayed", "Abrar"]
// let marks: number[] = [1, 2, 3, 4, 5]

//tuple (tuple is a special type of array)
// const coordinates: [number, number] = [1, 5]
// const numstring: [number, string] = [1, "five"]
// const boolnums: [boolean, number] = [false, 5]
