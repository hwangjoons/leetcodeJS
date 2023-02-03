/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  // let array = s.split('');

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(')')
          console.log(s[i], stack)
      } else if (s[i] === '[') {
          stack.push(']')
      } else if (s[i] === '{') {
          stack.push('}')
      } else if (stack.pop() !== s[i]) {
          console.log(stack, s[i])
          return false;
      }
  }
  return !stack.length
};