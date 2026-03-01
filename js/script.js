/* MODO ESCURO (Dark Mode) */
function toggleTheme() {
    document.body.classList.toggle("dark");

    // Opcional: Salvar a preferência do usuário no navegador
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Verifica se o usuário já tinha escolhido o tema escuro antes
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}


/* ANIMAÇÃO DAS BARRAS DE HABILIDADE */
// Espera o site carregar para animar as barras
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        // Pega a largura definida no HTML (ex: 55%)
        const width = bar.getAttribute('data-width');

        // Aplica a largura com um pequeno atraso para dar efeito visual
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});


/* =========================================
   3. FORMULÁRIO DE CONTATO
   ========================================= */
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        // Impede que a página recarregue
        event.preventDefault();

        // Simula o envio
        alert('Obrigado! Sua mensagem foi enviada com sucesso.');

        // Limpa os campos
        contactForm.reset();
    });
}


/* GOOGLE MAPS & GEOLOCALIZAÇÃO */
