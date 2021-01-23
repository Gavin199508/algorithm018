function quickSort(arr, begin, end) {
  if (end <= begin) return
  let pivot = partition(arr, begin, end);
  quickSort(arr, begin, pivot - 1)
  quickSort(arr, pivot + 1, end)
  return arr;
}

function partition(arr, begin, end) {
  let count = begin,
    pivot = end;
  for (let i = begin; i < end; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[count], arr[i]] = [arr[i], arr[count]]
      count++
    }
  }
  [arr[pivot], arr[count]] = [arr[count], arr[pivot]]
  return count;
}
let arr = [4, 1, 57, 2, 4, 5, 12, 34, 7, 84];
// console.log(quickSort(arr, 0, arr.length - 1))
// console.log('debug')



function quick(arr, begin, end) {
  if (end <= begin) {
    return
  }
  let pivot = parti(arr, begin, end);
  console.log(pivot)
  quick(arr, begin, pivot - 1)
  quick(arr, pivot + 1, end)
  return arr;
}

function parti(arr, begin, end) {
  let count = begin,
    pivot = end;
  for (let i = begin; i < end; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[count], arr[i]] = [arr[i], arr[count]]
      count++
    }
  }
  [arr[pivot], arr[count]] = [arr[count], arr[pivot]];
  return count;
}
console.log(quick(arr, 0, arr.length - 1))
console.log('debug')

function quick2(arr) {
  if (arr.length < 1) return arr;
  console.log(arr)
  let pivot = Math.floor(arr.length / 2);
  let a = arr.splice(pivot,1)[0];
  let right = [],
    left = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quick2(left).concat([a],quick2(right))
}
// console.log(quick2(arr))


