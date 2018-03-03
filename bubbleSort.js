function bubbleSort(array) {
  let i = 0;
  while (i !== array.length) {
    for (let f = 0; f < array.length - i; f++) {
      if (array[f] > array[f + 1]) {
        let tmp = array[f];
        array[f] = array[f + 1];
        array[f + 1] = tmp;
      }
    }
    i++;
  }
  return array;
}

console.log(bubbleSort([6,7,3,2,44,22,11,99,24,57,23,1,0.87,22]));