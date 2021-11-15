/*
let numeros = [];

for (let index = 1; 25 >= index; index +=1) {
  numeros.push(index/2)
}

return console.log (numeros)
*/

function numeros (n1) {
  let numeros = [];


  for (let index = 1; n1 >= index; index +=1) {
    numeros.push(index/2)
  }
  
  return console.log (numeros)
}

numeros(100)