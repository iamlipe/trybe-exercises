/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigger = 0;

for (let index = 0; numbers.length > index; index +=1) {
  if (numbers[index] >= bigger){
    bigger = numbers[index]
  }
}

console.log (bigger)
*/

function bigger (array) {
  
  let bigger = 0;

  for (let index = 0; array.length > index; index +=1) {
    if (array[index] >= bigger){
      bigger = array[index]
    }
  }

  console.log (bigger)
}

bigger([1,3,4,35,5,457,57,8,45])