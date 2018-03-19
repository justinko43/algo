/*
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // if (nums1.length === 2 || nums2.length === 2) {

  // }
  console.log(nums1);
  console.log(nums2);
  let nums1MedianIndex = Math.floor(nums1.length / 2);
  let nums2MedianIndex = Math.floor(nums2.length / 2);
  let nums1Median;
  let nums2Median;

  if (nums1.length % 2 === 0) nums1Median = ((nums1[nums1MedianIndex] + nums1[nums1MedianIndex - 1]) / 2);
  else nums1Median = nums1[nums1MedianIndex]

  if (nums2.length % 2 === 0) nums2Median = ((nums2[nums2MedianIndex] + nums2[nums2MedianIndex - 1]) / 2);
  else nums2Median = nums2[nums2MedianIndex]

  if (nums1.length === 1 && nums2.length === 1) {
    return (nums1Median + nums2Median) / 2;
  }

  if (nums1.length === 1 && nums2.length === 2) {
    if (nums1[0] > nums2[1]) return nums2[1];
    else if (nums1[0] < nums2[1]) return nums2[0];
    else return nums1[0]    
  } else if (nums1.length === 2 && nums1.length === 1) {
    if (nums2[0] > nums1[1]) return nums1[1];
    else if (nums2[0] < nums1[1]) return nums1[0];
    else return nums2[0]
  }
  console.log(nums1Median)
  console.log(nums2Median);

  let maxDestroyer = 1;
  if (nums1Median > nums2Median) {
    return findMedianSortedArrays(nums1.slice(0, nums1MedianIndex + 1 + maxDestroyer), nums2.slice(nums2MedianIndex - maxDestroyer));
  } else if (nums1Median < nums2Median) {
    return findMedianSortedArrays(nums1.slice(nums1MedianIndex - maxDestroyer) , nums2.slice(0, nums2MedianIndex + 1 + maxDestroyer));
  } else if (nums1Median === nums2Median) {
    return nums1Median
  }
};

let arr1 = [1,2,4,7,9];
let arr2 = [3,5,6,8];

console.log(findMedianSortedArrays(arr1, arr2));