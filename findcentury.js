function findCentury(year) {
  year = year - 1;
  year = year/100;
  year = Math.floor(year) + 1
  return year;
}
console.log(findCentury(1800));
