// maped type
const arrayOfNumbers: number[] = [1, 2, 3, 4];

type areaNumber = {
  height: number;
  width: number;
};

type areaString = {
  [key in keyof areaNumber]: string;
};

const areaStr:areaString = {
    height: '50',
    width: '50'
}

type UserInfo<T> = {
  [key in keyof T]: T[key];
};

const Adnan: UserInfo<{ name: string; age: number }> = {
  name: "Adnan Nahid",
  age: 22,
};
