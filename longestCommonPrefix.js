/**
 * @param {string[]} strs
 * @return {string}
 */

 //i: array of strings
 //o: string with longest common prefix


var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let possibleString = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(possibleString) !== 0) {
      possibleString = possibleString.slice(0, possibleString.length - 1);
      console.log(possibleString);
    }
  }
  return possibleString;
};

console.log(longestCommonPrefix(["c","acc","ccc"]));