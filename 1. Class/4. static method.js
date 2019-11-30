// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speak`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    super.speak();
    console.log(`${this.name} bark`);
  }

  static anotherMethod(){

  }

  static somemethod() {
    console.log("Static method trigger");
    Dog.anotherMethod()
  }

}

// const newDog = new Dog();
// newDog.speak();

Dog.somemethod();