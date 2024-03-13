import expect from "expect";
import { Polar, getAdjacencyList } from "./ultis";


test("Number move can go in bound of dardboard", () => {
let polar1 = new Polar(1,  0);
expect(getAdjacencyList(polar1).length).toBe(3);
let polar2 = new Polar(0,  0);
expect(getAdjacencyList(polar2).length).toBe(2);
let polar3 = new Polar(0,  4);
expect(getAdjacencyList(polar3).length).toBe(4);
})
