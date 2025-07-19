// instanceof guard

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`I am barking`);
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark() {
        console.log(`I am barking`);
    }
}
const dog = new Dog('Dog bhai', 'mammal')

class Cat extends Animal {
    public color: string;
    constructor(name: string, species: string, color: string) {
        super(name, species);
        this.color = color
    }

    makeMeow() {
        console.log(`I am meowing`);
    }
}
const cat = new Cat('Cat bhai', 'mammal', 'black')

const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
        animal.makeBark()
    }
}

getAnimal(cat);

interface User {
    name: string;
}

function check(params:User){
    return (`Hi, I'm ${params.name}!`);
}

const adnan = { name: "Adnan", age: 21 };
console.log(check(adnan));