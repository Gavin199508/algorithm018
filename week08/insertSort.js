function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--;
    }
    arr[preIndex + 1] = current
  }
  return arr;
}