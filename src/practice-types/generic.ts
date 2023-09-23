function getLastElement<T>(arr: Array<T>): T | null {
  return arr.length > 0 ? arr[arr.length - 1] : null;
}

const pokemon = ["ピチュー", "ピカチュウ", "ライチュウ"];

console.log(getLastElement(pokemon));
console.log(getLastElement([]));
