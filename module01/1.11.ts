// ternery operator || optional chaining || nullish coalescing

const age: number = 21;
const isAdult = age >= 18 ? "Adult" : "Child"
console.log({isAdult})


//optional chaining
type user = {
    name: string;
    address: {
        road: string;
        city: string;
        state: string;
        zipcode?: string;
    },
    age: number;
}

const userOne:user = {
    name: 'Adnan',
    address: {
        road: 'nirala road no 07',
        city: 'Khulna Sadar',
        state: 'Khulna'
    },
    age: 25,
}

const zipcode = userOne?.address?.zipcode ?? "No zipcode available";
console.log({zipcode});



// nullish coalescing
// it used when I need to make a decision based on null and undefine value

const isAuthenticated = null;
const user1 = isAuthenticated ?? "Guest";
console.log(user1);
