type AnimalModel = {
  name: string;
  kind: string;
};

class Animal {
  name: string;
  kind: string;
  constructor(animal: AnimalModel) {
    this.name = animal.name;
    this.kind = animal.kind;
  }
}

const cat = new Animal({ name: "Cat", kind: "mammal" });
const dog = new Animal({ name: "Dog", kind: "mammal" });

console.log(`${cat.name} is ${cat.kind}.`);
console.log(`${dog.name} is ${dog.kind}.`);
