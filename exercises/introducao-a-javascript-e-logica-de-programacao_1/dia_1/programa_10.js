var custoProduto = 1400;
var precoProduto = 1550;

var lucro = (precoProduto - (custoProduto + custoProduto*0.2)) * 1000;


if (lucro <= 0 || custoProduto <= 0 || precoProduto <= 0) {
  console.log ("erro");
} else {
  console.log (lucro);
}
