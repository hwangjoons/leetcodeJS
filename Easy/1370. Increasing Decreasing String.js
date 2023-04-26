var sortString = function (s) {
  let arr = Array.from(s), ret = '';

  arr.sort();

  while (arr.length) {
    arr = arr.filter((x, i) => {
      if (i === 0 || x !== ret[ret.length - 1]) {
        ret += x;
        return false;
      }
      return true;
    });

    arr.reverse();
  }

  return ret;
};