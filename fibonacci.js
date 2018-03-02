/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the 
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be 
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the 
 * performance difference.
*/

function nthFibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return nthFibonacci(num - 1) + nthFibonacci(num - 2);
}

function memoize(func) {
  const cache = {};
  function memoizedFunction(args) {
    if (!cache[args]) {
      cache[args] = func(args);
    }
    return cache[args];
  }
  return memoizedFunction;
}

const memo = memoize(nthFibonacci);
