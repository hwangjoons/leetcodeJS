/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  //recurse with candidates, target, array to hold combinations
  //if target === 0 then push into combinations
  //if target < 0 then return nothing
  //forEach candidate in candidates, recurse with added combinations and target - candidate
  let sumUp = (candidates, sum, combo) => {
      // index = index || 0;
      sum = sum || 0;
      combo = combo || [];
      if (sum === target) {
          result.push([...combo]);
          // combo.pop();
      }
      if (sum > target) {
          // combo.pop();
          return;
      }
      // for (let i = index; i < candidates.length; i++) {
          // combo.push(candidates[i]);
          // let nextSum = sum + candidates[i];
      candidates.forEach(candidate => {
          combo.push(candidate);
          let nextSum = sum + candidate
          sumUp(candidates, nextSum, combo);
          combo.pop();
      });
  };
  sumUp(candidates, 0, []);
  //return
  return result;
};