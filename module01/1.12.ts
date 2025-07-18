// nullable type
const searchName = (value: string | null) =>{
    if(value){
        console.log("searching");
    } else {
        console.log("There is nothing to search");
    }
}

searchName(null)

// unknown type
const getContact = (value: unknown) =>{
    if(typeof value === "string"){
        console.log("string");
    } else if (typeof value === "number"){
        console.log("number");
    } else {
        console.error("Unrecognized value");
    }
}

getContact(45654);

//never type
const throwError = (msg: string) =>{
    throw new Error(msg);
}