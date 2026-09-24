const sensacao = document.getElementById("sensacao")

const temperatura = 8;
const umidade = 30;
const velocidadeVento = 19;

function calcularSensacaoTermica(temperatura, umidade) {
    return sensacaoTermica = temperatura + umidade * 0.1;
}

if (temperatura <= 10 && velocidadeVento > 4.8) {
    calcularSensacaoTermica(temperatura, umidade)
    sensacao.innerHTML = `<dt>Sensação térmica: ${sensacaoTermica}</dt>`;
} else {
    sensacao.innerHTML = "<dt>Temperatura: N/A</dt>";
}