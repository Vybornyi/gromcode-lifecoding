/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
//1.create new obj
//2.iterate keylist
//3.iterate valuylist
function buildObject(keysList, valuesList) {
  // put you code here
  const obj = {};
  for (let i = 0; i < keysList.length; i += 1) {
    obj[keysList[i]] = valuesList[i];
    /* obj = { ...obj, [keysList[index]]: valuesList[index] }; */
  }
  return obj;
}
/* function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
} */


// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);



//input :obj obj
//output bool

//algo
//1.get keys 1 , keys 2\
//2.if length1 !== length2
//itaerate keys1/value1 with  keys2/value2
//compare values1 values 2
//if (step4 === false)