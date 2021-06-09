const listStates = document.getElementById('estados');
const brazilStates = ['Acre - AC', 'Alagoas - AL', 'Amapá - AP', 'Amazonas - AM', 'Bahia - BA', 'Ceará - CE', 'Distrito Federal - DF', 'Espírito Santo - ES', 'Goiás - GO', 'Maranhão - MA', 'Mato Grosso - MT', 'Mato Grosso do Sul - MS', 'Minas Gerais - MG', 'Pará - PA', 'Paraíba - PB', 'Paraná - PR', 'Pernambuco - PE', 'Piauí - PI', 'Roraima - RR', 'Rondônia - RO', 'Rio de Janeiro - RJ', 'Rio Grande do Norte - RN', 'Rio Grande do Sul - RS', 'Santa Catarina - SC', 'São Paulo - SP', 'Sergipe - SE', 'Tocantins - TO'];

function generateStates () {
  for (let key in brazilStates) {
    const states = document.createElement('option');
    states.innerHTML = brazilStates[key];
    listStates.appendChild(states)
  }
}
window.addEventListener("load", generateStates);



document.getElementById('datePickerId').max = new Date().toISOString().split("T")[0];
