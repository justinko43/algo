/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[pointer] !== nums[i]) {
      pointer += 1;
      nums[pointer] = nums[i];
    }
  }
  return pointer + 1;
};


console.log(removeDuplicates([1,1,1]));