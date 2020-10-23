/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while(j<nums.length){
      if(nums[i]==nums[j]){
          nums.splice(j,1)
      }else{
        i++;
        j++; 
      }
  }
  return nums.length;
};