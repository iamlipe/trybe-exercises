/* 
var a = 1;
var b = 2;

var adicao = a + b;
var subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;
var modulo = a % b;

console.log (adicao)
console.log (subtracao)
console.log (multiplicacao)
console.log (divisao)
console.log (modulo)
*/

function calc (num1,num2,operacao ) {

  if (operacao == '+') {
    return num1 + num2
  } else if (operacao == '-') {
    return num1 - num2
  } else if (operacao == '*') {
    return num1 * num2
  } else if (operacao == '/') {
    return num1 / num2
  } else if (operacao == '%') {
    return num1 % num2
  } else {
    return 'não é uma operação valida'
  }
}

console.log (calc(3,5,'/'))

