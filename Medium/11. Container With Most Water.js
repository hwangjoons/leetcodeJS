/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  //keep track of max area
  let maxArea = 0;
  //index of array is width, height is the element
  //two pointers at 0 and end of array
  let left = 0;
  let right = height.length - 1;
  //if left > right then end
  while (left < right) {
      //area formula (distance of two pointers) * (height of minimum height)
      //if current area is higher than max area, replace
      let minHeight = Math.min(height[left], height[right]);
      let currentArea = (right - left) * minHeight;
      if (currentArea > maxArea) {
          maxArea = currentArea;
      }
      // between the two height, move the pointer at smaller height by 1
      if (minHeight === height[left]) {
          left++;
      } else {
          right--;
      }
 }
 return maxArea;
  // get new current area, if better then replace, but if not, keep moving the minimum height
};