function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// EXERCICIO 1
for (let key in dezDaysList) {
  let dayList = document.createElement('li')
  dayList.classList.add('day')
  dayList.innerHTML = dezDaysList[key]
  document.querySelector('#days').appendChild(dayList)

  if (dezDaysList[key] == 25 || dezDaysList[key] == 31 || dezDaysList[key] == 24) {
    dayList.classList.add('holiday')
  }
  if (dezDaysList[key] == 4 || dezDaysList[key] == 11 || dezDaysList[key] == 18 || dezDaysList[key] == 25 ) {
    dayList.classList.add('friday')
  }
}
// EXERCICIO 2 E 3
const bottom = document.createElement('input')
bottom.type = 'button'
bottom.value = 'Feriados'
bottom.classList.add('btn-holiday')
document.querySelector('.buttons-container').appendChild(bottom)

bottom.addEventListener('click', holiday)
const feriados = document.querySelectorAll('.holiday')
feriados.value = 'off'


function holiday () {

  for (let index = 0; feriados.length > index; index += 1) {

    if (feriados.value == 'off') {
      feriados[index].style.backgroundColor = "blue"
    }else {
      feriados[index].style.backgroundColor = "rgb(238,238,238)"
    }
  }
  if (feriados.value == 'off') {
    feriados.value = 'on'
  }else {
    feriados.value = 'off'
  }
}

// EXERCICIO 4 E 5

const bottomF = document.createElement('input')
bottomF.type = 'button'
bottomF.value = 'Sextou!'
bottomF.classList.add('btn-holiday')
document.querySelector('.buttons-container').appendChild(bottomF)

bottomF.addEventListener('click', friday)
const sextou = document.querySelectorAll('.friday')
sextou.value = 'off'

function friday () {

  for (let index = 0; sextou.length > index; index += 1) {

    if (sextou.value == 'off') {
      sextou[index].style.backgroundColor = "green"
    }else {
      sextou[index].style.backgroundColor = "rgb(238,238,238)"
    }
  }
  if (sextou.value == 'off') {
    sextou.value = 'on'
  }else {
    sextou.value = 'off'
  }
}

// EXERCICIO 6
for (let index = 0; document.querySelectorAll('.day').length > index; index += 1) {
  const dayEnter = document.querySelectorAll('.day')[index]
  dayEnter.addEventListener('mouseover', dayZoom)
  dayEnter.addEventListener('mouseleave', dayZoom)
  dayEnter.addEventListener('click', dayColor)
}
function dayZoom (event) {
  if (event.target.style.fontSize == '30px') {
    event.target.style.fontSize = '20px'
  }else {
    event.target.style.fontSize = '30px'
  }
}

//EXERCICIO 10


function dayColor (eventColor){
  if (document.querySelector('.selected') == null){
    eventColor.target.style.color = eventColor.target.style.color
  }else {
    eventColor.target.style.color = document.querySelector('.selected').style.backgroundColor
    document.querySelector('.selected').classList.remove('selected')
  }
}


// EXERCICIO 7, 8 E 9

const inputTask = document.createElement('input')
const bottomTask = document.createElement('input')
const inputSubColor = document.createElement('input')
inputTask.Value = 'tarefa'
inputSubColor.value = 'color'
bottomTask.type = 'button'
bottomTask.value = 'adicionar tarefa'
bottomTask.style.marginLeft = '5px'
document.querySelector('.my-tasks').appendChild(inputTask)
document.querySelector('.my-tasks').appendChild(bottomTask)
document.querySelector('.my-tasks').appendChild(inputSubColor)

bottomTask.addEventListener('click', addTask)

function addTask () {
  var task = document.createElement('span')
  task.innerHTML = inputTask.value
  document.querySelector('.my-tasks').appendChild(task)
  inputTask.value = ''
  

  var sub = document.createElement('div')
  sub.style.backgroundColor = inputSubColor.value
  document.querySelector('.my-tasks').appendChild(sub)
  inputSubColor.value = ''

  sub.addEventListener('click', changeColor)
  function changeColor () {
    sub.classList.add('task')

    if (sub.classList.contains('selected')){
      sub.classList.remove('selected')
    }else {
      sub.classList.add('selected')
    }
  }
}




