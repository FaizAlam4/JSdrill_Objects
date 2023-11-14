export function invert(invertObject) {
    let result={};
    for (let obj in invertObject) {
      let newValue=obj;
      obj=invertObject[newValue];
      invertObject[newValue]=newValue;
      result[obj]=invertObject[newValue];
       
    }
    return result;
    
  }
  