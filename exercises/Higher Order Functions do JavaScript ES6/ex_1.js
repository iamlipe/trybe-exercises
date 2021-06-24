const obj = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {nome: `${fullName}`, email: `${email}@trybe.com` };
}

const lvlCode = (fullname) => {
  return (`${fullname} é simpleste o/a melhor code of the year` )
}

const newEmployees = (call) => {
  const employees = {
    id1: call('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: call('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: call('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


console.log (newEmployees(lvlCode)) 