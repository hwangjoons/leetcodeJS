var levelOrder = function(root) {
  if (!root) return [];

  let stack = [root];
  let result = [];

  while (stack.length > 0) {
      const stackLength = stack.length;

      let currLevel = [];

      for (let i = 0; i < stackLength; i++) {
          const currentNode = stack.shift();

          if (currentNode.left) {
              stack.push(currentNode.left);
          }
          if (currentNode.right) {
              stack.push(currentNode.right);
          }
          currLevel.push(currentNode.val);
      }
      result.push(currLevel);
  }
  return result;
};