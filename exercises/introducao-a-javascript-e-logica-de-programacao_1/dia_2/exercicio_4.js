let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; numbers.length > index; index +=1 ) {
  
    sum = sum + numbers[index];
}

let med = sum / numbers.length;

if (med > 20) {
  console.log ("valor maior que 20")
}else {
  console.log ("valor menor ou igual a 20")
}

function avarege (array) {
  let sum = 0;

  for (let index = 0; array.length > index; index +=1 ) {
    sum = sum + array[index];
  }

  var med = sum / array.length;
  if (med > 20) {
    console.log ("valor maior que 20")
  }else {
    console.log ("valor menor ou igual a 20")
  }
}

avarege([23,0,0,0,13,0,3,6])
