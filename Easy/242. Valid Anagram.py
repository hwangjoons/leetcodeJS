class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        obj = {}

        for letter in s:
            # print(letter)
            if letter in obj:
                obj[letter] += 1
            else:
                obj[letter] = 1

        for letter in t:
            # print(obj[letter])
            if letter in obj:
                if obj[letter] > 0:
                    obj[letter] -= 1
                else:
                    return False
            else:
                return False

        for object in obj:
            if obj[object] > 0:
                return False

        return True