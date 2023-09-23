type AnimalModel = {
  name: string;
  kind: string;
};

class Animal {
  constructor(animal: AnimalModel) {
    console.log(`${animal.name} is ${animal.kind}.`);
  }
}

const cat = new Animal({ name: "Cat", kind: "mammal" });
const dog = new Animal({ name: "Dog", kind: "mammal" });
