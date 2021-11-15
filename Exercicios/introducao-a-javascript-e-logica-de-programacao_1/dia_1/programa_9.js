/*
var n1 = 50;
var n2 = 60;
var n3 = 40;

var m1 = n1%2;
var m2 = n2%2;
var m3 = n3%2;

if (m1 == 1 || m2 == 1 || m3 == 1) {
  console.log (true)
}else {
  console.log (false)
}
*/

function impar (n1,n2,n3) {

if ( n1%2 == 1 || n2%2 == 1 || n3%2 == 1) {
  return (true)
}else {
  return (false)
}
}

console.log (impar (50,60,40))