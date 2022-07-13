/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
//input:object,string,value
//output:object

function addPropertyV1(obj, key, value) {
  // put your code here
  obj[key] = value;
  return obj;
}
const transaction = {
  value: 170,
};
const transactionV2 = {
  value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(addPropertyV1(transaction, 'currency', transactionV2));
console.log(addPropertyV1(transaction, 233445, 'undefined'));

//input:target object.obj1 ,obj2, ...onjN
//output: object
// put your code here
function addPropertyV2(obj, key, value) {
  // put your code here
  return Object.assign(obj, { [key]: value });
}
console.log(addPropertyV2(transaction, 'currency', 'USD'));
console.log(addPropertyV2(transaction, 'currency', transactionV2));
console.log(addPropertyV2(transaction, 233445, 'undefined'));

// put your code here
function addPropertyV3(obj, key, value) {
  // put your code here
  return Object.assign({}, obj, { [key]: value });
}
const transactionV3 = {
  value: 170,
};
const res1 = addPropertyV3(transactionV3, 'currency', 'USD');
const res2 = addPropertyV3(res1, 'value', 300);

console.log('result test 1', res1);
console.log('result test 1', res2);
console.log('obj after', transactionV3);
// put your code here
function addPropertyV4(obj, key, value) {
  // put your code here
  return { ...obj, [key]: value };
}
const res3 = addPropertyV4(transactionV3, 'currency', 'USD');
const res4 = addPropertyV4(res1, 'value', 300);

console.log('result test 1', res3);
console.log('result test 1', res4);
console.log('obj after', transactionV3);

