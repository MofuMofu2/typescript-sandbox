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
  expect(operator.through3).toEqual([
    { id: 149, name: "dragonite", types: ["dragon", "flying"] },
    { id: 248, name: "tyranitar", types: ["rock", "dark"] },
    { id: 373, name: "salamence", types: ["dragon", "flying"] },
    { id: 376, name: "metagross", types: ["steel", "psychic"] },
  ]);
});

it("第五世代までの600族のポケモンの配列を返す", () => {
  expect(operator.through5()).toEqual([
    { id: 149, name: "dragonite", types: ["dragon", "flying"] },
    { id: 248, name: "tyranitar", types: ["rock", "dark"] },
    { id: 373, name: "salamence", types: ["dragon", "flying"] },
    { id: 376, name: "metagross", types: ["steel", "psychic"] },
    { id: 445, name: "garchomp", types: ["dragon", "ground"] },
    { id: 635, name: "hydreigon", types: ["dark", "dragon"] },
  ]);

  // 第三世代のポケモンの配列の中身に影響はない
  expect(operator.through3).toEqual([
    { id: 149, name: "dragonite", types: ["dragon", "flying"] },
    { id: 248, name: "tyranitar", types: ["rock", "dark"] },
    { id: 373, name: "salamence", types: ["dragon", "flying"] },
    { id: 376, name: "metagross", types: ["steel", "psychic"] },
  ]);
});
