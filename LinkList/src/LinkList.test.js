import expect from "expect";
import { LinkList } from "./LinkList";


// Check jest is working
test("Normal test", () => {
  expect("name").toBe("name");
});
test("Number test", () => {
  expect(1 + 3).toBe(4);
});




// Size test
test("Link list start size ", () => {
  const myList = new LinkList();
  expect(myList.size()).toBe(0);
});
test("Link list change size when add more element at the end", () => {
  const myList = new LinkList();
  myList.append(123);
  expect(myList.size()).toBe(1);
  myList.append(null);
  expect(myList.size()).toBe(2);
  myList.append(undefined);
  expect(myList.size()).toBe(3);
  myList.append("Something");
  expect(myList.size()).toBe(4);
});

test("Check value each position after add more element at the end", () => {
  const myList = new LinkList();
  myList.append(123);
  expect(myList.at(0)).toBe(123);
  myList.append(null);
  // expect(myList.at(1)).toBeNull();
  myList.append(undefined);
  expect(myList.at(2)).toBeUndefined();
  myList.append("Something");
  expect(myList.at(3)).toEqual("Something");
});


test("Link list change size when add more element at the start", () => {
  const myList = new LinkList();
  myList.prepend(123);
  expect(myList.size()).toBe(1);
  myList.prepend(null);
  expect(myList.size()).toBe(2);
  myList.prepend(undefined);
  expect(myList.size()).toBe(3);
  myList.prepend("Something");
  expect(myList.size()).toBe(4);
});


test("Check value each position after add more element at the start", () => {
  const myList = new LinkList();
  myList.prepend(123);
  expect(myList.at(0)).toBe(123);
  myList.prepend(null);
  expect(myList.at(0)).toBeNull();
  myList.prepend(undefined);
  expect(myList.at(0)).toBeUndefined();
  myList.prepend("Something");
  expect(myList.at(0)).toEqual("Something");
});


// Remove node from list
test("Remove/pop element out from list", () => {
  const myList = new LinkList();
// Add new element
  myList.append("Something");
  myList.append("Something");
  myList.pop();
  expect(myList.size()).toBe(1);

  myList.pop();
  expect(myList.size()).toBe(0);

});
