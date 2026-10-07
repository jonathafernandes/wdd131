const capituloFavorito = document.getElementById('favchap');
const botaoAdicionar = document.querySelector('button');
const lista = document.getElementById('list');

let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach(capitulo => {
    exibirLista(capitulo);
});

botaoAdicionar.addEventListener('click', () => {
    if (capituloFavorito.value.trim() !== '') {
        exibirLista(capituloFavorito.value)
        arrayCapitulos.push(capituloFavorito.value)

        definirListaDeCapitulos()

        capituloFavorito.value = '';
        capituloFavorito.focus();
    }
})

function exibirLista(item) {
    let li = document.createElement('li');
    let botaoRemover = document.createElement('button');

    li.textContent = item;
    botaoRemover.textContent = '❌';
    botaoRemover.classList.add('delete')
    li.append(botaoRemover);
    lista.append(li);

    botaoRemover.addEventListener('click', () => {
        lista.removeChild(li)
        excluirCapitulo(li.textContent);

        capituloFavorito.focus();
    })
}

function definirListaDeCapitulos() {
    localStorage.setItem('capitulos', JSON.stringify(arrayCapitulos));
}

function obterListaDeCapitulos() {
    return JSON.parse(localStorage.getItem('capitulos'));
}

function excluirCapitulo(capitulo) {
    capitulo = capitulo.slice(0, capitulo.length - 1)

    arrayCapitulos = arrayCapitulos.filter(i => i != capitulo)
    definirListaDeCapitulos()
}