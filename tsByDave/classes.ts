// class coder {
//     public readonly name: string;
//     public music: string;
//     private age: number;
//     protected lang: string = "Typescript"
//   constructor(
//   ) {}
//   public greet(): void {
//     console.log(`Hello ${this.name}`);
//   }
// }
//
// const Adnan = new coder("Adnan", "Classic", 22, "Bangla");
//
// console.log(Adnan.sex)
// console.log(Adnan.name)
//
// // console.log(Adnan.greet());
//
// class webDev extends coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }
//   public getLang() {
//     return this.lang;
//   }
// }
// const Nahid = new webDev("pc", "Adnan", "Classic", 22);
// // console.log(Nahid.getLang());
//
// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }
// class Guitarist implements Musician {
//   constructor(public name: string, public instrument: string) {}
//
//   play(action: string): string {
//     return `${this.name} is ${action} the ${this.instrument}`;
//   }
// }

// class Bands {
//     constructor(private dataState: string[]) {}
//
//     // Getter
//     get data(): string[] {
//         return this.dataState;
//     }
//
//     // Setter
//     set data(data: string[]) {
//         if (Array.isArray(data)) {
//             this.dataState = data;
//         } else {
//             throw new Error('Invalid data');
//         }
//     }
// }
//
// const artcell = new Bands([]);
// artcell.data = ["tomake", "amar"]
// console.log(artcell.data)

// const person = {
//     name: "adnan",
//     age: 21
// }
//
// console.log(keyof Person)
