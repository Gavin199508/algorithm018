/** 字幕异位词分组
 * 利用map的原理，对排序后的词进行对比（类似于hash相同，key不同），如果相同，找到那个hash下的node（这里是数组），放入。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
      let str = strs[i].split('').sort().join();
      if (map.has(str)) {
          let temp = map.get(str);
          temp.push(strs[i])
          map.set(str, temp);
      } else {
          map.set(str, [strs[i]]);
      }
  }
  return [...map.values()];
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 236. 二叉树的最近公共祖先
 * 递归 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    if (root == p || root == q) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    if (left == null) {
        return right;
    }
    return left;
};