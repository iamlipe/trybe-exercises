const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// EXERCICIO 7
const expectedResult = false;

function authorUnique() {
  return books.every((element) => 
  !books.some((element2) => (element.author.birthYear === element2.author.birthYear) &&
  (element.author.name !== element2.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult);

// EXERCICIO 6
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990  )
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

//EXERCICIO 5
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return (books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear < 2000)) 
}


assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// EXERCICIO 4
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return (books.sort((a,b) => b.releaseYear - a.releaseYear ));
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

// EXERCICIO 3
const expectedResult = {author: {birthYear: 1948,name: 'George R. R. Martin',},genre: 'Fantasia',id: 1,name: 'As Crônicas de Gelo e Fogo',releaseYear: 1991,};

function getNamedBook() {
  const answer = books.find((key) => key.name.length >= 26);
  return(`{author: {birthYear: ${answer.author.birthYear},name: '${answer.author.name}',},genre: '${answer.genre}',id: ${answer.id},name: '${answer.name}',releaseYear: ${answer.releaseYear},}`)
};

assert.deepStrictEqual(getNamedBook(), expectedResult);

// EXERCICIO 2
function authorBornIn1947(year) {
  return books.find((key) => key.author.birthYear === year).author.name;
}

assert.strictEqual(authorBornIn1947(1947), 'Stephen King');

// EXERCICIO 1
function smallerName() {
  let nameBook = '';

  books.forEach((key) => {
    if (nameBook.length === 0){
      nameBook = key.name;
    }
    if (key.name.length < nameBook.length) {
      nameBook = key.name;
    }
  });
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');