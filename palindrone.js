function palindrome(str) {
  str = str.replace(/ /gi, "");
  str = str.replace(/_/gi, "");
  str = str.replace(/-/gi, "");
  str = str.replace(/\(/gi, "");
  str = str.replace(/\)/gi, "");
  str = str.replace(/,/gi, "");
  str = str.replace(/\./gi, "");
  str = str.toLowerCase();
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

console.log(palindrome("0_0 (: /-\ :) 0-0"));
