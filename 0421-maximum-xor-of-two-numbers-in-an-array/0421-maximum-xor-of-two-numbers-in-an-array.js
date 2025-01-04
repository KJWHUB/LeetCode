class TrieNode {
  constructor() {
    this.left = null;  // 0을 위한 노드
    this.right = null; // 1을 위한 노드
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(num) {
    let node = this.root;
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (bit === 0) {
        if (!node.left) node.left = new TrieNode();
        node = node.left;
      } else {
        if (!node.right) node.right = new TrieNode();
        node = node.right;
      }
    }
  }

  findMaxXor(num) {
    let node = this.root;
    let maxXor = 0;
    
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;
      
      if (bit === 0) {
        if (node.right) {
          maxXor |= 1 << i;
          node = node.right;
        } else {
          node = node.left;
        }
      } else {
        if (node.left) {
          maxXor |= 1 << i;
          node = node.left;
        } else {
          node = node.right;
        }
      }
    }
    return maxXor;
  }
}

function findMaximumXOR(nums) {
  if (nums.length < 2) return 0;
  
  const trie = new Trie();
  let maxXor = 0;
  
  for (const num of nums) {
    trie.insert(num);
    maxXor = Math.max(maxXor, trie.findMaxXor(num));
  }
  
  return maxXor;
}