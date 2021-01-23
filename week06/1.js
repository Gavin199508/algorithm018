function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return Array.prototype.concat.apply([], arr)
    }
  }
}
console.log(flat([1,[2],[3],[4]]))