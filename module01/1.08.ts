// object destructuring

const userInfo = {
    companyInfo: "Programming Hero",
    name: {
        firstName: "Adnan",
        lastName: "Nahid",
    },
    email: "nahidhasan@gmail.com",
    number: 1736932170,
}

const {
    companyInfo,
    name: {firstName: firstname}
} = userInfo

// Array destructuring
const myFriend = ['Adnan', 'Nahid', "Hola"]
const [a, b, c] = myFriend
const [aa, ...d] = myFriend
console.log(d)