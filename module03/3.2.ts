class Preson {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(hours: number) {
        console.log(`${this.name} will sleep for ${hours}`);
    }
}


class Teacher extends Preson {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClass(sub: string) {
        return (`${this.designation} ${this.name} will take class on ${sub}`);
    }
}

const teacher1 = new Teacher("Adnan", 22, "Khulna", "Professon");
const todayClass: string = teacher1.takeClass("Physics")
console.log(todayClass);