import { PokeAPI } from "./src/practice-objects/pokeapi";

declare module "*.json" {
  const json: PokeAPI;
  export default json;
}
