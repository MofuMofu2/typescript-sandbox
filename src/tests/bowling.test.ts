import { frame, frames, spare } from "../bowling";

test("ストライクでもスペアでもないときは2投分を足し算した結果を返す", () => {
  expect(frame(6, 3)).toBe(9);
});

test("複数フレームの足し算した結果を返す", () => {
  expect(
    frames([
      [6, 3],
      [7, 1],
    ])
  ).toBe(17);
});

test("スペアの場合、次フレームの1投目を足し算する", () => {
  expect(
    spare([
      [6, 3],
      [8, 2],
      [7, 1],
    ])
  ).toBe(26);
});
