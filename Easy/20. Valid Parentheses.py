class Solution(object):
    def isValid(self, s):
        stack = []

        for parentheses in s:
            if parentheses == "(":
                stack.append(")")
            elif parentheses == "{":
                stack.append("}")
            elif parentheses == "[":
                stack.append("]")
            elif len(stack) == 0 or stack.pop() != parentheses:
                return False

        return not len(stack)


