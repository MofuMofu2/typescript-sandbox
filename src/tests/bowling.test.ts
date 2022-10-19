import { frame } from "../bowling"

test('ストライクでもスペアでもないときは2投分を足し算した結果を返す', () => {
  expect(frame(6, 3)).toBe(9)
});
