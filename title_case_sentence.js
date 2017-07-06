function titleCase(str) {
  str = str.toLowerCase();
  var arrayOfStrings = str.split(' ');
  var capitalizedFirstLetters = "";
  var newArray = [];
  for (var i = 0; i < arrayOfStrings.length; i++) {
    newArray.push(arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].substring(1));
  }
  str = newArray.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot"));
