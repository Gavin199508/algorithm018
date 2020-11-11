function recursiveTwo(n) {
  if (n == 0) return res;
  // return recursiveTwo(n * (n - 1));
}
console.log(recursiveTwo(3))

function recursiveTwo(n) {
  if (n <= 1) return 1;
  return recursiveTwo(n - 1) + recursiveTwo(n - 2);
}
// console.log(recursiveTwo(10))

function recursiveTwos(n, res = 1) {
  let helper = (n, r) => {
    if (n < 1) {
      return r
    };
    return helper(n - 1, r *= n);
  }
  return helper(n, res);
  // return res;
}
// console.log(recursiveTwos(10))

function valid(num) {
  let res = [];
  let helper = (l, r, s) => {
    if (l == num && r == num) {
      res.push(s);
      return;
    }
    if (l < num) {
      helper(l + 1, r, s + '(');
    }
    if (l > r) {
      helper(l, r + 1, s + ')');
    }
  }
  helper(0, 0, '');
  return res;
}
// console.log(valid(3))

function Fi() {
  let a = 1;
  let b = 2;
  let count = 2;
  let c;
  while (count <= 100) {
    c = a + b;
    a = b;
    b = c;
    count++;
  }
  console.log(c);
}
// Fi();

//前n项和
// function nSum(n, sum = 0) {
//   if (n == 0) return sum;
//   return nSum(n - 1, sum + n);
// }
// console.log(nSum(200));

//有效括号
function valid(n) {
  let arr = [];
  let helper = (l, r, s) => {
    if (l === n && r === n) {
      arr.push(s);
      return;
    }
    if (l < n) {
      helper(l + 1, r, s + '(');
    }
    if (l > r) {
      helper(l, r + 1, s + ')');
    }
  }
  helper(0, 0, '');
  return arr;
}
console.log(valid(3));