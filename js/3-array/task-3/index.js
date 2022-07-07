//input:array, callback
//output: new array

//callback
//input :el, index(optional), array (optional)
//output: boolean
//algo
//1.create new array
//2.iterate input arr
//3.apply callback for every el 
//4.if true -push
const filterArrayElements = (arr, callback) => {
  // put you code here
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      resArr.push(arr[index]);
    }
  }
  return resArr;
};
const testArr = [1, 2, 11, 0, -5, 5, 4, 22, 8, NaN];
const findOddEll = num => num % 2 === 0;

const callback = (el, index) => {
  if (el > 10 && index > 5) {
    return true;
  }
  return false;
};
const filterRes = filterArrayElements(testArr, callback);


//--multiply
//number1,number2
//number
function multiply(...args) {
  return args.reduce((acc, el) => acc * el);
}

//1.create new array
//2.iterate input arr
//3.apply callback for every el and push callback res to arr
//4.return arr
const mapArrayElements = (arr, callback) => {
  // put you code here
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    resArr.push(callback(arr[index], index));
  }
  return resArr;
};
const exponentOddNumbers = (arrElement, index, entireArr) => {
  if (arrElement % 2 === 0 && index > 3 && Array.isArray(entireArr)) {
    return arrElement * arrElement;
  } else {
    return arrElement;
  }
};
const testArr2 = [2, - 0, 7, 22, 6, 8];
console.log(mapArrayElements(testArr2, exponentOddNumbers));

