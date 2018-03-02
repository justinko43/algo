/**
 *  returns true if string is a palindrome (the string is the same forward and backwards).
 *  The parameters entered may have puncutations and symbols, 
 *  but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
  //exclude punctuation
  const filterArray = ['.', ' ', ',', '"', '-', '\'', '!']
  let newString = string.split('').filter(value => !filterArray.includes(value)).join().toLowerCase();
  return recursiveHelper(newString);
}

function recursiveHelper(string) {
  if (string.length <= 1) return true;
  console.log(string.substring(1, string.length - 1));
  if (string[0] === string[string.length - 1]) {
    return recursiveHelper(string.substring(1, string.length - 1));
  } else {
    return false;
  }
}
