import { map } from "./mapObjects.js";

const mapObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };


  function cb(propValue){
   return propValue+"-Modified!";
  }

console.log(map(mapObject, cb));
