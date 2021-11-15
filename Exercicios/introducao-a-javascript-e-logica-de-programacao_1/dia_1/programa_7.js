/*
var nota = 76;

if (nota >= 90 && nota <= 100) {
  console.log ("Parabens sua nota é A");
}else if (nota >= 80 && nota <90) {
  console.log ("sua nota é B");
}else if (nota >= 70 && nota <80) {
  console.log ("sua nota é C");
}else if (nota >= 60 && nota <70) {
  console.log ("sua nota é D");
}else if (nota >= 50 && nota <60) {
  console.log ("sua nota é E");
}else if (nota < 50 && nota >= 0) {
  console.log ("sua nota é F");
}else {
  console.log ("error")
}
*/

function nota (n1) {
  if (n1 >= 90 && n1 <= 100) {
    return ("Parabens sua nota é A");
  }else if (n1 >= 80 && n1 <90) {
    return ("sua nota é B");
  }else if (n1 >= 70 && n1 <80) {
    return ("sua nota é C");
  }else if (n1 >= 60 && n1 <70) {
    return ("sua nota é D");
  }else if (n1 >= 50 && n1 <60) {
    return ("sua nota é E");
  }else if (n1 < 50 && n1 >= 0) {
    return ("sua nota é F");
  }else {
    return ("error")
  }
}

console.log (nota(30))