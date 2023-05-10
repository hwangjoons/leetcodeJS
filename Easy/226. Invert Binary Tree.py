class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        # if root:
        # invert = self.invertTree
        # root.left, root.right = invert(root.right), invert(root.left)
        # return root
        if root:
            left = root.left
            root.left = root.right
            root.right = left
            self.invertTree(root.left)
            self.invertTree(root.right)
            return root