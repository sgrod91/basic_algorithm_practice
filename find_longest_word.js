function findLongestWord(str) {
  var splits = str.split(' ');
  console.log(splits);
  for (var i = 0; i < splits.length; i++) {
    return splits[i].length;

  }
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
