// Question 1: Sum of all natural numbers from 1 to n

function sumOfNaturalNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(100))