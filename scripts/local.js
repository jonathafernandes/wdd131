const sensacao = document.getElementById("sensacao")

const temperatura = 8;
const umidade = 30;
const velocidadeVento = 19;

function calcularSensacaoTermica(temperatura, umidade) {
    return temperatura + umidade * 0.1;
}

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacaoTermica = calcularSensacaoTermica(temperatura, umidade);
    sensacao.innerHTML = `<dt>Sensação térmica:</dt><dd>${sensacaoTermica} °C</dd>`;
} else {
    sensacao.innerHTML = "<dt>Sensação térmica:</dt><dd>N/A</dd>";
}