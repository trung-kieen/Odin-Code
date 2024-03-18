import { KnightTravails } from "./KnightTravails.js";
import { Polar, convertToIndex } from "./ultis.js";


let polar1 = new Polar( 0 , 0);
let polar2 = new Polar( 3 , 3);
const game = new KnightTravails(convertToIndex(polar1), convertToIndex(polar2));

game.saveGraph();
// console.log(game.path);
let routes = game.traceRoutes();
console.log(routes);
