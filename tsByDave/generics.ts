// const info = <T extends {id:number; name: string}>(info:T):T[] =>{
//   return [info]
// }
//
// const stu1 = info({id:1,name:"Adnan", email:"nahid@gmail.com"})
//
// console.log(stu1)


type Vehicle = {
  bike: string;
  car: string;
  ship: string;
}
const hehas = {
  bike: "bike",
  car: "car",
  ship: "ship",
}

type a = typeof hehas;