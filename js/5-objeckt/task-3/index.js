//algo
//1.get keys 1 , keys 2\
//2.if length1 !== length2
//itaerate keys1/value1 with  keys2/value2
//compare values1 values 2
//if (step4 === false)

function compareObjects(obj1, obj2) {
  const keysFirstObj = Object.keys(obj1);

  if (keysFirstObj.length !== Object.keys(obj2).length) {
    return false;
  }
  return !keysFirstObj.some(key => obj1[key] !== obj2[key]);
}


const a = { "name": "simon", "age": 5, "loc": 'NG' };
const b = { "name": "simon", 'NG': "loc", "age": 5, "sex": "male" };
const c = { "name": "okorie", "age": 7, "loc": 'NG', "sex": "male" };
const d = { "name": "simon", "age": 5, "loc": 'NG', "sex": "male" };
console.log(compareObjects(a, b));
