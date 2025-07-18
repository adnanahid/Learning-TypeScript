// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
//
// console.log(sumAll(undefined, 3)
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(10, 2, 3));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const ret = (a: number | string) => {
  return a;
};

const img = document.getElementById("#img")!;
