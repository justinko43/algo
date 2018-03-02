/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
*/

function isPrime(num) {
  if (num === 1) return false;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i < num) {
    if (num % i === 0 || num % i + 2 === 0) return false;
    i += 5;
  }
  return false;
}