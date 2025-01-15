// Prime factors are stored in exponential form for all primes less than sqrt(1000)
// If a number does not have this 

const primes = [2, 3, 5, 7, 11, 13, 15, 17, 19, 23, 29, 31];
// const primeIndices = [1, ]

// let factorTable = new Array(1000);

// function initializePrimeTable() {
//     let i = 0;
//     for (let pi = 0; pi < primes.length; pi++) {
//         let prime = primes[pi];
//         for (let exp = prime; exp < 1000; exp *= prime) {
//             i++;
//         }
//     }
// }

/**
 * Returns the primes of a number, with repeated values for exponents of a prime.
 * e.g.: 444 => {2, 2, 3, 37}
 * 
 * @param {number} num
 */
function getPrimesOfNumber(num) {
    let i = 0;
    let factorization = [];
    while ((i < primes.length) && (num > primes[i])) {
        while (num % primes[i] == 0) {
            factorization.push(primes[i]);
            num = num / primes[i];
        }
        i++;
    }
    if (num > 1) factorization.push(num);
    return factorization;
}

let twosCount = 0;
let threesCount = 0;
let fivesCount = 0;
let sevensCount = 0;

let uncommonFactors = [new Factor(0), new Factor(0), new Factor(0),
    new Factor(0), new Factor(0), new Factor(0)
];
let uncommonCount = [0, 0, 0, 0, 0, 0];