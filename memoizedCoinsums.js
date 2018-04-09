//brute force recursive solution with memoization
var coinsums = function(money, coinList, index, hashMap) {
  if (money === 0) return 1;
  if (index > coinList.length) return 0;
  let total = 0;
  let coinTotal = 0;

  let key = money + '-' + index;
  if (hashMap[key]) return hashMap[key];

  while (coinTotal <= money) {
    let remaining = money - coinTotal;
    total += coinsums(remaining, coinList, index + 1, hashMap);
    coinTotal += coinList[index];
  }

  hashMap[key] = total;

  return total;
}
