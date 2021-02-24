function topK(arr, k) {
  if (arr.length <= k) return arr;
  let left = 0,
    right = arr.length - 1;
  let pivot = partition(arr, left, right);
  while (k !== pivot) {
    if (k > pivot) {
      left = pivot + 1
      pivot = partition(arr, left, right);
    } else if (k < pivot) {
      right = pivot - 1
      pivot = partition(arr, left, right);
    }
  }
  return arr.slice(0, k);
}

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
let arr = [9, 12, 4, 6, 2, 3, 56, 78, 12, 5, 2, 5, 6, 8, 3, 1, 3]
console.log(topK(arr, 4))