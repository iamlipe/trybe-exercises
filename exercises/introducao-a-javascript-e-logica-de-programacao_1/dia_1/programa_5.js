/*
var ang1 = 30;
var ang2 = 60;
var ang3 = 91;

var soma = ang1 + ang2 + ang3;

if  (soma <= 180) {
  console.log (true)
} else {
  console.log (false)
}
*/

function testTriangle (deg1, deg2, deg3) {
  var soma = deg1 + deg2 + deg3;

if  (soma <= 180) {
  return (true)
} else {
  return (false)
}
}

console.log (testTriangle(23,89,233))