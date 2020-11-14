/* JavaScript */
let left = 0,
  right = len(array) - 1
while (left <= right) {
  let mid = (left + right) >> 1
  if (array[mid] === target) {
    /*find the target*/ ;
    return
  } else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}


const binarySorted2 = (arr) => {
  let c = new Date().getTime();
  if (arr.length <= 1) return arr;
  let mid = arr.splice(arr.length >> 1, 1)[0];
  let left = [],
    right = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < mid) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }
  let d = new Date().getTime();
  console.log(d - c)
  return binarySorted(left).concat([mid], binarySorted(right));
}
// console.log(binarySorted([4, 1, 23, 5, 7, 3, 4, 6, 8]))

// // 快排改进——黄佳新
// var devide_Xin = function (array, start, end) {
//   if (start >= end) return array;
//   var baseIndex = Math.floor((start + end) / 2), // 基数索引
//     i = start,
//     j = end;

//   while (i <= j) {
//     while (array[i] < array[baseIndex]) {
//       i++;
//     }
//     while (array[j] > array[baseIndex]) {
//       j--;
//     }

//     if (i <= j) {
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// var quickSort_Xin = function (array, start, end) {
//   if (array.length < 1) {
//     return array;
//   }
//   var index = devide_Xin(array, start, end);
//   if (start < index - 1) {
//     quickSort_Xin(array, start, index - 1);
//   }
//   if (end > index) {
//     quickSort_Xin(array, index, end);
//   }

//   return array;
// }
let arr = new Array(100000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * arr.length);
}
// // console.log(quickSort_Xin(arr, 0, arr.length));

// 快排改进——黄佳新
var devide_Xin = function (array, start, end) {
  if (start >= end) return array;
  var baseIndex = Math.floor((start + end) / 2), // 基数索引
    i = start,
    j = end;

  while (i <= j) {
    while (array[i] < array[baseIndex]) {
      i++;
    }
    while (array[j] > array[baseIndex]) {
      j--;
    }

    if (i <= j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}

var quickSort_Xin = function (array, start, end) {
  if (array.length < 1) {
    return array;
  }
  var index = devide_Xin(array, start, end);
  if (start < index - 1) {
    quickSort_Xin(array, start, index - 1);
  }
  if (end > index) {
    quickSort_Xin(array, index, end);
  }

  return array;
}
console.log(quickSort_Xin(arr, 0, arr.length));