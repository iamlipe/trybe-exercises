/*
var n1 = 69;
var n2 = 60;
var n3 = 33;

var m1 = n1%2;
var m2 = n2%2;
var m3 = n3%2;

if (m1 == 0 || m2 == 0 || m3 == 0) {
  console.log (true)
}else {
  console.log (false)
}
*/

function par (n1,n2,n3) {

  if (n1%2 == 0 || n2%2 == 0 || n3%2 == 0) {
    return true
  }else {
    return false
  }
}

console.log (par(69,60,33))