/* Modal de detalle de disco.
   Depende de: jQuery, el array global `vinyls`, y ESTADOS / CONDICIONES / pintarTxtJp() de vinilos.js */
jQuery(function ($) {
    var RUTA_IMG = "../assets/img/";
    var RUTA_MUSIC = "../assets/music/";
    var AUTOPLAY = true;                 // false = el track solo suena al pulsar el botón

    var $modal = $("#modal");
    var $play = $("#modal-play");
    var audio = new Audio();
    audio.preload = "metadata";
    var duracionFallback = 0;            // segundos, tomados de track.duracion

    /* ---------- Utilidades de tiempo ---------- */
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function mmss(seg) {
        seg = Math.max(0, Math.floor(seg || 0));
        return pad(Math.floor(seg / 60)) + ":" + pad(seg % 60);
    }
    function aSegundos(texto) {          // "3:42" -> 222
        var p = String(texto || "").split(":");
        return p.length === 2 ? (+p[0]) * 60 + (+p[1]) : 0;
    }
    function pintarTiempo() {
        var total = (isFinite(audio.duration) && audio.duration > 0) ? audio.duration : duracionFallback;
        $("#modal-tiempo").text(mmss(audio.currentTime) + "/" + mmss(total));
    }
    function reproducir() {
        var p = audio.play();
        if (p && p.catch) p.catch(function () {});   // el navegador puede bloquear el autoplay
    }

    /* ---------- Eventos del audio ---------- */
    audio.addEventListener("timeupdate", pintarTiempo);
    audio.addEventListener("loadedmetadata", pintarTiempo);
    audio.addEventListener("play", function () {
        $play.addClass("is-playing").attr("aria-label", "Pausar");
    });
    audio.addEventListener("pause", function () {
        $play.removeClass("is-playing").attr("aria-label", "Reproducir");
    });
    audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        $play.removeClass("is-playing").attr("aria-label", "Reproducir");
        pintarTiempo();
    });
    $play.on("click", function () {
        if (audio.paused) reproducir(); else audio.pause();
    });

    /* ---------- Abrir ---------- */
    function abrir(id) {
        var v = vinyls.filter(function (x) { return String(x.id) === String(id); })[0];
        if (!v) return;
        var artistas = v.artista.join(" & ");

        $("#modal-portada").attr({ src: RUTA_IMG + v.portada, alt: artistas.toUpperCase() });
        $("#modal-artista").text(artistas);
        $("#modal-titulo-es").text(v.disco);
        $("#modal-meta").text(v.anio + " · " + v.discografica);
        $("#modal-texto-es").text(v.descripcion);
        $("#modal-precio").text("¥" + Number(v.precio).toLocaleString("en-US"));

        // Chips de estado y condición
        var $chips = $("#modal-chips").empty();
        $('<span class="modal__chip">').text(ESTADOS[v.estado]).appendTo($chips);
        if (v.estado === "segunda-mano" && CONDICIONES[v.condicion]) {
            $('<span class="modal__chip">').text(CONDICIONES[v.condicion]).appendTo($chips);
        }

        // Colores del vinilo y de su etiqueta central (si el disco no los define, se usan los del CSS)
        var vinilo = $(".modal__vinilo")[0];
        [["--vinilo-color", v.colorVinilo], ["--vinilo-etiqueta", v.colorEtiqueta]].forEach(function (c) {
            if (c[1]) vinilo.style.setProperty(c[0], c[1]);
            else vinilo.style.removeProperty(c[0]);
        });

        // Reproductor
        var t = v.track;
        var hayTrack = !!(t && t.archivo);
        audio.pause();
        $("#modal-player").prop("hidden", !hayTrack);
        if (hayTrack) {
            duracionFallback = aSegundos(t.duracion);
            $("#modal-track").text(t.titulo || "");
            audio.src = RUTA_MUSIC + t.archivo;
            pintarTiempo();
        }

        // Texto japonés: se guarda en data-jp de cada .txt-es y pintarTxtJp() lo copia a su .txt-jp
        $("#modal-titulo").attr("data-jp", v.tituloJp || "");
        $(".modal__texto").attr("data-jp", v.descripcionJp || "");
        if (typeof pintarTxtJp === "function") pintarTxtJp();

        $modal.addClass("is-open").attr("aria-hidden", "false");
        $("body").addClass("modal-abierto");
        $("#modal-cerrar").trigger("focus");
        if (AUTOPLAY && hayTrack) reproducir();
    }

    /* ---------- Cerrar ---------- */
    function cerrar() {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
        $modal.removeClass("is-open").attr("aria-hidden", "true");
        $("body").removeClass("modal-abierto");
    }

    /* ---------- Eventos ---------- */
    // Clic en una tarjeta (menos en el botón Reservar). Delegado: sigue valiendo tras repintar con filtros.
    $("#catalogo-list, #productos_nuevos").on("click", ".card-vinyl, .productos_opciones", function (e) {
        if ($(e.target).closest(".btn-reservar").length) return;
        abrir($(this).attr("data-id"));
    });

    $("#modal-cerrar").on("click", cerrar);
    $modal.on("click", function (e) { if (e.target === this) cerrar(); });   // clic en el fondo
    $(document).on("keydown", function (e) {
        if (e.key === "Escape" && $modal.hasClass("is-open")) cerrar();
    });
});