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

class Model extends Car {
    constructor(brand, year, owner, mod) {
        super(brand, year, owner); //the super method refers tothe parent class
        this.model = mod; //by calling the super() method, we call the parents 
    } //method and get access to the parents properties and methods;
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

let deesCar = new Car("BMW", "2016", "Deondra");
let myCar = new Model("Toyota", "2009", "Margie", "Carola");
// (deesCar.present());
// Car.hello();
console.log(myCar)