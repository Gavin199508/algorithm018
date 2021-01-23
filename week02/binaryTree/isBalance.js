/**  检查二叉树是否平衡
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  } else {
    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  }
};
var depth = function (r) {
  if (!r) {
    return 0
  } else {
    return Math.max(depth(r.left), depth(r.right)) + 1;
  }

}