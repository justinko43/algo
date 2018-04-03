/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let area = 0;

  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] >= leftMax) leftMax = height[leftPointer];
      else area += leftMax - height[leftPointer];

      leftPointer += 1;
    } else {
      if (height[rightPointer] >= rightMax) rightMax = height[rightPointer];
      else area += rightMax - height[rightPointer];

      rightPointer -= 1;
    }
  }
  return area;
};

console.log(trap([1,2,3,0,3,2,3,1,4]));