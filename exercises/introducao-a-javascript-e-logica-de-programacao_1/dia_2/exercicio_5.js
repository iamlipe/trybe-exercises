let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigger = 0;

for (let index = 0; numbers.length > index; index +=1) {
  if (numbers[index] >= bigger){
    bigger = numbers[index]
  }
}

console.log (bigger)