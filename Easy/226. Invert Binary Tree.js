/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

  let traverse = (branch) => {
      if (!branch) {
          return;
      }

      let temp = branch.left;
      branch.left = branch.right;
      branch.right = temp;
      traverse(branch.left);
      traverse(branch.right);
  }
  traverse(root)
  return root;
};