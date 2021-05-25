/*
var pecaXadrez = "dama";

if (pecaXadrez == "rei" ) {
  console.log ("somente anda uma casa por lance");
}else if (pecaXadrez == "dama" || pecaXadrez == "raiha") {
  console.log ("peça mais poderosa e versátil do tabuleiro, anda tanto em paralelas (linhas ou colunas) quanto em diagonais, tantas casas quanto se desejar, desde que haja espaço no tabuleiro");
}else if (pecaXadrez == "torre") {
  console.log ("o movimento executado pelas torres é sempre em paralelas (linhas ou colunas), quantas casas desejar desde que haja espaço livre.")
}else if (pecaXadrez == "bispo") {
  console.log ("o movimento executado pelos bispo é sempre em diagonais, quantas casas desejar desde que haja espaço livre.")
}else if (pecaXadrez == "cavalo") {
  console.log ("o cavalo anda em um formato que reproduz a letra L, ou seja, duas casas, na direção horizontal ou vertical,")
}else if (pecaXadrez == "peão" || pecaXadrez == "peao") {
  console.log ("uma casa desocupada à frente")
}else {
  console.log ("error")
}
*/

function xadrez (peca) {

  if (peca == 'rei') {
    return ("somente anda uma casa por lance");
  }else if (peca == 'rainha' || peca == 'dama') {
    return ("peça mais poderosa e versátil do tabuleiro, anda tanto em paralelas (linhas ou colunas) quanto em diagonais, tantas casas quanto se desejar, desde que haja espaço no tabuleiro");
  }else if (peca == 'torre') {
    return ("o movimento executado pelas torres é sempre em paralelas (linhas ou colunas), quantas casas desejar desde que haja espaço livre.")
  }else if (peca == 'bispo') {
    return ("o movimento executado pelos bispo é sempre em diagonais, quantas casas desejar desde que haja espaço livre.")
  }else if (peca == 'cavalo') {
    return ("o cavalo anda em um formato que reproduz a letra L, ou seja, duas casas, na direção horizontal ou vertical,")
  }else if (peca == 'peão' || peca == 'peao') {
    return ("uma casa desocupada à frente")
  }else {
    return ("error")
  }

}

console.log (xadrez('rei'))