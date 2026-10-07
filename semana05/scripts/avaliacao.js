const totalAvaliacoes = document.getElementById("contador-avaliacoes")

let quantidadeTotal = Number(localStorage.getItem("quantidadeTotal") || 0)

document.addEventListener('DOMContentLoaded', () => {
    quantidadeTotal++
    localStorage.setItem('quantidadeTotal', quantidadeTotal);
    totalAvaliacoes.textContent = quantidadeTotal
})