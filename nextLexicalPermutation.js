/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

   //while index value is greater equal to zero and and nums[index] > nums[index - 1]
    //decrement index
  
  //initialize j value
  //while j value is greater than 0 and nums[j] <= nums[i]
    //decrement j
  //swap i and j spots
  //reverse from i + 1 to end

var nextPermutation = function(nums) {
  //initialize index value
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i -= 1;
  }
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j -= 1;
  }
  
  swap(nums, i, j);
  reverse(nums, i + 1)
  return nums

  function reverse(nums, i) {
    let start = i;
    let end = nums.length - 1;

    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }

  function swap(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }

};

console.log(nextPermutation([1,5,8,4,7,6,5,3,1]));


