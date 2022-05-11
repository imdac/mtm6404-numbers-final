// isEven
// return true if the provided number is even
// or false if not

function isEven (number) {
  // if a number can be evenly divided by 2
  // % modulus - returns the remainder
  // 3 % 2 return 1 | 4 % 2 return 0
  return number % 2 === 0
}

console.log('Is 12 even?', isEven(12)) // true
console.log('Is 13 even?', isEven(13)) // false

// isPrime
// test if provided number is prime
// return true, if prime
// return false, if not 

function isPrime (number) {
  // loop over each number below the provided number
  // looping backwards 
  // use modules to check if remainder is 0

  // first iteration: number % number - 1 === 0 return false
  // second iteration: number % number - 2 === 0 return false
  // ... until the iterator === 1
  // return true

  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

console.log('Is 12 prime?', isPrime(12)) // false
console.log('Is 13 prime?', isPrime(13)) // true
