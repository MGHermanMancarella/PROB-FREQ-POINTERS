'use strict';

/** Checks sorted array for two numbers that average to targetAvg
 * takes in a sorted array of numbers and a targetAvg
 * Returns boolean */

function averagePair(nums, targetAvg) {
  if (nums.length < 2) false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currAvg = (nums[left] + nums[right]) / 2;
    if (currAvg === targetAvg) {
      return true;
    } else if (currAvg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
