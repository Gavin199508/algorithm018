/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let res = target - nums[i];
      if (map.has(res)) {
          arr[0] = map.get(res);
          arr[1] = i;
      }
      map.set(nums[i],i);
  }
  return arr;
};