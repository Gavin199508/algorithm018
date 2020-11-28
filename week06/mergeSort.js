function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length >> 1;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
console.log(mergeSort([4,2,3,6,8,3,1,3,2,1,6,9]))