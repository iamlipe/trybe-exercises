const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (turno) => {
  lesson2.turno = turno
  // console.log (Object.entries(lesson2))
}
addTurno('manhã');


// const showKeysObject = (object) => {
//   // console.log (Object.keys(object))
//   return (Object.keys(object))
// }

// showKeysObject(lesson1);

// const showLengthObject = (object) => {
//   // console.log (Object.keys(object).length)
//   return (Object.keys(object).length)
// }

// showLengthObject(lesson1)

// const showValuesObject = (object) => {
//   // console.log (Object.values(object))
//   return (Object.values(object))
// }

// showValuesObject(lesson1);

const assignObject = () => {
  const obj = {
    lesson1,
    lesson2,
    lesson3
  }
  const allLessons = Object.assign({}, obj)
  console.log (allLessons)
  return (allLessons)
}

assignObject();
