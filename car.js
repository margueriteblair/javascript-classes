class Car {
    constructor(brand, year, owner) {
        this.carname = brand;
        this.year = year;
        this.owner = owner;
    }
    present() {
        console.log(`${this.owner} has a ${this.carname}`)
    }
    additionalInformation(snippet) {
        console.log(`${snippet}. Hope you like it!`)
    }
    static hello() { //a static method is applied to the class itself, not to the instance
        console.log("Hello World")
    }
}

let deesCar = new Car("BMW", "2016", "Deondra");
(deesCar.present());
Car.hello();