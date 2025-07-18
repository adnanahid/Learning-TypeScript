// generic type

// const roleNumbers: number[] = [2, 5, 65];
// const roleNumbers: Array<number> = [2, 5, 65];
// const mentors: string[] = ["mr.x", "mr.y"];
// const mentors: Array<string> = ["mr.x", "mr.y"];
// const boolArray: Array <boolean> = [true, false, false];

// function add<T extends number, S extends number>(value1: T, value2: S): number {
//     return value1 + value2;
// }

// add(2, 4);

interface ApiResponse<t> {
  status: number;
  type: string;
  data: t;
}

const res1: ApiResponse<object> = {
  status: 200,
  type: "success",
  data: {
    name: "Adnan",
    age: 21,
  },
};
