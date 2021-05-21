let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; numbers.length > index; index +=1 ) {
  
    sum = sum + numbers[index];
}

var med = sum / numbers.length;

return console.log (med);