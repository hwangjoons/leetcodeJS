class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True

        left = self.depth(root.left)
        right = self.depth(root.right)

        return abs(left - right) < 2 and self.isBalanced(root.left) and self.isBalanced(root.right)

    def depth(self, node):
        if node is None:
            return 0
        return max(self.depth(node.left), self.depth(node.right)) + 1