function getLastElement<T>(arr: Array<T>) {
  return arr[arr.length - 1];
}

const pokemon = ["ピチュー", "ピカチュウ", "ライチュウ"];

console.log(getLastElement(pokemon));
