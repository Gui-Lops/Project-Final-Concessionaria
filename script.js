let menuIconBox = document.querySelector(".menu-icon-box");
let box = document.querySelector(".box");

// Função para alternar o menu
menuIconBox.onclick = function (event) {
    menuIconBox.classList.toggle("active");
    box.classList.toggle("active");

    // Impede que o clique no ícone feche o menu imediatamente
    event.stopPropagation();
};

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    let isClickInside = box.contains(event.target) || menuIconBox.contains(event.target);

    if (!isClickInside) {
        menuIconBox.classList.remove("active");
        box.classList.remove("active");
    }
});
