var diameterOfBinaryTree = function(root) {
  let diameter = 0;

  let findDia = (node) => {
      if (!node) return 0
      let left = findDia(node.left);
      let right = findDia(node.right);

      diameter = Math.max(diameter, left + right)
      return 1 + Math.max(left, right)
  }

  findDia(root);
  return diameter;
};