function binarySearch(number, array) {
  let highIndex = array.length - 1;
  let lowIndex = 0;
  while (highIndex >= lowIndex) {
    let middleIndex = Math.floor(highIndex - lowIndex / 2);    
    if (number === array[middleIndex]) {
      return middleIndex;
    } else if (number > array[middleIndex]) {
      lowIndex = middleIndex + 1;
    } else if (number < array[middleIndex]) {
      highIndex = middleIndex - 1;
    }
  }
  return -1;
}
