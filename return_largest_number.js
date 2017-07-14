function largestOfFour(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      var largestNumber = null;
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i];
      }
    }
    newArray.push(largestNumber);
  }
  arr = newArray;
  return arr;
}

console.log(largestOfFour(appen[[1, 2], [9, 10]]));
