// type alias

type UserInfo = {
    name: string;
    age: number;
    email?: string;
    contact?: number;
    isAdmin?: boolean;
    isUser?: boolean;
}

const user01: UserInfo = {
    name: "Adnan",
    age: 22,
    email: "nahidhasan@gmail.com",
    isAdmin: true,
}

type Add = (num1: number, num2:number) => number;
const add: Add = (num1, num2) => num1 + num2