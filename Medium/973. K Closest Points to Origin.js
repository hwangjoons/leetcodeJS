/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  // distance = points[i][0]^2 + points[i][1]^2
  // an array, storing distance or order & x, y coordinates
  //sort?
  //return the array/object above until the kth

  let result = [];
  for (let i = 0; i < points.length; i++) {
      let distance = points[i][0]**2 + points[i][1]**2;
      result.push([distance, points[i]]);
  }
  result.sort((a, b) => { return a[0] - b[0] });

  let final = [];
  for (let i = 0; i < k; i++) {
      final.push(result[i][1]);
  }

  return final;
};