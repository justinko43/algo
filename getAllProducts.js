function getAllProducts(array) {
  let topArray = [];
  let bottomArray = [];
  let p = 1;
  for (let i = 0; i < array.length; i++) {
    topArray[i] = p;
    p *= array[i]
  }

  p = 1;
  for (let f = array.length - 1; f >= 0; f--) {
    bottomArray[f] = p;
    p *= array[f]
  }

  return array.map((element, i) => topArray[i] * bottomArray[i])
}


getAllProducts([1,2,3])