/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (const str of s) {
      if (str == '(') {
          stack.push(')')
      } else if (str == '{') {
          stack.push('}')
      } else if (str == '[') {
          stack.push(']')
      } else {
          if (stack.pop() !== str) {
              return false;
          }
      }
  }
  return stack.length ? false : true;
};