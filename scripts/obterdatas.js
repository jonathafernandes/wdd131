const anoAtual = document.getElementById('anoatual');
const ultimaModificacao = document.getElementById('ultimaModificacao');

anoAtual.innerHTML = new Date().getFullYear();
ultimaModificacao.innerHTML = `Última modicação: ${document.lastModified}`;