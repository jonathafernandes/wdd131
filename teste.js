const DIAS = 6;
const LIMITE = 30;
let relatorioEstudante = [11, 42, 33, 64, 29, 37, 44];

// for (let i = 0; i < relatorioEstudante.length; i++) {
//     if (relatorioEstudante[i] < LIMITE) {
//         console.log(relatorioEstudante[i]);
//     }
// }

// let indice = 0

// while (indice < relatorioEstudante.length) {
//     if (relatorioEstudante[indice] < LIMITE) {
//         console.log(relatorioEstudante[indice]);
//     }
//     indice++
// }

// relatorioEstudante.forEach((elemento) => {
//     if (elemento < LIMITE) {
//         console.log(elemento)
//     };
// })

for (let i in relatorioEstudante) {
    if (relatorioEstudante[i] < LIMITE) {
        console.log(relatorioEstudante[i])
    }
}