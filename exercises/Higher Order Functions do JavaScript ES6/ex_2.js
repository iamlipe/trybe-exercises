const numSort = (myNumber) => {
  const sort = Math.floor(Math.random() * 5 + 1)
  return (result(sort, myNumber));
}

const result = (sort, myNumber) => {
  if (sort === myNumber){
    return (`Parabens seu número (${myNumber}) foi o sorteado`);
  }
  return (`Não foi desse vez que o seu número (${myNumber}) foi o sorteado`)
}

console.log(numSort(2))
