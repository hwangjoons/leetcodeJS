var lengthOfLongestSubstring = function(s) {
  let newSet = new Set();
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
      while (newSet.has(s[i])) {
          newSet.delete(s[start]);
          start++;
      }
      newSet.add(s[i]);

      max = Math.max(max, i - start + 1);
  }

  return max;
};