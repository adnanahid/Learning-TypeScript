const bros1 = ["nahid", "sajib"]
const bros2 = ["sabbir", "hasib"]

bros1.push(...bros2)

const info = {
    name: "Nahid",
    age: 22,
}

const contact = {
    email: "nahidhasan@gmail.com",
    number: 54654568,
}

const userInf = {
    ...info,
    ...contact
}

