// JavaScript
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = "$";
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endOfWord] = this.endOfWord;
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return node[this.endOfWord] === this.endOfWord;
  }

  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}


let trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple")); // 返回 true
console.log(trie.search("app")); // 返回 false
console.log(trie.startsWith("app")); // 返回 true
console.log(trie.insert("app"));
console.log(trie.search("app")); // 返回 true


class Node {
  constructor(val) {
    this.left = this.right = null; //next node
    this.val = val; //could be anything
  }
}

class BinaryTree {
  constructor(data) {
    let nodeList = []
    for (let i = 0; i < data.length; i++) {
      const node = new Node(data[i]);
      nodeList.push(node);
      if (i > 0) {
        const n = Math.floor(Math.log2(i + 1) + 1);
        const p = Math.pow(2, n - 1) - 1;
        const q = Math.floor((i - p) / 2) + p;
        const parent = nodeList[q];
        if (parent.left) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }
    return nodeList;
  }
}
const tree = new BinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(tree)

var postorderTraversal = function (root) {
  let arr = [];

  function fun(root) {
    if (root) {
      fun(root.left);
      fun(root.right);
      arr.push(root.val);
    }
  }
  fun(root);
  return arr;
};
console.log(postorderTraversal(tree));