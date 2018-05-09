/*
Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0, right = nums.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    if (nums[middle] === target) break;
    else if (nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  let doubleM;
  let doubleL = left, doubleR = middle;
  while (doubleL < doubleR) {
    doubleM = Math.floor((doubleL + doubleR) / 2);
    console.log(doubleM);
    if (nums[doubleM] === target) doubleR = doubleM;
    else doubleL = doubleM + 1;
  }
  left = doubleL;

  
  doubleL = middle;
  doubleR = right
  while (doubleL < doubleR) {
    doubleM = Math.floor((doubleL + doubleR + 1) / 2);
    if (nums[doubleM] === target) doubleL = doubleM;
    else doubleR = doubleM - 1;
  }
  right = doubleR;

  return [left, right];
};

console.log(searchRange([5,7,7,8,8,8,8,10], 8));