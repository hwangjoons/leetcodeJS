var lengthOfLastWord = function(s) {
  let array = s.split(' ').reverse();
  let count = 0;
  let lastWord;
  console.log(array);
  for (let i = 0; i < array.length; i++) {
      if (array[i].length > 0) {
          lastWord = array[i];
          break;
      }
  }

  for (let i = 0; i < lastWord.length; i++) {
      console.log(lastWord);
      count++;
  }

  return count;
};