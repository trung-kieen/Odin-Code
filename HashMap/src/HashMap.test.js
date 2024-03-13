import expect from "expect";
import { HashMap } from "./HashMap";
import ExportedCompatObject from "core-js-compat";

// test("String set value for node", () => {
//   const hashMap = new HashMap();
//   hashMap.set("name", "Kien");
//   expect(hashMap.get("name")).toBe("Kien");
// });

test("Hash map buckets elemnt is a list", () => {
  let hashMap = new HashMap();
  expect(Array.isArray(hashMap.buckets)).toBe(true);
  expect(Array.isArray(hashMap.buckets[0])).toBe(true);
});

test("Hash map size grow dynamicly when set new and remove node", () => {
  let hashMap = new HashMap();
  expect(hashMap.length()).toBe(0);

  hashMap.set("Key", "value");
  expect(hashMap.length()).toBe(1);

  hashMap.remove("Not a valid key")
  expect(hashMap.length()).toBe(1);

  hashMap.remove("Key")
  expect(hashMap.length()).toBe(0);
})

test("Clear hash map will reset state of all bucket and size of hashmap", () => {
  let hashMap = new HashMap();
  hashMap.set("Key", "value");
  hashMap.set("Key1", "value2");
  hashMap.set("Key2", "value3");
  hashMap.set("Key3", "value4");
  expect(hashMap.length()).toBe(4);
  hashMap.clear();
  expect(hashMap.length()).toBe(0);
  expect(Array.isArray(hashMap.buckets[3])).toBe(true);
  expect(hashMap.buckets[3].length).toBe(0);

})


// NOTE: this is deplecate now use type safe by use module operator in
// side set method
// test("Hash code will a valid number from 0-15", () => {
//   let hashMap = new HashMap();
//   expect(hashMap._hash("name")).toBeLessThan(16);
//   expect(hashMap._hash("name")).toBeGreaterThan(-1);
// })


test("Set and get same key will have the same value", () => {
  let hashMap = new HashMap();
  hashMap.set("name", "jon");
  expect(hashMap.get("name")).toBe("jon");
})

test("When collision have the same key value the new node set will override old node value", () => {
  let hashMap = new HashMap();
  hashMap.set("name", "jon");
  hashMap.set("name", "danny");
  expect(hashMap.get("name")).toBe("danny");
  expect(hashMap.length()).toBe(1);
})


test("Key list will contain all node key add to it", () => {
  let hashMap = new HashMap();
  hashMap.set("name", "jon");
  hashMap.set("age", "ten");
  let keys = hashMap.keys();
  expect(keys).toContain("name");
  expect(keys).toContain("age");
})

test("Value list will contain all node value add to it", () => {
  let hashMap = new HashMap();
  hashMap.set("name", "jon");
  hashMap.set("age", "ten");
  let values = hashMap.values();
  expect(values).toContain("jon");
  expect(values).toContain("ten");
})



test("HashMap must grow up when execeed over it rate ", () => {
  let hashMap = new HashMap();
  const keyList = [];
  for (let i = 0; i < 50; i++) {
    const key = i.toString();
    keyList.push(key);
    hashMap.set(key, key);
  }

  expect(hashMap.length()).toBe(50);
  const hashMapKeyList = hashMap.keys()
  keyList.forEach(key => {
    expect(hashMapKeyList).toContain(key);
  })
})
