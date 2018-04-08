// /**
//  * @param {string} s
//  * @return {string}
//  */
var longestPalindrome = function(s) {
  let sLength = s.length;
  let table = new Array(sLength);
  for (let i = 0; i < sLength; i++) {
    table[i] = []
  }
  let maxLength = 1;
  let num = 0;

  while (num < sLength) {
    table[num][num] = true;
    num += 1;
  }

  //check for substrings length 2
  let start = 0;
  num = 0;
  while (num < sLength - 1) {
    if (s[num] === s[num + 1]) {
      table[num][num + 1] = true;
      start = num;
      maxLength = 2;
    }
    num += 1;
  }
  //Check for lengths greater than 2
  // k is length of substring
  let k = 3;
  while (k <= sLength) {
    let num = 0;
    while (num < (sLength - k + 1)) {
      let j = num + k - 1;

      if (table[num + 1][j - 1] && s[num] === s[j]) {
        table[num][j] = true;
        if  (k > maxLength) {
          start = num;
          maxLength = k;
        }
      }
      num += 1;
    }
    k += 1
  }
  return s.substring(start, start + maxLength + 1 - 1);
};



/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  var a = s.split(''),left, right,
        size = a.length,
        max = Number.MIN_VALUE,
        start = 0;

    for(var i = 0; i < size; i++){
        left = i - 1;
        right = i;
        while(left >=0 && right < size) {
            if (a[left] === a[right]){
                left--;
                right++;
            } else { break;}
        }
        if (right - left - 1 > max){
            max = right - left - 1;
            start = left + 1;
        }
    }

    return s.substring(start, start + max);
};

console.log(longestPalindrome('forgeeksskeegfor'));

