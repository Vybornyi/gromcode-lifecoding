
//function 2
function getSenseOfLife() {
    return 42;
}
//test data
console.log(getSenseOfLife());

//function 2
function getSquared(number) {
    return number * number;
}
//test data
console.log(getSquared(2));

//function 3 
function sum(firstNum, secondNum) {
    return firstNum + secondNum;

}
//test data
console.log(sum(3, 6));

//function 4 
function printMessage(number) {
    return `I am ${number} years old`;

}
//test data
console.log(printMessage(3));

//func 5

function sumFunc(from, to) {
    let result = 0;
    for (let index = from; index <= to; index += 1) {
        result += index;
    }
    return result;
}
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
    return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo);
}
//test data
console.log(compareSums(4, 6, 7, 9));


//function 6 
const mult = (firstNumber, secondNumber) =>
    firstNumber * secondNumber;


//test data
console.log(mult(3, 6));


//function 7 
const getSquaredArrow = num => num * num;


//test data
console.log(getSquaredArrow(3, 6));
//function 8 
const getMagicNumber = () => 17;


//test data
console.log(getMagicNumber());
console.log(getMagicNumber(1));
console.log(getMagicNumber("ssfsdf"));