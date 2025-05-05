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

/*?*/

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

// boton dia noche
// Selecciona el contenedor donde se insertará el contenido
const container = document.getElementById('content');

// Carga el archivo pagina-1.html y lo inserta en el contenedor
fetch('./src/index/pagina-1.html') // Ruta relativa al archivo HTML
    .then(response => {
        if (!response.ok) {
        throw new Error('No se pudo cargar pagina-1.html');
        }
        return response.text();
    })
    .then(html => {
        container.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al cargar el archivo:', error);
    });

// Botones para cambiar de modo
const modoDiaBtn = document.getElementById('modoDia');
const modoNocheBtn = document.getElementById('modoNoche');

// Cambiar a modo día
modoDiaBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    modoDiaBtn.classList.add('oculto');
    modoNocheBtn.classList.remove('oculto');
});

// Cambiar a modo noche
modoNocheBtn.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    modoNocheBtn.classList.add('oculto');
    modoDiaBtn.classList.remove('oculto');
});
