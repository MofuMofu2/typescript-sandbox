import { PokeAPI } from "./pokeapi";

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
