/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [''];
  const phoneList = {
    '0': [''],
    '1': [''],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let returnArray = [''];
  let tmp = [];
  for (let i = 0; i < digits.length; i++) {
    for (let f = 0; f < returnArray.length; f++) {
      for (let g = 0; g < phoneList[digits[i]].length; g++) {
        tmp.push(returnArray[f] + phoneList[digits[i]][g]);
      }
    }
    returnArray = [].concat(tmp)
    tmp = [];
  }
  return returnArray;
};

console.log(letterCombinations('423'));
