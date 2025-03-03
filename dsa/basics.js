// Question 1: Sum of all natural numbers from 1 to n

function sumOfNaturalNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function sumOfNaturalNumberOptimized(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfNaturalNumber(100));
console.log(sumOfNaturalNumberOptimized(100));

// Question 2: Sum of digits of a number
function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function sumOfDigitsOptimized(n) {
  return String(n)
    .split('')
    .reduce((acc, curr) => {
      return (acc += Number(curr));
    }, 0);
}

console.log(sumOfDigits(101));
console.log(sumOfDigitsOptimized(101));

// [Question 3]: Count the number of digits of a number

function numberOfDigits(n) {
  return String(Math.abs(n)).length;
}

function numberOfDigitsOpt(n) {
  n = Math.abs(n);
  let length = 0;

  while (n >= 1) {
    length++;
    n = Math.floor(n / 10);
  }

  return length;
}

console.log(numberOfDigits(12212));
console.log(numberOfDigitsOpt(-10232));

// [Question 4]: Check if a number is palindrome

function isPalindrome(n) {
  return String(n) === String(n).split('').reverse().join('');
}

function isPalindromeOpt(n) {
  let originalnum = n;
  let reverseNum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return originalnum === reverseNum;
}

console.log(isPalindrome(12321));
console.log(isPalindromeOpt(12321));

// [Question 5]: Find nth Fibonacci number

function fibonacciOfNum(n) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;

  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
}

console.log(fibonacciOfNum(5));
console.log(fibonacciOfNum(10));

// [Question 6]: Missing Number in an Array
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function findMissingNum(arr) {
  const n = arr.length + 1;
  let sum = arr.reduce((acc, curr) => (acc += curr));
  return n * ((n + 1) / 2) - sum;
}

console.log(findMissingNum([1, 3, 4, 5, 6, 7]));
