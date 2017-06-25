function factorialize(num) {
  var result = 1;
  if (num > 0) {
    for (var i = 1; i <= num; i++) {
      result = result * i;
    } else {
      result = 1;
    }
    return result;
  }
}
console.log(factorialize(5));
