// polymorphisom

class Person{
    getSleep(){
        console.log("I'm sleeping");
    }
}

class Student extends Person{
    getSleep(){
        console.log("I'm sleeping 7");
    }
}

class Developer extends Person{
    getSleep(){
        console.log("I'm sleeping 6");
    }
}

const getSleepingHour = (params: Person) => {
    params.getSleep();
}

const person = new Person();
const student = new Student();
const developer = new Developer();

getSleepingHour(person);
getSleepingHour(student);
getSleepingHour(developer);


class Shape {
    getArea(): number{
        return 0;
    }
}

class Circle extends Person{
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius;
    }
    getArea(): number{
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Person{
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height * this.width;
    }
}

const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(25);
const shape3 = new Rectangle(21, 54);

getShapeArea(shape1);
getShapeArea(shape2);
getShapeArea(shape3);