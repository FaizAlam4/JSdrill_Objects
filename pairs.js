export function pairs(objects) {
  let arr = [];
  for (let object in objects) {
    arr.push([object, objects[object]]);
  }

  return arr;
}
