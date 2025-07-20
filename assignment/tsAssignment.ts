// problem 01
// function formatString(input: string, toUpper?: boolean): string{
//     if(toUpper === false) {
//         return input.toLowerCase();
//     } else {
//         return input.toUpperCase();
//     }
// }
//
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

// problem 02
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
//     return items.filter((item) => item.rating >= 4);
// }
//
// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
// ];
//
// console.log(filterByRating(books));

//problem 03
// function concatenateArrays<T>(...arrays: T[][]): T[]{
//     return arrays.flat()
// }
//
// console.log(concatenateArrays(["a", "b"], ["c"]))
// console.log(concatenateArrays([1, 2], [3, 4], [5]))

//problem 04
// class Vehicle {
//     constructor(private make: string, private year: number) { }
//     getInfo(): string {
//         return (`Make: ${this.make}, year: ${this.year}`);
//     }
// }
//
// class Car extends Vehicle {
//     constructor(make: string, year: number, private model: string) {
//         super(make, year)
//     }
//
//     getModel(): string {
//         return `Model: ${this.model}`;
//     }
// }
//
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());


//problem 05
// function processValue(value: string | number): number{
//     if(typeof value === "number"){
//         return value * 2;
//     } if(typeof value === "string"){
//         return value.length
//     }
// }
//
// console.log(processValue("hello"));
// console.log(processValue(10));


//problem 06
// interface Product {
//     name: string;
//     price: number;
// }
//
// function getMostExpensiveProduct(products: Product[]): Product | null{
//
//     if (products.length === 0) {
//         return null;
//     }
//
//     let maxProduct = products[0];
//
//     for(let i = 1; i < products.length; i++) {
//         if(products[i].price > maxProduct.price) {
//             maxProduct = products[i];
//         }
//     }
//
//     return maxProduct;
// }
//
// const products = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 }
// ];
//
// console.log(getMostExpensiveProduct(products));

// problem 07
// enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
//
// function getDayType(day: Day): string{
//     if (day == Day.Sunday) return "Weekend"
//     else return "weekday"
// }
//
// console.log(getDayType(Day.Monday))
// console.log(getDayType(Day.Sunday))


//problem 08
// async function squareAsync(n: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//         if (n > 0) {
//             setTimeout(() => resolve(n * n), 1000);
//         } else {
//             reject("Negative number not allowed");
//         }
//     })
// }
//
// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);


