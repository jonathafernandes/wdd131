const capituloFavorito = document.getElementById('favchap');
const botaoAdicionar = document.querySelector('button');
const lista = document.getElementById('list');

botaoAdicionar.addEventListener('click', () => {
    if (capituloFavorito.value.trim() !== '') {
        const itemLista = document.createElement('li');
        const botaoRemover = document.createElement('button');

        itemLista.textContent = capituloFavorito.value;
        botaoRemover.textContent = '❌';
        itemLista.append(botaoRemover);
        lista.append(itemLista);

        botaoRemover.addEventListener('click', () => {
            lista.removeChild(itemLista)
            capituloFavorito.focus();
        })

        capituloFavorito.value = '';
        capituloFavorito.focus();
    }
})

