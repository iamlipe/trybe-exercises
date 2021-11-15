let n = 10;
let symbol = '*';
let inputLine = '';
let inputPosition = n;
let base = "";

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex >= inputPosition && columnIndex < n-inputPosition ) {
      inputLine = inputLine + symbol;
    }else {
      inputLine = inputLine + ' ';
    }
  }  
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;

  if (lineIndex >= n-1) {
    for (let index = 0; n > index; index +=1 ) {
      base = base + symbol
    }
    console.log (base)
  }
};
