//Object

const userInfo: {
    companyInfo: "Programming Hero" // literal type
    readonly firstName: string;     // readonly
    lastName: string;
    age?: number;                   // optional type
    email: string;
    number: number | string;
} = {
    companyInfo: "Programming Hero",
    firstName: "Adnan",
    lastName: "Nahid",
    email: "nahidhasan@gmail.com",
    number: 1736932170,
}

// userInfo.firstName = "Nahid";
userInfo.lastName = "Hasan";
console.log(userInfo);