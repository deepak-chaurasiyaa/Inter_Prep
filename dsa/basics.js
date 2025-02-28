// Question 1: Sum of all natural numbers from 1 to n

function sumOfNaturalNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sumOfNaturalNumberOptimized(n) {
    return (n * (n + 1)) / 2
}

console.log(sumOfNaturalNumber(100))
console.log(sumOfNaturalNumberOptimized(100))


// Question 2: Sum of digits of a number
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10
        n = Math.floor(n / 10)
    }
    return sum
}

function sumOfDigitsOptimized(n) {
    return String(n).split('').reduce((acc, curr) => {
        return acc += Number(curr)
    }, 0)
}

console.log(sumOfDigits(101))
console.log(sumOfDigitsOptimized(101))


// [Question 3]: Count the number of digits of a number

function numberOfDigits(n) {
    console.log({first:Math.abs(n)})
    return String(Math.abs(n)).split('').length
}

console.log(numberOfDigits(-102322.12212))

