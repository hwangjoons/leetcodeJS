/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = {};

  for (let i = 0; i < magazine.length; i++) {
      if (map[magazine[i]] === undefined) {
          map[magazine[i]] = 1;
      } else {
          map[magazine[i]]++;
      }
  }

  for (let i = 0; i < ransomNote.length; i++) {
      if (map[ransomNote[i]] >= 1) {
          map[ransomNote[i]]--;
      } else {
          return false;
      }
  }
  return true;
};