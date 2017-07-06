function findLongestWord(str) {
  var splitToArray = str.split(" ");
  var shortestWord = null;
  for (var i = 0; i < splitToArray.length; i++) {
    if (shortestWord === null) {
      shortestWord = splitToArray[i]
    } else if(shortestWord.length > splitToArray[i].length) {
      shortestWord = splitToArray[i]
    }
  }
  str = shortestWord;
  return str.length;
}

console.log(findLongestWord("Toby said do the problem from scratch"));
