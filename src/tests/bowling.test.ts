import { strike } from "../bowling";

test("ストライクでもスペアでもないときは2投分を足し算した結果を返す", () => {
  expect(
    strike([
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
    strike([
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
  ).toBe(34);
});

test("ストライクの場合、次フレームの2投分を足し算する", () => {
  expect(
    strike([
      {
        first: 6,
        second: 3,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 7,
        second: 1,
      },
    ])
  ).toBe(35);
});

test("10フレーム全てストライクだと300点", () => {
  expect(
    strike([
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 0,
      },
      {
        first: 10,
        second: 10,
        third: 10, // 10フレーム目はストライクをとると3回まで投げられる
      },
    ])
  ).toBe(300);
});
