function mergeSort(array) {
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2);
  return helpMerge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)));
}

function helpMerge(array1, array2) {
  const newArray = [];
  index1 = 0;
  index2 = 0;
  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] <= array2[index2]) newArray.push(array1[index1++]);
    else if (array1[index1] > array2[index2]) newArray.push(array2[index2++]);
  }
  return newArray.concat(array1.slice(index1)).concat(array2.slice(index2));
}

console.log(mergeSort([7,5,2,3,4,5,6,22,5,7,11,2,6,55,23,25,19]));