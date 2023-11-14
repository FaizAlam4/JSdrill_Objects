import { defaults } from "./defaults.js";

let myObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
let props = { name: "Faiz", class: 12 };
defaults(myObject, props);
console.log(defaults(myObject, props));
