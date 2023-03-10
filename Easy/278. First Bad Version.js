var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
     let start = 0;
     let end = n;
     let mid;
     while (start <= end) {
         mid = Math.ceil((start + end) / 2);
         if (isBadVersion(mid)) {
             end = mid - 1;
         } else {
             start= mid + 1;
         }
     }
     return start;
  };
};