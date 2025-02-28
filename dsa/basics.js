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

