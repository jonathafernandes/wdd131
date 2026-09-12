const botaoMenu = document.querySelector('.menu-botao');

botaoMenu.addEventListener('click', () => {
    const menu = document.querySelector('#menu-principal');
    menu.classList.toggle('aberto');
    botaoMenu.classList.toggle('aberto');
});