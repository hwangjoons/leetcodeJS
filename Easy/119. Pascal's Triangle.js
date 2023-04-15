var getRow = function(rowIndex) {
  return findRow([1], rowIndex);
};

const findRow = (arr, depth) => {
  if (arr.length - 1 === depth) return arr;

  const newArr = new Array(arr.length + 1);
  for (let i = 0; i < newArr.length; i++) {
      const l = arr[i - 1] || 0;
      const r = arr[i] || 0;
      newArr[i] = l + r;
  }

  return findRow(newArr, depth);
};