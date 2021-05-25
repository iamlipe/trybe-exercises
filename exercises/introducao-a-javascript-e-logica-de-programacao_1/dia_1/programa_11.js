/*
var salario = 5000;
var salarioDesconto = ""

if (salario <= 1556.94 && salario > 0) {
  salarioDesconto = salario - (salario * 0.08);

}else if (salario > 1556.94 && salario <= 2594.92){
  salarioDesconto = salario - (salario * 0.09);
    if (salarioDesconto >= 1903.99) {
      salarioDesconto = salarioDesconto - ((salarioDesconto*0.075)-142.8)
    }
      
}else if (salario > 2594.92 && salario <= 5189.82) {
  salarioDesconto = salario - (salario * 0.11);
    if (salarioDesconto <= 2826.65 ) {
      salarioDesconto = salarioDesconto - ((salarioDesconto*0.075)-142.8)
    }else if (salarioDesconto > 2826.65 && salarioDesconto <= 3751.05) {
      salarioDesconto = salarioDesconto - ((salarioDesconto*0.15)-354.8)
    }else {
      salarioDesconto = salarioDesconto - ((salarioDesconto*0.225)-636.13)
    }

}else if (salario > 5189.82) {
  if (salarioDesconto >= 4664.68) {
    salarioDesconto = salarioDesconto - ((salarioDesconto*0.275)-869.36)
  }else {
    salarioDesconto = salario - 570.88;
  }

}else {
  salarioDesconto = "Error"
}

return console.log (salarioDesconto)
*/


function salario (salario) {

  var salarioDesconto = ""

  if (salario <= 1556.94 && salario > 0) {
    salarioDesconto = salario - (salario * 0.08);
  
  }else if (salario > 1556.94 && salario <= 2594.92){
    salarioDesconto = salario - (salario * 0.09);
      if (salarioDesconto >= 1903.99) {
        salarioDesconto = salarioDesconto - ((salarioDesconto*0.075)-142.8)
      }
        
  }else if (salario > 2594.92 && salario <= 5189.82) {
    salarioDesconto = salario - (salario * 0.11);
      if (salarioDesconto <= 2826.65 ) {
        salarioDesconto = salarioDesconto - ((salarioDesconto*0.075)-142.8)
      }else if (salarioDesconto > 2826.65 && salarioDesconto <= 3751.05) {
        salarioDesconto = salarioDesconto - ((salarioDesconto*0.15)-354.8)
      }else {
        salarioDesconto = salarioDesconto - ((salarioDesconto*0.225)-636.13)
      }
  
  }else if (salario > 5189.82) {
    if (salarioDesconto >= 4664.68) {
      salarioDesconto = salarioDesconto - ((salarioDesconto*0.275)-869.36)
    }else {
      salarioDesconto = salario - 570.88;
    }
  
  }else {
    salarioDesconto = "Error"
  }

  return (salarioDesconto)
}

console.log (salario(3000))