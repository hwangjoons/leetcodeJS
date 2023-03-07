var isBalanced = function(root) {
  let dfs = (node, level) => {
      if (!node) return level

      let left = dfs(node.left, level + 1)
      let right = dfs(node.right, level + 1)

      if (Math.abs(left - right) > 1) return Infinity

      return Math.max(left, right)
  }
  return dfs(root, 0) === Infinity ? false : true
};