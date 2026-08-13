/* =========================================
   MENÚ RESPONSIVE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================================
   CERRAR MENÚ AL HACER CLIC
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   BOTÓN VOLVER ARRIBA
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   ANIMACIONES AL APARECER
========================================= */

const elements = document.querySelectorAll(
    ".info-card, .effect, .prevention-item, .fact-card, .piura-box"
);


elements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================= */

const currentYear = new Date().getFullYear();

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.textContent =
        © ${currentYear} Proyecto Educativo | Fenómeno de El Niño;

}
