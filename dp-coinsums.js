var coinsums = function(coinList, money) {
  const table = new Array(money + 1);  
  table.fill(0);
  table[0] = 1;

  for (let i = 0; i < coinList.length; i++) {
    for (let j = coinList[i]; j <= money; j++) {
      table[j] += table[j - coinList[i]];
    }
  }

  return table[money];
}
