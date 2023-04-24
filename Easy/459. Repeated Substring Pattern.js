var repeatedSubstringPattern = function(s) {

  let size = s.length;
  let sFold = s.substr(1, size) + s.substr(0, size-1);

  return sFold.indexOf( s ) != -1;
};