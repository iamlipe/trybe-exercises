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