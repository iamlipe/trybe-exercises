/*
var n1 = 300;
var n2 = 100;
var n3 = 120;

if (n1 > n2 && n1 > n3) {
  console.log(n1+" "+"é maior que"+" "+n2 +" "+"e"+" "+n3)

}else if (n2 > n1 && n2 > n3) {
  console.log(n2+" "+"é maior que"+" "+n1 +" "+"e"+" "+n3)

}else {
  console.log(n3+" "+"é maior que"+" "+n1 +" "+"e"+" "+n2)

}
*/

function bigger (n1,n2,n3) {
  if (n1 > n2 && n1 > n3) {
    return n1+" "+"é maior que"+" "+n2 +" "+"e"+" "+n3
  
  }else if (n2 > n1 && n2 > n3) {
    return n2+" "+"é maior que"+" "+n1 +" "+"e"+" "+n3
  
  }else {
   return n3+" "+"é maior que"+" "+n1 +" "+"e"+" "+n2
  
  }
}

console.log (bigger(2,3,5))