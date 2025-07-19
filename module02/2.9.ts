//conditional type

type a1 = null;
type b1 = undefined;

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

type a = keyof Dog;

const kaliya: a = "name";

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

printName({ name: "Adnan", age: 21 });

type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<"hello">; // "Yes"
type B = IsString<42>; // "No"
