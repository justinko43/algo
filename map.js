function map(array, cb) {
  result = [];
  
  array.forEach(element => {
    result.push(cb(element));
  });
  return result;
}

console.log(map([1, 2, 3], (element) => element + 1));
