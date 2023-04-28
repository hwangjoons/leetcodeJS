var hammingDistance = function(x, y) {
  let value = x ^ y;
  let counter = 0;

  while (value != 0) {
      if (value & 1)
         ++counter

      value = value >> 1
  }

  return counter
};