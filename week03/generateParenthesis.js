/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let arr = [];
  let helper = (left, right, s) => {
      if (left == n && right == n) {
          arr.push(s);
          return;
      }
      if (left < n) {
          helper(left + 1, right, s + '(');
      }
      if (left > right) {
          helper(left, right + 1, s + ')');
      }
  }
  helper(0, 0, '');
  return arr;
};