/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num;
  if (x < 0) num = Number(x.toString().slice(1).split('').reverse().join('')) * -1;
  else num = Number(x.toString().split('').reverse().join(''))

  if (num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31) - 1) return 0;
  else return num;
}