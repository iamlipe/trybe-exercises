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

// const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   const bookWithAuthorHaveThreeInitial =  books.filter((book) => (
//     book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
//   )).name;
//   return bookWithAuthorHaveThreeInitial;
// }

// assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks() {
//   const ageBooks = books.filter((oldBook) => (2021 - oldBook.releaseYear) >= 60);
//   const result = ageBooks.map((listBoks) => listBoks.name)
//   return result
// }

// assert.deepStrictEqual(oldBooks(), expectedResult);

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors() {
//   const filterFiccaoFantasy = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
//   const result = filterFiccaoFantasy.map((name) => name.author.name);
//   const resultOrder = result.sort();

//   return resultOrder
// }

// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered() {
//   const filterBooksOld = books.filter((filterBook) => (2021 - filterBook.releaseYear) >= 60)
//   const orderBooksOld = filterBooksOld.sort(( a , b ) => a.releaseYear - b.releaseYear)
//   return orderBooksOld;
// }

// assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

// const expectedResult = [
//   { 
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   },
// ];

// function fantasyOrScienceFiction() {
//   return books.filter((genre) => genre.genre === 'Ficção Científica' || genre.genre === 'Fantasia');
// }

// assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);


// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

// function nameAndAge() {
//   const orderAge = books.sort ((orderAgeA, orderAgeB ) => (orderAgeA.releaseYear - orderAgeA.author.birthYear) - (orderAgeB.releaseYear - orderAgeB.author.birthYear));
//   const result = orderAge.map ((age) => {
//     return {
//       age: (age.releaseYear - age.author.birthYear),
//       author: age.author.name,
//       }
//   })
//   return result
// };

// assert.deepStrictEqual(nameAndAge(), expectedResult);

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

// function formatedBookNames() {
//   return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// }

// assert.deepStrictEqual(formatedBookNames(), expectedResult);