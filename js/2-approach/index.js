// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution
/**
 * @param {number} num
 * @return {undefined}
 */

//1.iterate from 2 to num 
//2.chech if N is prime
//2.1 iterate from 2 from to N
//2.2 if N % index === 0 then Not prime
//3 if prime -prime;

function ifPrimes(number) {
    let isPrime = true;
    for (let index = 2; index < number; index += 1) {
        if (number % index === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

function getPrimes(num) {
    // put your code here
    for (let number = 2; number <= num; number += 1) {
        if (ifPrimes(number)) {
            console.log(number);
        }
    }
}

getPrimes(100);
getPrimes();
getPrimes(-8);
getPrimes(-8);
getPrimes(-8);

