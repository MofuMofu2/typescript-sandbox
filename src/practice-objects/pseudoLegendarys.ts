import { PokeAPI } from "./pokeapi";
import dragonite from "../assets/149.json";
import tyranitar from "../assets/248.json";
import salamence from "../assets/373.json";
import metagross from "../assets/376.json";

type PseudoLegendary = {
  id: number; // 図鑑番号
  name: string; // ポケモン
  types: string[]; // タイプ
};

export const createPseudoLegendaryInfo = (param: PokeAPI): PseudoLegendary => {
  return {
    id: param.id,
    name: param.name,
    types: param.types.map((type) => type.type.name),
  };
};

export const through3 = (): PseudoLegendary[] => {
  return [
    createPseudoLegendaryInfo(dragonite),
    createPseudoLegendaryInfo(tyranitar),
    createPseudoLegendaryInfo(salamence),
    createPseudoLegendaryInfo(metagross),
  ];
};
