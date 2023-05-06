class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        romans = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        result = 0

        for ind in range(0, len(s) - 1):
            print(ind, s[ind])
            if romans[s[ind]] >= romans[s[ind + 1]]:
                result += romans[s[ind]]
            elif romans[s[ind]] < romans[s[ind + 1]]:
                result -= romans[s[ind]]
        result += romans[s[len(s) - 1]]
        return result

