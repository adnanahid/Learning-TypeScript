//abstraction 1.interface 2.abstract
// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }
//
//
// class Car implements Vehicle {
//     startEngine(): void {
//         console.log('Starting Car');
//     }
//     stopEngine() {
//         console.log('Stopping Car');
//     }
//     move() {
//         console.log('Moving Car');
//     }
//     test() {
//         console.log('Testing Car');
//     }
// }
//
// const toyotaCar = new Car();
// toyotaCar.startEngine();

abstract class Car2 {
    abstract startEngine(): void
    abstract stopEngine()
    abstract move()
    test() {
        console.log('Testing Car');
    }
}

// const hondaCar = new Car2();
class Car3 extends Car2{
    startEngine() {
        console.log('StartEngine');
    }
    stopEngine() {
        console.log('StopEngine');
    }
    move() {
        console.log('Move');
    }
}

const hondaCar = new Car3();
hondaCar.startEngine();
