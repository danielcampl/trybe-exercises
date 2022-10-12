let biggestPrime = 0;

for (let numbers = 0; numbers <= 50; numbers += 1) {
    let isPrime = true;
        for (let divisor = 2; divisor < numbers; divisor += 1) {
        if (numbers % divisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrime = numbers;
    }
}

console.log(biggestPrime);