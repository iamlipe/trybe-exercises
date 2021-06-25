const correctAnswers = (rightAnswers, studentAnswers) => {
  let correct = 0;
  let grade = 0;
  for (let index = 0; rightAnswers.length > index; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      grade += 1;
      correct += 1
    } else {
      grade -= 0.5;
    }
  }
  return (`sua nota foi ${grade} e acertou ${correct} perguntas`)
}

const test = (rightAnswers, studentAnswers, correctAnswers) => {
  return correctAnswers(rightAnswers, studentAnswers)
}

const answers = () => {
  const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
  return test(rightAnswers, studentAnswers, correctAnswers)
}

console.log (answers())