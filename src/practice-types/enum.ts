// Numeric enums
enum KantoPokemon {
  Bulbasaur = 1,
  Ivysaur,
  Venusaur,
}

const firstPokemon = KantoPokemon.Bulbasaur;

console.log(firstPokemon); // 1

// as constを使って書き換える

// 配列を宣言する
const johtoPokemon = ["Chikorita", "Bayleef", "Meganium"];

// as constキーワードで 反復処理可能なunion型を生成する
type JohtoPokemon = typeof johtoPokemon[number];

// 配列に直接アクセスする
console.log(johtoPokemon[0]); // Chikorita
