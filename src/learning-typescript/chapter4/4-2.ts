type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};

// WithLastNameのパラメータも含んでいるが構造的型付けによりエラーにならない
let withFirstName: WithFirstName = hasBoth;

// 出力結果
// {
//   "firstName": "Lucille",
//   "lastName": "Clifton"
// }
console.log(withFirstName);
let withLastName: WithLastName = hasBoth;

// 出力結果
// {
//   "firstName": "Lucille",
//   "lastName": "Clifton"
// }
console.log(withLastName);
