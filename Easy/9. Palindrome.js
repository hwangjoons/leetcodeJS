/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let arr = x.toString().split('');

  if (arr[0] === '-') {
      return false;
  }

  let first = 0;
  let last = arr.length - 1;
  while (first < last) {
      if (arr[first] !== arr[last]) {
          return false;
      }

      first++;
      last--;
  }

  return true;
};