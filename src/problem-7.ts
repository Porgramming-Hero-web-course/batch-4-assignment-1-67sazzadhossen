// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge(): number {
    return new Date().getFullYear() - this.year;
  }
}

const currentYear = new Date().getFullYear();
const car = new Car("Honda", "Civic", 2018);
const carAge = car.getCarAge();
console.log(carAge, `(assuming current year is ${currentYear})`)