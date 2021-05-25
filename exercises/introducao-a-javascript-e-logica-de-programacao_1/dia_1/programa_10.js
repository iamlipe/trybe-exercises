/*
var custoProduto = 1000;
var precoProduto = 1550;

var lucro = (precoProduto - (custoProduto + custoProduto*0.2)) * 1000;


if (lucro <= 0 || custoProduto <= 0 || precoProduto <= 0) {
  console.log ("erro");
} else {
  console.log (lucro);
}
*/


function lucro (custoProduto, precoProduto) {

  var lucro = (precoProduto - (custoProduto + custoProduto*0.2)) * 1000;

  if (lucro <= 0 || custoProduto <= 0 || precoProduto <= 0) {
    return ("erro");
  } else {
    return (lucro);
  }
}

console.log (lucro(1000,1550))