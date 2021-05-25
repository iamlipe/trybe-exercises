/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; numbers.length > index; index +=1 ) {
    sum = sum + numbers[index];
}

var med = sum / numbers.length;

return console.log (med);
*/

function avarege (array) {
  let sum = 0;

  for (let index = 0; array.length > index; index +=1 ) {
    sum = sum + array[index];
  }

  var med = sum / array.length;
  console.log (med)
}

avarege([23,523,532,52,1213,45,3,6])



