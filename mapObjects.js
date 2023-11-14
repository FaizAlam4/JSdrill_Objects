export function map(object, cb) {
  let newmap=[];
  for (let ele in object) {
    newmap.push(cb(object[ele]));
  }
  return newmap;
}
