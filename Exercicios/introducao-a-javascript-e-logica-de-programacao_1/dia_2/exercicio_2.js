/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; numbers.length > index; index +=1 ) {
  
    sum = sum + numbers[index];
}
*/

function soma (array) {

  let sum = 0;

  for (let index = 0; array.length > index; index +=1 ) {
    sum = sum + array[index];
  }

  console.log (sum)
}
  
soma([1,32,423,532,432,5,6,7324,53,32,4,52,6])