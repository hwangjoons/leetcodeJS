class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        #create left and right pointer, check if s at left and s at right equals to each other
        #if not return false
        # else at the end return true

        l, r = 0, len(s) - 1
        while(l <= r):
            if l < r and not s[l].isalnum():
                l+=1
            if r > l and not s[l].isalnum():
                r-=1
            if s[l] != s[r] and s[l].isalnum() and s[r].isalnum():
                return False
            l+=1
            r-=1

        return True