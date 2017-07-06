function findLongestWord(str) {
  var arrayOfStrings = str.split(' ');
  var longestString = "";
  var longestStrings = [];
  for (var i = 0; i < arrayOfStrings.length; i++) {
    if(longestString.length <= arrayOfStrings[i].length) {
      if(longestString.length < arrayOfStrings[i].length) {
        longestStrings = [];
      }
      longestStrings.push(arrayOfStrings[i]);
      longestString = arrayOfStrings[i];
    }
  }
  str = longestStrings;
  return str;
}

findLongestWord("Toby said do the problem from scratch");
