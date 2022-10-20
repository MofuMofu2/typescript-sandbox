import { frame, frames, spare } from "../bowling";

test("ストライクでもスペアでもないときは2投分を足し算した結果を返す", () => {
  expect(
    frame({
      first: 6,
      second: 3,
    })
  ).toBe(9);
});

test("複数フレームの足し算した結果を返す", () => {
  expect(
    frames([
      {
        first: 6,
        second: 3,
      },
      {
        first: 7,
        second: 1,
      },
    ])
  ).toBe(17);
});

test("スペアの場合、次フレームの1投目を足し算する", () => {
  expect(
    spare([
      {
        first: 6,
        second: 3,
      },
      {
        first: 8,
        second: 2,
      },
      {
        first: 7,
        second: 1,
      },
    ])
  ).toBe(26);
});
