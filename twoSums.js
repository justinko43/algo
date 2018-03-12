function twoSums(arr, target) {
  //initialize a hash map
  const hash = {};
  //iterate through array
    //if complement is found in hash, return array with complement, element
    //else store element as key in hash with value of its index
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (complement in hash) return [complement, arr[i]];
    hash[arr[i]] = i;
  }
  return false;
}

console.log(twoSums([1,2,3,4,5,6,7],3));