export function defaults(myObjects, props) {
  for (let object in props) {
    if (myObjects[object] == undefined || myObjects[object] != props[object]) {
      myObjects[object] = props[object];
    }
  }
  return myObjects;
}
