// ac地址：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 原文地址：https://xxoo521.com/2020-02-21-least-nums/

/**
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function partition(arr, start, end) {
  const k = arr[start];
  let left = start + 1,
    right = end;
  while (1) {
    while (left <= end && arr[left] <= k) ++left;
    while (right >= start + 1 && arr[right] >= k) --right;

    if (left >= right) {
      break;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    ++left;
    --right;
  }
  [arr[right], arr[start]] = [arr[start], arr[right]];
  return right;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const length = arr.length;
  if (k >= length) return arr;
  let left = 0,
    right = length - 1;
  let index = partition(arr, left, right);
  while (index !== k) {
    if (index < k) {
      left = index + 1;
      index = partition(arr, left, right);
    } else if (index > k) {
      right = index - 1;
      index = partition(arr, left, right);
    }
  }

  return arr.slice(0, k);
};

let arr = [9, 12, 4, 6, 2, 3, 56, 78, 12, 5, 2, 5, 6, 8, 3, 1, 3]
console.log(getLeastNumbers(arr, 4))