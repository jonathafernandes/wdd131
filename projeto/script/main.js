const jogos = [
    {
        id: "hollow-knight",
        nome: "Hollow Knight",
        descricao:
            "Um reino subterrâneo cheio de mistério, combates precisos e uma exploração muito gratificante.",
        categorias: ["Ação", "Exploração"],
        avaliacao: 9.6,
        imagem: "imagens/hollow-knight.jpg",
        imagemAlt: "Cenário do jogo Hollow Knight"
    },
    {
        id: "celeste",
        nome: "Celeste",
        descricao:
            "Desafios de precisão, temática íntima e uma jornada de superação muito bem construída.",
        categorias: ["Plataforma", "Narrativa"],
        avaliacao: 9.5,
        imagem: "imagens/celeste.jpg",
        imagemAlt: "Madeline escalando a montanha em Celeste"
    },
    {
        id: "stardew-valley",
        nome: "Stardew Valley",
        descricao:
            "Uma rotina que vira ritual: plantar, pescar, conhecer pessoas e construir uma nova vida.",
        categorias: ["Exploração", "Narrativa"],
        avaliacao: 9.4,
        imagem: "imagens/stardew-valley.jpg",
        imagemAlt: "Fazenda e personagens de Stardew Valley"
    },
    {
        id: "inside",
        nome: "Inside",
        descricao:
            "Uma narrativa silenciosa e poderosa, com momentos visualmente imersivos e impactantes.",
        categorias: ["Puzzle", "Filosófico"],
        avaliacao: 9.3,
        imagem: "imagens/inside.jpg",
        imagemAlt: "Garoto explorando o cenário sombrio de Inside"
    },
    {
        id: "journey",
        nome: "Journey",
        descricao:
            "Uma jornada visual e emocional que valoriza silêncio, pausa e conexão entre jogadores.",
        categorias: ["Aventura", "Atmosfera"],
        avaliacao: 9.2,
        imagem: "imagens/journey.png",
        imagemAlt: "Viajante atravessando o deserto em Journey"
    }
];

const CHAVE_FAVORITOS = "indie-vault-favoritos"

let favoritos = JSON.parse(localStorage.getItem(CHAVE_FAVORITOS)) || []

const listaJogos = document.querySelector("#game-list")
const botoesFiltros = document.querySelectorAll(".filter-pill")

function criarCard(jogo) {
    const etiquetas = jogo.categorias.map(c =>
        `<span class="meta-tag">${c}</span>`
    ).join("")

    const estaFavoritado = favoritos.includes(jogo.id)

    const textoFavorito = estaFavoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"

    return `
    <article class="game-card" data-game-id="${jogo.id}">
        <img
            class="art"
            src="${jogo.imagem}"
            alt="${jogo.imagemAlt}"
            width="800"
            height="450"
            loading="lazy"
        >

        <div class="card-body">
            <div class="meta-row">
                ${etiquetas}
            </div>

            <h3>${jogo.nome}</h3>
            <p>${jogo.descricao}</p>

            <div class="rating">
                <span aria-label="Cinco estrelas">★★★★★</span>
                ${jogo.avaliacao.toFixed(1)}/10
            </div>
            <button
                class="favorite-button ${estaFavoritado ? "active" : ""}"
                type="button"
                data-favorite-id="${jogo.id}"
                aria-pressed="${estaFavoritado}"
            >
                ${textoFavorito}
            </button>
        </div>
    </article>
    `
}

function renderizarJogos(categoriaAtiva) {
    const jogosFiltrados = jogos.filter(j => {
        return (
            categoriaAtiva === "Todos" || j.categorias.includes(categoriaAtiva)
        )
    })

    if (jogosFiltrados.length === 0) {
        listaJogos.innerHTML = `
            <p class="empty-message">
                Nenhum jogo encontrado nesta categoria.
            </p>
        `
        return
    }

    listaJogos.innerHTML = jogosFiltrados.map(jogo => criarCard(jogo)).join("")
}

botoesFiltros.forEach(b => {
    b.addEventListener("click", () => {
        const categoriaEscolhida = b.dataset.category

        botoesFiltros.forEach(i => {
            const estaAtivo = i === b

            i.classList.toggle("active", estaAtivo)
            i.setAttribute("aria-pressed", String(estaAtivo))
        })

        renderizarJogos(categoriaEscolhida)
    })
})


function salvarFavoritos() {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
}

function alternarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(
            favoritoId => favoritoId !== id
        )
    } else {
        favoritos.push(id)
    }

    salvarFavoritos()
}

renderizarJogos("Todos");

listaJogos.addEventListener("click", e => {
    const botao = e.target.closest(".favorite-button")

    if (!botao) {
        return
    }

    const id = botao.dataset.favoriteId

    alternarFavorito(id)

    const estaFavoritado = favoritos.includes(id)

    botao.textContent = estaFavoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"

    botao.setAttribute("aria-pressed", String(estaFavoritado))
    botao.classList.toggle("active", estaFavoritado)
})
