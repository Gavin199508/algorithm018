// function mergeSort(arr) {
//   let mid = arr.length >> 1
//   left = arr.slice(0, mid);
//   right = arr.slice(mid)
//   return merge(merge(left), merge(right));
// }

// function merge(left, right) {
//   var result = [];

//   while (left.length > 0 && right.length > 0) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   while (left.length)
//     result.push(left.shift());

//   while (right.length)
//     result.push(right.shift());

//   return result;
// }
// console.log(merge([1, 8, 10], [4, 5, 6]))

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length / 2),
    left = nums.slice(0, mid),
    right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let result = []
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}

let arr = [4, 1, 57, 2, 4, 5, 12, 34, 7, 84];
console.log(mergeSort(arr))