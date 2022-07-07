const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);
//input: callback
//output: array

//input: element ,index(optional), array(optional)
//output: new element


/* const mapResV1 = numbersList.map(el => {
  let newEl = null;
  if (index > 2) {
    newEl = el * el;
  } else {
    newEl = el;
  }
  return newEl;
}); */

const mapResV2 = numbersList.map((el, index) => index > 2 ? el * el : el);
console.log(mapResV2);

const mapResV3 = numbersList.map(item => item * item);
console.log(mapResV3);

//forEach
//input: requestIdleCallback;
//output: none

//callback
//input: element ,index(optional), array(optional)
//output: undefined
/* const forEachRes = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
}); */

//reduse
//input:callback,acc init value(optional)
//output:number

//callback:acc,element.index(opt),array(opt)
//input:new acc
/* const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];
const redusseSum = transactions.reduce((sum, el) => {
  console.log('sum', sum);
  console.log('el', el);
  if (el > 100) {
    return sum + el;
  }
  return sum;
}, 0
); */
const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];
const redusseSum = transactions.reduce((sum, el) =>
  (el > 100 ? sum + el : sum), 0);
console.log(redusseSum);  