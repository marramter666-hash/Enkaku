document.addEventListener("DOMContentLoaded", function () {
    var titulo = document.getElementById("titulo-typed");
    if (!titulo || typeof Typed === "undefined") return;

    // Quien prefiere menos movimiento ve el título en español, sin animación
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    new Typed("#titulo-typed", {
        strings: [
            "Bienvenidos a la casa de la salsa en Tokio",
            "東京のサルサの家へ、ようこそ",
            "Bienvenidos a la casa de la salsa en Tokio",
            "東京のサルサの家へ、ようこそ"
        ],
        typeSpeed: 100,          // velocidad al escribir (ms por letra)
        backSpeed: 50,          // velocidad al borrar
        backDelay: 1000,        // cuánto se queda el título completo antes de borrarse
        // startDelay: 3600,
        loop: true,             // alterna español ↔ japonés sin parar
        smartBackspace: false,  // borra la frase entera
        // cursorChar: "|",
        preStringTyped: function (pos) {
            // marca el idioma de cada frase (lectores de pantalla y fuente japonesa)
            titulo.setAttribute("lang", pos === 0 ? "es" : "ja");
        }
    });
});