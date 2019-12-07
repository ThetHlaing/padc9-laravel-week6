class Dog {

  constructor(image, breed, name) {
    this.image = image;
    this.breed = breed;
    this.name = name;
    this.detailTemplate = document.getElementById("dog-detail-template").innerHTML;
  }

  display() {
    const result = this.detailTemplate
      .replace("{{this.image}}", this.image)
      .replace("{{this.breed}}", this.breed)
      .replace("{{this.name}}", this.name);

    return result;
  }
}

class Utility {
  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
}

const another_util = {
  some_val : 'testing'
}
//export default Dog;
export { Dog, Utility , another_util };