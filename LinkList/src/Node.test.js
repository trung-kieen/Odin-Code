import { Node } from "./Node";
test("String set value for node", () => {
  const node = new Node("something");
  expect(node.value).toBe("something");
});
