// Função para navegação suave ao clicar nos links do menu
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        const sectionId = item.textContent.trim().toLowerCase().replace(' ', '-');
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // ajusta para considerar o menu fixo
                behavior: "smooth"
            });
        }
    });
});

// Animações para destacar as exclusividades ao rolar a página
const exclusividades = document.querySelectorAll(".exclusividade-item");

window.addEventListener("scroll", () => {
    exclusividades.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add("highlight");
        } else {
            item.classList.remove("highlight");
        }
    });
});
