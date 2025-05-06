// Inicialización de Swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                const activeSlide = swiper.slides[swiper.activeIndex];
                const url = activeSlide.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            }
        }
    });
});

// Variables para el modo día/noche
const body = document.body;
const botonDia = document.getElementById("modoDia");
const botonNoche = document.getElementById("modoNoche");
const logoDia = document.getElementById("logoDia");
const logoNoche = document.getElementById("logoNoche");

// Evento para activar el modo día
botonDia.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");

    // Alternar visibilidad de los botones
    botonDia.classList.remove("visible");
    botonDia.classList.add("oculto");
    botonNoche.classList.remove("oculto");
    botonNoche.classList.add("visible");

    // Alternar visibilidad de los logos
    logoDia.classList.remove("oculto");
    logoDia.classList.add("visible");
    logoNoche.classList.remove("visible");
    logoNoche.classList.add("oculto");

    // Animación de transición con GSAP
    gsap.fromTo(body, { opacity: 0.5 }, { opacity: 1, duration: 0.5 });
});

// Evento para activar el modo noche
botonNoche.addEventListener("click", () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");

    // Alternar visibilidad de los botones
    botonNoche.classList.remove("visible");
    botonNoche.classList.add("oculto");
    botonDia.classList.remove("oculto");
    botonDia.classList.add("visible");

    // Alternar visibilidad de los logos
    logoNoche.classList.remove("oculto");
    logoNoche.classList.add("visible");
    logoDia.classList.remove("visible");
    logoDia.classList.add("oculto");

    // Animación de transición con GSAP
    gsap.fromTo(body, { opacity: 0.5 }, { opacity: 1, duration: 0.5 });
});

// Función para cargar contenido dinámico
function cargarContenido(ruta, contenedorId) {
    const container = document.getElementById(contenedorId);

    fetch(ruta) // Ruta relativa al archivo HTML
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar ${ruta}`);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
        });
}

// Cargar contenido de pagina-1.html
cargarContenido('./src/index/pagina-1.html', 'content');

// Cargar contenido de pagina-2.html
cargarContenido('./src/index/pagina-2.html', 'content-2');

// Cargar contenido de pagina-3.html
cargarContenido('./src/index/pagina-3.html', 'content-3');

// Cargar contenido de pagina-4.html
cargarContenido('./src/index/pagina-4.html', 'content-4');

// Cargar contenido de pagina-5.html
cargarContenido('./src/index/pagina-5.html', 'content-5');





