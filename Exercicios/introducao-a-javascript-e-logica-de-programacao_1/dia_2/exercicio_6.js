/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let index = 0; numbers.length > index; index +=1) {
  if (numbers[index]%2 == 1) {
    impar +=1
  }
}

return console.log (impar)
*/

function impar (array) {
  let impar = 0;

  for (let index = 0; array.length > index; index +=1) {
    if (array[index]%2 == 1) {
      impar +=1
    }
  }
  return console.log (impar)
}

impar([2,4,35,4,6,7,78,56,68,865])