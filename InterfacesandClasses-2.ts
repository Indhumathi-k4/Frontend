interface Vehicle {
    startEngine(): string;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): string {
        return `The engine of the ${this.year} ${this.make} ${this.model} is now running.`;
    }
}


let myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.startEngine());