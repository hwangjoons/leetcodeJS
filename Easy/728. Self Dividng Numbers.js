var selfDividingNumbers = function(left, right) {
  const result = [];

  for(let i = left; i <= right; i++){
      String(i).split('').every(number => +number && !(i % number)) && result.push(i);
  }

  return result;
};