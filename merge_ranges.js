function mergeRanges(array) {
  //sort array first
  array.sort((a, b) => a[0] - b[0]);
  //initialize my stack
  const returnArray = [array[0]];
  //loop through array
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] > returnArray[returnArray.length - 1][1]) {
      returnArray.push(array[i]);
    } else if (array[i][1] > returnArray[returnArray.length - 1][0]) {
      returnArray[returnArray.length - 1][1] = array[i][1];
    }
  }
  return returnArray;
}
console.log(mergeRanges([[1,2],[3,4],[4,5]]));