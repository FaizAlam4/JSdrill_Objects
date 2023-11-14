export function values(testObject) {
  let answer = [];
  for (let obj in testObject) {
    answer.push(testObject[obj]);
  }
  return answer;
}
