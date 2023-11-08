class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  humanInfo() {
    console.log('Name: ' + this.name + '; ' + 'Age: ' + this.age);
  }
}

class Car {
  constructor(brand, model, year, engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;
  }
  owner;
  
  addOwner(human) {
    human.age > 18 ? this.owner = human: console.log('Cannot add owner due to young age of person');
  }

  carInfo() {
    console.log('Car details: ' + 'Car Brand: ' + this.brand + '; Model: ' + this.model + '; Year ' + this.year + '; Engine Volume ' + this.engineVolume);
    if(this.owner) {
      console.log('Owner:');
      this.owner.humanInfo();
    } else {
      console.log('This car without owner');
    }
  }
}

const personOne = new Human('Sergii', 30);
const personTwo = new Human('Ihor', 19);
const personThree = new Human('Vlad', 15);

const carVolkswagen = new Car('Volkswagen', 'Passat', 2016, '2.0 ltrs');
carVolkswagen.addOwner(personTwo);
carVolkswagen.carInfo();

const carBmw = new Car('BMW', 'X5', 2010, '3.0 ltrs');
carBmw.addOwner(personThree);
carBmw.carInfo();

const carAudi = new Car('Audi', 'RS 7', 2023, '4.0 ltrs');
carAudi.addOwner(personOne);
carAudi.carInfo();