/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let stack = [];
  stack = [root];
  let arr = [];
  while (stack.length) {
      const node = stack.pop();
      arr.push(node.val);
      for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push(node.children[i]);
      }
  }
  return arr;
};