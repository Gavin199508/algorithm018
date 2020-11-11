const evenFibonacci = function (n) {
  if (n < 2) return n;
  let i = 0,
    j = 1,
    res = 0,
    o = 2;
  while (o < n) {
    let c = i + j;
    if (c % 2 == 0) res += c;
    if (c > 4000000) break;
    i = j;
    j = c;
    o++;
  }
  return res;
}
console.log(evenFibonacci(Infinity));