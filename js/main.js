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
    human.age > 18 ? this.owner = human: console.log('Cannot add owner due to young age of peron');
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