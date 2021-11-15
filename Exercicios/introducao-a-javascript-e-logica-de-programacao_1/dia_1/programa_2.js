/*
var n1 = 50;
var n2 = 50;

if (n1 > n2) {
  console.log (n1+" "+"é maior que"+" "+n2)
} else if (n1 == n2) {
  console.log (n2+" "+"é igual"+" "+n1)
}else {
  console.log (n2+" "+"é maior que"+" "+n1)
}
*/

function bigger (n1,n2) {
  if (n1 > n2) {
    return n1 + ' é maior que o número ' + n2
  } else {
    return n2 + ' é maior que o número ' + n1
  }
}

console.log (bigger(3,24))