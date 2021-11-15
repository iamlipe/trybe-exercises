/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smaller = 0;

for (let index = 0; numbers.length > index; index +=1) {
  if (index == 0){
    smaller = numbers[index]

  }else if (numbers[index] <= smaller ) { 
    smaller = numbers[index]
  }    
}

return console.log (smaller)
*/

function smaller (array) {

  let smaller = 0;

  for (let index = 0; array.length > index; index +=1) {
    if (index == 0){
      smaller = array[index]

    }else if (array[index] <= smaller ) { 
      smaller = array[index]
    }    
  } 

return console.log (smaller)

}

smaller([2,4,35,4,6,7,78,56,68,865])