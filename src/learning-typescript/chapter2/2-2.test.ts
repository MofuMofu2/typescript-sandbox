import { updateName } from "./2-2";

it("引数の名前で戻り値が更新される", () => {
  expect(updateName("Joan")).toBe("Joan");
});
