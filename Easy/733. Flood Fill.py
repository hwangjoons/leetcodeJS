class Solution(object):
    def floodFill(self, image, sr, sc, color):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type color: int
        :rtype: List[List[int]]
        """
        # sr, sc start

        # if current image is the same as start, change to color
        # depth first search

        original = image[sr][sc]

        if image[sr][sc] == color:
            return image

        self.filling(image, sr, sc, color, original)

        return image

    def filling(self, image, r, c, color, original):
        rowBound = r >= 0 and r < len(image)
        colBound = c >= 0 and c < len(image[0])

        if not (rowBound and colBound):
            return

        if not (image[r][c] == original):
            return

        image[r][c] = color

        self.filling(image, r + 1, c, color, original)
        self.filling(image, r - 1, c, color, original)
        self.filling(image, r, c + 1, color, original)
        self.filling(image, r, c - 1, color, original)