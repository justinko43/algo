/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

// function longestSubstring(string) {
//   let longestLength = 0;
//   let curLen = 1;
//   let maxLen = 1;
//   let prevIndex;
//   let visited = [];
//   for (let i = 0; i < 256; i++) {
//     visited[i] = -1;
//   }
//   visited[0] = 0;
//   for (let f = 1; f < string.length; f++) {
//     prevIndex = visited[string[f]];
//     if (prevIndex === -1 || f - curLen > prevIndex) curLen++;
//     else {
//       if (curLen > maxLen) maxLen = curLen;
//       curLen = f - prevIndex;
//     }
//     visited[string[f]] = f;
//   }
//   if (curLen > maxLen) maxLen = curLen;
//   return maxLen
// }


var lengthOfLongestSubstring = function(s) {
  let longestStr = ""
  let tracker = 0
  for(let i = 0; i < s.length; i++){
    let indexCheck = longestStr.indexOf(s[i])
    console.log(indexCheck);
    longestStr += s[i]
    if(indexCheck >= 0){
      longestStr = longestStr.substring(indexCheck+1)
    }
    tracker = Math.max(tracker, longestStr.length)  
  }
  return tracker
};

console.log(lengthOfLongestSubstring('pwwkew'));
