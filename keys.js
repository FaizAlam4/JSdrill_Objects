export function keys(testObject) {
  let arr = [];
  for (let obj in testObject) {
    arr.push(obj);
  }
  return arr;
}
