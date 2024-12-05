function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    const conteudo = document.getElementById("conteudo");
    menu.classList.toggle("open-menu");
    conteudo.classList.toggle("menu-aberto");
}
