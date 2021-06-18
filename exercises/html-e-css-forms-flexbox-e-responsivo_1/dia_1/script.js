// ADICIONAR TODOS OS ESTADOS BRASILEIROS DE FORMA DINAMICA
const listStates = document.getElementById('uf');
const brazilStates = ['Acre - AC', 'Alagoas - AL', 'Amapá - AP', 'Amazonas - AM', 'Bahia - BA', 'Ceará - CE', 'Distrito Federal - DF', 'Espírito Santo - ES', 'Goiás - GO', 'Maranhão - MA', 'Mato Grosso - MT', 'Mato Grosso do Sul - MS', 'Minas Gerais - MG', 'Pará - PA', 'Paraíba - PB', 'Paraná - PR', 'Pernambuco - PE', 'Piauí - PI', 'Roraima - RR', 'Rondônia - RO', 'Rio de Janeiro - RJ', 'Rio Grande do Norte - RN', 'Rio Grande do Sul - RS', 'Santa Catarina - SC', 'São Paulo - SP', 'Sergipe - SE', 'Tocantins - TO'];

function generateStates () {
  for (let key in brazilStates) {
    const states = document.createElement('option');
    states.innerHTML = brazilStates[key];
    listStates.appendChild(states)
  }
}
window.addEventListener("load", generateStates);

// LIMITAR A DATA ATÉ O DIA DE HOJE

document.getElementById('datePickerId').max = new Date().toISOString().split("T")[0];

// ADICIONAR UMA NOVA EXPERIENCIA
const adicionar = document.getElementById('adicionar');
const remover = document.getElementById('remover');
const descriptionCV = document.getElementById('descriptionCV');
const none = document.getElementById('none');
const bottonsOfice = document.getElementById('btn-office');
var limite = 0;

function addBottomRemove () {
  if (limite == 0 && none.style.display == 'flex') {
    none.style.display = 'none'
  }else {
    none.style.display = 'flex'
  }
}

function addOffice () {

  if (limite == 0) {
    addBottomRemove ()
  }
  
  if (limite > 1) {
  } else {
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div')
    const div4 = document.createElement ('div')
    const label1 = document.createElement('label')
    const label2 = document.createElement('label')
    const label3 = document.createElement('label')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const textArea = document.createElement('textarea')
  
    div1.classList.add('fields', 'two', 'rem');
    div2.classList.add ('field');
    div3.classList.add ('field');
    div4.classList.add ('field');
    input1.type = 'text'
    input1.name = 'Cargo'
    input1.className = 'i'
    input2.type = 'date'
    input2.name = 'Data'
    input2.className = 'i'
    label1.innerText = 'Cargo';
    label2.innerText = 'Data';
    label3.innerText = 'Descrição do cargo';
    textArea.rows = 3;
    textArea.name = 'Descrição do cargo'
    textArea.className = 'i';
    
    div.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(label1);
    div2.appendChild(input1);
    div1.appendChild(div3)
    div3.appendChild(label2)
    div3.appendChild(input2)
    div.appendChild(div4)
    div4.appendChild(label3)
    div4.appendChild(textArea)

    descriptionCV.appendChild(div)
  
    limite ++;
  }

}

adicionar.addEventListener('click', addOffice);

function removeOffice () {
  descriptionCV.removeChild(descriptionCV.lastChild);
  limite --;
  addBottomRemove ()
}

remover.addEventListener('click', removeOffice);


$("#cep").focusout(function(){
  //Início do Comando AJAX
  $.ajax({
    //O campo URL diz o caminho de onde virá os dados
    //É importante concatenar o valor digitado no CEP
    url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
    //Aqui você deve preencher o tipo de dados que será lido,
    //no caso, estamos lendo JSON.
    dataType: 'json',
    //SUCESS é referente a função que será executada caso
    //ele consiga ler a fonte de dados com sucesso.
    //O parâmetro dentro da função se refere ao nome da variável
    //que você vai dar para ler esse objeto.
    success: function(resposta){
      //Agora basta definir os valores que você deseja preencher
      //automaticamente nos campos acima.
      $("#logradouro").val(resposta.logradouro);
      $("#complemento").val(resposta.complemento);
      $("#bairro").val(resposta.bairro);
      $("#cidade").val(resposta.localidade);
      //Vamos incluir para que o Número seja focado automaticamente
      //melhorando a experiência do usuário
      $("#numero").focus();
    }
  });
});

function showModal () {
  const content = document.getElementsByClassName('i');

  $('.ui.modal')
    .modal('show')
  ;

  document.getElementById('review').innerHTML = ''

  for (let key of content) {
    document.getElementById('review').innerHTML += key.name +': ' + key.value + '<br>' ;
  }
}

document.getElementById('send').addEventListener('click', showModal);

