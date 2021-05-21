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