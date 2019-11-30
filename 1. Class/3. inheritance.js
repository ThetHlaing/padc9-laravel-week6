// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Implement Dog class
// speak function of Dog should display a different content than Animal

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speak`);
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
    this.tooth = 30;
  }

  speak(){
    super.speak();
    console.log("Do nth here")
  }

  
}


let d = new Dog('Mitzie');
console.log(d.tooth,d.name);
d.speak(); //This function should return the result of both parent and child functions
