interface Vehicle {
  make: string; // The manufacturer of the vehicle (e.g., Toyota, Ford)
  model: string; // The model of the vehicle (e.g., Corolla, Mustang)
  year: number;
  myCar: string;
  Car: string; // The year the vehicle was made

  // The start method is a function that doesn't return any value (void) and logs a message.
  start(): void;
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
  myCar!: string;
  Car: string;

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla sprinter", 2021);

myCar.start();
