/*
Given n non-negative integers a1, a2, ..., an, 
where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

function getArea(height) {
  if (height.length === 2) return Math.min(height[0], height[1]);
  let maxArea = 0;
  let curArea = 0;
  let beginningPointer = 0;
  let endPointer = height.length - 1;
  while (endPointer - beginningPointer > 0) {
    curArea = (endPointer - beginningPointer) * Math.min(height[beginningPointer], height[endPointer]);
    if (curArea > maxArea) maxArea = curArea;
    if (height[beginningPointer] > height[endPointer]) endPointer--;
    else beginningPointer++;
  }
  return maxArea;
}

console.log(getArea([2,3,4,5,18,17,6]));