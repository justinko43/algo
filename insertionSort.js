function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let f = i + 1;
    while (array[f] < array[f - 1]) {
      let tmp = array[f];
      array[f] = array[f - 1];
      array[f - 1] = tmp;
      f--;
    }
  }
  return array;
}