// function know us if number is prime or not
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0) return false;
    return true;
}
// function return all primes number between two number
function findPrimesBetween(n, m) {
    if (n < m) {
        let primes = [];
        for (let i = n; i <= m; i++)
            if (isPrime(i))
                primes.push(i);
        return primes;
    } else {
        return "number one must be smaller than number two :("
    }
}
// test functions ... 
console.log(findPrimesBetween(1,100))

