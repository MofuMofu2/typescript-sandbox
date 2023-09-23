type AnimalModel = {
  name: string;
  kind: string;
};

class Animal {
  animal: AnimalModel;
  constructor(animal: AnimalModel) {
    this.animal = animal;
    console.log(`${animal.name} is ${animal.kind}.`);
  }
}

const cat = new Animal({ name: "Cat", kind: "mammal" });
const dog = new Animal({ name: "Dog", kind: "mammal" });
