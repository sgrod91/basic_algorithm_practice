function palindrome(str) {
  var str = str.replace(/ /gi, "");
  var newString = "";
  console.log(str);
  for (var i = str.length - 1; i >= 0; i--) {
     newString += str[i];
  }
  if (newString === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("not a palindrome"));
