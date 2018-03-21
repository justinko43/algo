function romanToInt(s) {
  const obj = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I:1};
  let number = 0;
  let i = 0;
  while (i < s.length) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      number += obj[s[i + 1]] - obj[s[i]];
      i += 2;
    } else {
      number += obj[s[i]];
      i++;
    }
  }
  return number;
}

console.log(romanToInt('CXVI'));