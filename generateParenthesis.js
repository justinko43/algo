/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const returnArray = [];
  addingPar(returnArray, '', n, 0);

  function addingPar(returnArray, string, left, right) {
    if (left === 0 && right === 0) {
      returnArray.push(string);
      return;
    }
    
    if (right > 0) addingPar(returnArray, string + ')', left, right - 1);
    if (left > 0) addingPar(returnArray, string + '(', left - 1, right + 1);
  }

  return returnArray;
};

console.log(generateParenthesis(5));