type User = {
  name: string;
  id: number;
  active: boolean;
};

const user: User = {
  name: "mofu",
  id: 1,
  active: true,
};

console.log(user);

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "aoko",
  age: 31,
};

console.log(person);
