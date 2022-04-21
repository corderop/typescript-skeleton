import sum from "../src/index"

test("2+4 it's 6", () => {
  const result = sum(2, 4)
  const expected = 6

  expect(result).toBe(expected)
})
