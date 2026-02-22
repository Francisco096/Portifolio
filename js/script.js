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
let map;

// Função chamada pela API do Google quando carrega
function initMap() {
    // Coordenadas iniciais (Padrão: Brasil)
    const initialPosition = { lat: -10.605332, lng: -37.135270 }; // Exemplo: Siriri, Sergipe

    map = new google.maps.Map(document.getElementById("map"), {
        center: initialPosition,
        zoom: 12, // Zoom inicial
        styles: [] // Se quiser um mapa customizado, coloca o estilo aqui
    });
}

// Botão "Mostrar onde estou"
const btnLocalizar = document.getElementById("btnLocalizar");
const statusText = document.getElementById("status");

if (btnLocalizar) {
    btnLocalizar.addEventListener("click", () => {

        // Verifica se o navegador suporta geolocalização
        if (navigator.geolocation) {
            statusText.textContent = "Obtendo sua localização...";

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Centraliza o mapa no usuário
                    map.setCenter(userLocation);
                    map.setZoom(15);

                    // Adiciona um marcador (Pin) onde o usuário está
                    new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        title: "Você está aqui!",
                        animation: google.maps.Animation.DROP
                    });

                    statusText.textContent = "Localização encontrada!";
                    statusText.style.color = "green";
                },
                () => {
                    statusText.textContent = "Erro: Não foi possível obter sua localização.";
                    statusText.style.color = "red";
                }
            );
        } else {
            statusText.textContent = "Seu navegador não suporta geolocalização.";
        }
    });
}