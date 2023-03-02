var removeElement = function(nums, val) {
  //iterate through number in the array
  //check if nums[i] is val
  //if so, delete
  for (var i = 0; i < nums.length; i++)
      {
          if (nums[i] === val)
              {
                  nums.splice(i, 1);
                  i--;
              }
      }
};