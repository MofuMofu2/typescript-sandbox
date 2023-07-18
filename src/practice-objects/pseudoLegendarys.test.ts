import { createPseudoLegendaryInfo } from "./pseudoLegendarys";
import dragonite from "../assets/149.json";

it("600族のポケモンの情報をPokeAPIから取り出せる", () => {
  expect(createPseudoLegendaryInfo(dragonite)).toEqual({
    id: 149,
    name: "dragonite",
    types: ["dragon", "flying"],
  });
});
