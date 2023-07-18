import * as operator from "./pseudoLegendarys";
import dragonite from "../assets/149.json";

it("600族のポケモンの情報をPokeAPIから取り出せる", () => {
  expect(operator.createPseudoLegendaryInfo(dragonite)).toEqual({
    id: 149,
    name: "dragonite",
    types: ["dragon", "flying"],
  });
});

it("第三世代までの600族のポケモンの配列を返す", () => {
  expect(operator.through3()).toEqual([
    { id: 149, name: "dragonite", types: ["dragon", "flying"] },
    { id: 248, name: "tyranitar", types: ["rock", "dark"] },
    { id: 373, name: "salamence", types: ["dragon", "flying"] },
    { id: 376, name: "metagross", types: ["steel", "psychic"] },
  ]);
});
