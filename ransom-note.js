/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, 
write a function that will return true if the ransom note can be constructed from the magazines ; 
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note. 
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

// var canConstruct = function(ransomNote, magazine) {
//   const keyMap = {};
//   for (let i = 0; i < magazine.length; i++) {
//     keyMap[magazine[i]] = 1 + keyMap[magazine[i]] || 1;
//   }

//   for (let f = 0; f < ransomNote.length; f++) {
//     if (!keyMap[ransomNote[f]] || keyMap[ransomNote[f]] === 0) return false;
//     else keyMap[ransomNote[f]] = keyMap[ransomNote[f]] - 1;
//   }

//   return true;
// };

//faster
var canConstruct = function(ransomNote, magazine) {
  let magLength = magazine.length;
  for (let i = 0; i < ransomNote.length; i++) {
    magazine = magazine.replace(ransomNote[i], '');
  }
  return magLength === magazine.length + ransomNote.length;
}

console.log(canConstruct("aa", "aab"));