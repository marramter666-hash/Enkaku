/* ------------------------------------------------------------------
   DATOS
   - artista: array (uno o varios); se unen con " & " al pintar
   - genero: array, por si un disco entra en varios géneros
   - estado: "nuevo" | "segunda-mano"
   - condicion: solo si es segunda mano -> "como-nuevo" | "muy-bueno" | "bueno"
   - portada: solo el nombre del archivo (la carpeta se añade al pintar la tarjeta)
   - track.archivo: solo el nombre del mp3
   - track.duracion: "m:ss"
   - precio: número (sin símbolo ni separadores)
------------------------------------------------------------------- */
var vinyls = [
    {
        id: "0",
        portada: "portada_celia_jonny.jpg",
        artista: ["Celia Cruz", "Johnny Pacheco"],
        disco: "Celia & Johnny",
        tituloJp: "セリア&ジョニー LP",
        anio: 1974,
        discografica: "Fania Records",
        genero: ["salsa"],
        estado: "segunda-mano",
        condicion: "muy-bueno",
        descripcion: "La primera colaboración de Celia Cruz y Johnny Pacheco, uno de los discos más vendidos de su época. Con éxitos como “Quimbara”, “Toro Mata” y “Canto a La Habana”, consagró a la cantante cubana como la Reina de la Salsa. Esta reedición de Fania tiene la funda con señales de uso, pero el disco suena muy bien.",
        descripcionJp: "セリアとパチェコ、伝説の初共演アルバム。ファニア再発盤、ジャケットに使用感あり。",
        track: { titulo:"QUIMBARA" , archivo: "01_Celia_&_Johnny.mp3", duracion: "04:52" },
        precio: 8800,
        colorVinilo: "#191919",
        colorEtiqueta: "#EB4530"
    },
    {
        id: "1",
        portada: "portada_cosa_nuestra.jpg",
        artista: ["Willie Colón", "Héctor Lavoe"],
        disco: "Cosa Nuestra",
        tituloJp: "コーサ・ヌエストラ LP",
        anio: 1969,
        discografica: "Fania Records",
        genero: ["salsa"],
        estado: "segunda-mano",
        condicion: "como-nuevo",
        descripcion: "El disco que consagró al dúo: su primer disco de oro en Fania, con temas escritos en gran parte por ellos mismos. En 2024, Rolling Stone lo incluyó entre los 50 mejores discos de salsa de todos los tiempos. Esta copia original de 1969 llega en un estado excepcional.",
        descripcionJp: "二人を一躍スターにした、ファニア初のゴールドディスク。1969年オリジナル盤、盤質極上",
        track: { titulo:"TE CONOZCO" , archivo: "02_Willie_Colon_&_Hector_Lavoe.mp3", duracion: "04:55" },
        precio: 12800,
        colorVinilo: "#95B6E6",
        colorEtiqueta: "#CF734C"
    },
    {
        id: "2",
        portada: "portada_mambo_diablo.jpg",
        artista: ["Tito Puente"],
        disco: "Mambo Diablo",
        tituloJp: "マンボ・ディアブロ LP",
        anio: 1985,
        discografica: "CONCORD PICANTE",
        genero: ["latin-jazz"],
        estado: "nuevo",
        condicion: "",
        descripcion: "Uno de los puntos álgidos de la carrera del Rey del Latin Jazz, ganador de un premio Grammy. Combina temas propios con versiones muy personales de estándares como “Take Five” y “Lush Life”, e incluye “Lullaby of Birdland” con su propio compositor, George Shearing, al piano. Esta es su primera reedición en vinilo, cortada a partir de las cintas originales.",
        descripcionJp: "ラテン・ジャズの王による、グラミー受賞作。初のアナログ再発、180g重量盤。",
        track: { titulo:"MAMBO DIABLO" , archivo: "03_Tito_Puente.mp3", duracion: "04:11" },
        precio: 4800,
        colorVinilo: "#191919",
        colorEtiqueta: "#C5AE8D"
    },
    {
        id: "3",
        portada: "portada_i_like_that.jpg",
        artista: ["Pete Rodriguez"],
        disco: "I Like It Like That",
        tituloJp: "アイ・ライク・イット・ライク・ザット LP",
        anio: 1967,
        discografica: "ALEGRE RECORDS",
        genero: ["boogaloo"],
        estado: "segunda-mano",
        condicion: "bueno",
        descripcion: "El disco que definió el sonido del boogaloo latino, obra del pianista y director de orquesta Pete Rodriguez, el Rey del Boogaloo. Su tema principal llegó a lo más alto de las listas y se convirtió en una de las canciones de baile latinas más influyentes de su época. Esta copia original de 1967 muestra señales de uso, pero conserva toda su energía. ",
        descripcionJp: "ブーガルーの王が放った、ラテン・ブーガルーの金字塔。1967年オリジナル盤、盤質並。",
        track: { titulo:"I LIKE IT LIKE THAT" , archivo: "04_Pete_Rodriguez.mp3", duracion: "04:26" },
        precio: 8800,
        colorVinilo: "#191919",
        colorEtiqueta: "#5CD0F0"
    },
    {
        id: "4",
        portada: "portada_la_voz.jpg",
        artista: ["Héctor Lavoe"],
        disco: "La Voz",
        tituloJp: "ラ・ボス 180g重量盤 LP",
        anio: 1975,
        discografica: "Fania Records",
        genero: ["salsa"],
        estado: "nuevo",
        condicion: "",
        descripcion: "El debut en solitario de Héctor Lavoe, producido por Willie Colón, que alcanzó el disco de oro. Incluye “El Todopoderoso”, escrito por ambos, y el himno “Mi Gente”, compuesto por Johnny Pacheco. Esta reedición de edición limitada en vinilo rojo recupera uno de los grandes clásicos de la salsa neoyorquina. ",
        descripcionJp: "エクトル・ラボーのソロ・デビュー作、ゴールドディスク獲得。限定レッド・ヴァイナル、180g重量盤。",
        track: { titulo:"PARAÍSO DE DULZURA" , archivo: "05_Hector_Lavoe.mp3", duracion: "04:36" },
        precio: 5800,
        colorVinilo: "#C1121F",
        colorEtiqueta: "#809BB8"
    },
    {
        id: "5",
        portada: "portada_latin_kick.jpg",
        artista: ["Cal Tjader"],
        disco: "Latin Kick",
        tituloJp: "ラテン・キック 180g重量盤 LP",
        anio: 1956,
        discografica: "Fania Records",
        genero: ["latin-jazz"],
        estado: "nuevo",
        condicion: "",
        descripcion: "Cal Tjader fusiona ritmos afrocubanos con solos de jazz en este disco de 1956, con su vibráfono acompañado por el saxo de Brew Moore y una sección latina de congas, timbales, piano y bajo. ",
        descripcionJp: "ヴィブラフォンが躍る、アフロ・キューバン・ジャズの名盤。帯付き、180g重量盤。",
        track: { titulo:"INVITATION" , archivo: "06_Cal_Tjader.mp3", duracion: "04:14" },
        precio: 5800,
        colorVinilo: "#191919",
        colorEtiqueta: "#002DAA"
    },
    {
        id: "6",
        portada: "portada_gypsy_woman.jpg",
        artista: ["Joe Bataan"],
        disco: "Gypsy Woman",
        tituloJp: "ジプシー・ウーマン 180g重量盤 LP",
        anio: 1967,
        discografica: "Fania Records",
        genero: ["boogaloo"],
        estado: "nuevo",
        condicion: "",
        descripcion: "El debut del Rey del Latin Soul, con la dirección musical del cofundador de Fania, Johnny Pacheco. El tema que da título al disco rinde homenaje al éxito homónimo de The Impressions, y entre sus joyas están el boogaloo “So Fine” y “Ordinary Guy”, la canción más personal de Bataan. Edición limitada a 1000 copias en vinilo amarillo canario. ",
        descripcionJp: "ラテン・ソウルの王、記念すべきデビュー作。1000枚限定イエロー・ヴァイナル、180g重量盤。",
        track: { titulo:"ORDINARY GUY" , archivo: "07_Joe_Baatan.mp3", duracion: "03:23" },
        precio: 4800,
        colorVinilo: "#FFE135",
        colorEtiqueta: "#84764F"
    },
    {
        id: "7",
        portada: "portada_amazonas.jpg",
        artista: ["Cal Tjader"],
        disco: "Amazonas",
        tituloJp: "アマゾナス LP",
        anio: 1976,
        discografica: "FANTASY RECORDS",
        genero: ["latin-jazz"],
        estado: "segunda-mano",
        condicion: "muy-bueno",
        descripcion: "El vibrafonista Cal Tjader en plena etapa de fusión con el jazz brasileño de los setenta, a medio camino entre Río y California. Con Airto Moreira en la producción, George Duke en los arreglos e invitados como Hermeto Pascoal. Esta copia original de 1976 presenta leves señales de uso y suena de maravilla. ",
        descripcionJp: "リオとカリフォルニアが交差する、ブラジリアン・ジャズ・フュージョン。1976年オリジナル盤、盤質良好。",
        track: { titulo:"AMAZONAS" , archivo: "08_Cal_Tjader.mp3", duracion: "04:28" },
        precio: 7800,
        colorVinilo: "#191919",
        colorEtiqueta: "#903B18"
    },
    {
        id: "8",
        portada: "portada_acid.jpg",
        artista: ["Ray Barretto"],
        disco: "Acid",
        tituloJp: "アシッド 180g重量盤 LP",
        anio: 1968,
        discografica: "Fania Records",
        genero: ["boogaloo"],
        estado: "nuevo",
        condicion: "",
        descripcion: "El debut de Ray Barretto en Fania, una mezcla explosiva de latin soul, salsa, funk, boogaloo, ritmos afrocubanos y jazz, con letras en inglés y en español. Incluye el clásico del boogaloo “A Deeper Shade of Soul” y el tema de jazz afrocubano que da título al disco. Esta reedición, recién publicada, está cortada a partir de las cintas originales. ",
        descripcionJp: "ラテン・ソウルとブーガルーが炸裂する、バレットのファニア・デビュー作。180g重量盤。",
        track: { titulo:"EL NUEVO BARRETTO" , archivo: "09_Ray_Barreto.mp3", duracion: "05:53" },
        precio: 4800,
        colorVinilo: "#191919",
        colorEtiqueta: "#7C6940"
    }
];
/* ------------------------------------------------------------------
   ETIQUETAS (texto que se muestra en las tarjetas)
------------------------------------------------------------------- */
var ESTADOS = {
    "nuevo": "Nuevo",
    "segunda-mano": "Segunda Mano"
};
var CONDICIONES = {
    "como-nuevo": "Como nuevo (M / NM)",
    "muy-bueno": "Muy bueno (VG+)",
    "bueno": "Bueno (VG)"
};

/* ------------------------------------------------------------------
   RENDER
------------------------------------------------------------------- */
function esc(texto) {                       // evita romper el HTML con &, <, comillas...
    return String(texto == null ? "" : texto)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function cardVinyl(v) {
    var artistas = v.artista.join(" & ").toUpperCase();
    var precio = "¥" + Number(v.precio).toLocaleString("en-US");
    var condicion = (v.estado === "segunda-mano" && CONDICIONES[v.condicion])
        ? '<p class="disco_etiquetas">' + esc(CONDICIONES[v.condicion]) + "</p>"
        : "";

    return (
        '<div class="productos_opciones"' +
            ' data-id="' + esc(v.id) + '"' +
            ' data-genero="' + esc(v.genero.join(" ")) + '"' +
            ' data-estado="' + esc(v.estado) + '"' +
            ' data-condicion="' + esc(v.condicion) + '">' +
            '<div class="productos_opciones_img">' +
                '<img src="../assets/img/' + esc(v.portada) + '" alt="' + esc(artistas) + '">' +
            "</div>" +
            '<div class="productos_opciones_texto">' +
                '<div class="productos_opciones_texto_nombre">' +
                    '<p class="disco_nombre">' + esc(artistas) + "</p>" +
                "</div>" +
                '<div class="productos_opciones_info">' +
                    '<div class="productos_opciones_texto_autor">' +
                        '<h3 class="disco_autor txt-es">' + esc(v.disco) + ' <span class="disco_japones">' + esc(v.tituloJp) + "</span></h3>" +
                    "</div>" +
                    '<p class="disco_precio">' + precio + "</p>" +
                "</div>" +
                '<div class="productos_opciones_texto_etiquetas">' +
                    '<p class="disco_etiquetas">' + esc(ESTADOS[v.estado]) + "</p>" +
                    condicion +
                "</div>" +
                '<div class="productos_opciones_texto_bottom">' +
                    '<a href="../reservar/" class="btn-reservar">Reservar</a>' +
                "</div>" +
            "</div>" +
        "</div>"
    );
}

/* Copia el texto de .txt-es dentro de su <span class="txt-jp"> (que siempre va vacío).
   Ej.: <h3 class="txt-es">Celia & Johnny <span class="txt-jp"></span></h3>
     -> <h3 class="txt-es">Celia & Johnny <span class="txt-jp">Celia & Johnny</span></h3> */
function pintarTxtJp() {
    $(".txt-es").each(function () {
        $(this).find(".txt-jp").text($(this).attr("data-jp") || "");
    });
}

/* Pinta una lista de discos (por defecto, todos) dentro de #catalogo-list */
function pintarCatalogo(lista) {
    $("#catalogo-list").html((lista || vinyls).map(cardVinyl).join(""));
    pintarTxtJp();
}

$(function () {
    pintarCatalogo();
    pintarTxtJp();   // por si hay más .txt-es fuera del catálogo
});

/* Filtros del catálogo */
jQuery(function ($) {
    var filtro = { genero: "", estado: "" };      // "" = Todos
    var $lista = $("#catalogo-list");
    var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hayTransiciones = !!document.startViewTransition;

    // Si por orden de carga aún no hay tarjetas, se pintan todas
    if ($lista.children(".productos_opciones").length === 0) pintarCatalogo();

    // Nombre único por tarjeta: así la View Transition las desplaza en vez de recargarlas
    $lista.children(".productos_opciones").each(function () {
        this.style.viewTransitionName = "card-" + $(this).attr("data-id");
    });

    // Discos que cumplen los filtros: AND entre grupos
    function filtrar() {
        return vinyls.filter(function (v) {
            if (filtro.genero && v.genero.indexOf(filtro.genero) === -1) return false;
            if (filtro.estado && v.estado !== filtro.estado) return false;
            return true;
        });
    }

    // "Todos" solo está activo cuando no hay ningún filtro (ni género ni estado)
    function pintarBotones() {
        $("#filtros .filtro").each(function () {
            var g = $(this).attr("data-grupo");
            var v = $(this).attr("data-valor");
            var activo = (v === "") ? (!filtro.genero && !filtro.estado) : (filtro[g] === v);
            $(this).toggleClass("is-active", activo).attr("aria-pressed", activo);
        });
    }

    // Muestra u oculta tarjetas ya existentes
    function mostrar(ids, conFundido) {
        $lista.children(".productos_opciones").each(function () {
            var visible = ids.indexOf($(this).attr("data-id")) !== -1;
            var eraOculta = this.hidden;
            this.hidden = !visible;
            if (visible && eraOculta && conFundido) {
                $(this).addClass("is-entrando").one("animationend", function () {
                    $(this).removeClass("is-entrando");
                });
            }
        });
    }

    function liberarAltura() { $lista.css("min-height", ""); }

    function aplicar(animar) {
        var lista = filtrar();
        var ids = lista.map(function (v) { return String(v.id); });
        var cambiar = function (conFundido) {
            mostrar(ids, conFundido);
            $("#catalogo-vacio").prop("hidden", lista.length > 0);
        };

        pintarBotones();
        guardarURL();

        if (!animar || reducirMovimiento) { cambiar(false); return; }

        // Fija la altura un momento: evita que el scroll "salte" cuando la lista se encoge
        $lista.css("min-height", $lista.outerHeight());

        if (hayTransiciones) {
            // El navegador anima el cambio: las tarjetas que quedan se desplazan, las otras se funden
            document.startViewTransition(function () { cambiar(false); })
                .finished.then(liberarAltura, liberarAltura);
        } else {
            cambiar(true);                         // alternativa: fundido de entrada por CSS
            setTimeout(liberarAltura, 400);
        }
    }

    /* ---------- Estado en la URL (?genero=salsa&estado=nuevo) ---------- */
    function guardarURL() {
        var p = new URLSearchParams();
        if (filtro.genero) p.set("genero", filtro.genero);
        if (filtro.estado) p.set("estado", filtro.estado);
        var qs = p.toString();
        try {
            history.replaceState(null, "", qs ? "?" + qs : location.pathname);   // no recarga la página
        } catch (e) { /* algunos navegadores lo bloquean al abrir el HTML como file:// */ }
    }

    function cargarURL() {
        var p = new URLSearchParams(location.search);
        ["genero", "estado"].forEach(function (g) {
            var valor = p.get(g) || "";
            // Solo se acepta si coincide con un botón existente
            var valido = $("#filtros .filtro").filter(function () {
                return $(this).attr("data-grupo") === g && $(this).attr("data-valor") === valor;
            }).length > 0;
            if (valido) filtro[g] = valor;
        });
    }

    /* ---------- Clic en un botón ---------- */
    // "Todos" limpia género y estado a la vez.
    // Un valor por grupo; pulsar de nuevo el activo lo quita (sirve para Nuevo / Segunda mano).
    $("#filtros").on("click", ".filtro", function () {
        var g = $(this).attr("data-grupo");
        var v = $(this).attr("data-valor");
        if (v === "") {
            filtro.genero = "";
            filtro.estado = "";
        } else {
            filtro[g] = (filtro[g] === v) ? "" : v;
        }
        aplicar(true);
    });

    cargarURL();
    aplicar(false); 
});

// Mostrar hora Japón en tiempo real en la cabecera
function horaJapon(conSegundos) {
    var opciones = {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"            // formato 00-23, evita "24:00"
    };
    if (conSegundos) opciones.second = "2-digit";
    return new Intl.DateTimeFormat("en-GB", opciones).format(new Date());
}

horaJapon(true);   // "14:05:09"

function actualizarRelojJapon() {
    $("#hora-jp-seg").text(horaJapon(true));    // HH:MM:SS
}

actualizarRelojJapon();
setInterval(actualizarRelojJapon, 1000);

// SLIDER SHOW

/* Slider con 1,5 slides visibles. Solo jQuery, sin librerías adicionales.
   Funciona con tu HTML actual:
   <div class="slideshow__pantalla"><div class="genero_disco slide"></div> ... </div> */

var VISIBLES_ESCRITORIO = 2.2;   // cuántos slides se ven a la vez en escritorio
var VISIBLES_MOVIL = 1;          // y en móvil: de uno en uno
var PUNTO_MOVIL = 768;           // px: a este ancho o menos se considera móvil
var VISIBLES = VISIBLES_ESCRITORIO;   // valor activo (lo actualiza ajustarSlides)
var consulta = window.matchMedia("(max-width: " + PUNTO_MOVIL + "px)");
var INTERVALO = 3000;    // ms entre cambios automáticos
var REINICIO = 5000;     // ms de espera tras interactuar, antes de reanudar el automático
var VELOCIDAD = 600;     // ms que dura el desplazamiento
var UMBRAL_CLIC = 5;     // px que hay que mover el ratón para que cuente como arrastre (por debajo es un clic normal)
var UMBRAL_CAMBIO = 0.15; // fracción de slide que hay que arrastrar para pasar al siguiente / anterior

var pista, slides, total;
var actual = 0;
var automatico = null, espera;
var enHover = false;     // true mientras el ratón está sobre un slide
var pulsado = false;     // botón del ratón / dedo apoyado
var arrastrando = false; // ya se ha superado UMBRAL_CLIC
var huboArrastre = false;
var inicioX = 0, inicioT = 0, punteroId = 0;

$(function () {
    var pantalla = $(".slideshow__pantalla");
    slides = pantalla.find(".slide");
    total = slides.length;
    if (total < 2) return;

    VISIBLES = calcularVisibles();

    // 1. Los slides se meten en una "pista" y se colocan en fila
    slides.wrapAll('<div class="slideshow__pista"></div>');
    pista = pantalla.find(".slideshow__pista");

    // 2. Layout con estilos en línea: así anula el position:absolute / display:none del CSS antiguo
    pantalla.css({ position: "relative", overflow: "hidden" });

    pista.css({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        transition: "transform " + VELOCIDAD + "ms ease"
    });

    slides.css({
        position: "relative",
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",
        display: "block",
        flex: "0 0 " + (100 / VISIBLES) + "%",     // cada slide mide 100 / VISIBLES %
        width: (100 / VISIBLES) + "%",
        height: "100%",
        boxSizing: "border-box"
    });

    mostrar(0);
    arrancar();

    // Pausa mientras el ratón está sobre un slide; al salir, se reanuda
    pantalla
        .on("mouseenter", ".slide", function () {
            enHover = true;
            clearTimeout(espera);
            detener();
        })
        .on("mouseleave", ".slide", function () {
            if (arrastrando) return;
            enHover = false;
            arrancar();
        });

    activarArrastre(pantalla);

    // Al cruzar el punto de corte (girar el móvil, redimensionar la ventana...) se recalcula
    if (consulta.addEventListener) consulta.addEventListener("change", ajustarSlides);
    else consulta.addListener(ajustarSlides);          // Safari antiguo
});

function calcularVisibles() {
    return consulta.matches ? VISIBLES_MOVIL : VISIBLES_ESCRITORIO;
}

// Recoloca los slides con el nuevo número de visibles, sin animación para que no "salte"
function ajustarSlides() {
    VISIBLES = calcularVisibles();
    var ancho = (100 / VISIBLES) + "%";
    slides.css({ flex: "0 0 " + ancho, width: ancho });

    pista.css("transition", "none");
    mostrar(actual);
    pista[0].offsetWidth;                               // fuerza el reflow antes de reactivar la transición
    pista.css("transition", "transform " + VELOCIDAD + "ms ease");
}

function mostrar(indice) {
    actual = indice;

    // El slide actual siempre queda completo y pegado al borde izquierdo.
    // translateX en % es relativo al ancho de la pista: 100 / VISIBLES % = avanzar exactamente un slide
    pista.css("transform", "translateX(" + (-actual * 100 / VISIBLES) + "%)");
}

function siguiente() {
    var n = actual + 1;
    if (n === total) {
        n = 0;
    }
    mostrar(n);
}

function anterior() {
    var n = actual - 1;
    if (n < 0) {
        n = total - 1;
    }
    mostrar(n);
}

/* Control con el ratón (o el dedo): arrastrar para mover; al soltar, el slider se ajusta al slide más cercano */
function activarArrastre(pantalla) {
    pista.css({ cursor: "grab", touchAction: "pan-y", userSelect: "none", WebkitUserSelect: "none" });

    // Evita el "fantasma" que el navegador crea al arrastrar imágenes
    pantalla.on("dragstart", function (e) { e.preventDefault(); });

    pista.on("pointerdown", function (e) {
        var ev = e.originalEvent;
        if (ev.pointerType === "mouse" && ev.button !== 0) return;    // solo botón izquierdo
        pulsado = true;
        arrastrando = false;
        huboArrastre = false;
        inicioX = ev.clientX;
        inicioT = Date.now();
        punteroId = ev.pointerId;
    });

    pista.on("pointermove", function (e) {
        if (!pulsado) return;
        var dx = e.originalEvent.clientX - inicioX;

        if (!arrastrando) {
            if (Math.abs(dx) < UMBRAL_CLIC) return;       // todavía puede ser un clic
            arrastrando = true;
            huboArrastre = true;
            clearTimeout(espera);
            detener();
            pista.css({ transition: "none", cursor: "grabbing" });
            try { pista[0].setPointerCapture(punteroId); } catch (err) { /* sin soporte */ }
        }

        // Posición en % del ancho de la pista (mismas unidades que mostrar())
        var base = -actual * 100 / VISIBLES;
        var ultimo = -(total - 1) * 100 / VISIBLES;
        var pos = base + dx / pista.width() * 100;

        // Resistencia en los extremos: se estira, pero menos
        if (pos > 0) pos = pos * 0.35;
        else if (pos < ultimo) pos = ultimo + (pos - ultimo) * 0.35;

        pista.css("transform", "translateX(" + pos + "%)");
    });

    function terminar(e) {
        if (!pulsado) return;
        pulsado = false;
        if (!arrastrando) return;
        arrastrando = false;

        var dx = e.type === "pointercancel" ? 0 : e.originalEvent.clientX - inicioX;
        try { pista[0].releasePointerCapture(punteroId); } catch (err) { /* sin soporte */ }
        pista.css({ transition: "transform " + VELOCIDAD + "ms ease", cursor: "grab" });

        // Cambia de slide si se arrastró lo suficiente o fue un gesto rápido (flick)
        var ancho = slides.eq(0).outerWidth();
        var rapido = (Date.now() - inicioT) < 250 && Math.abs(dx) > 30;
        var destino = actual;
        if (dx < 0 && (-dx > ancho * UMBRAL_CAMBIO || rapido)) destino = Math.min(total - 1, actual + 1);
        if (dx > 0 && (dx > ancho * UMBRAL_CAMBIO || rapido)) destino = Math.max(0, actual - 1);
        mostrar(destino);

        // Durante el arrastre se ignoró mouseleave: se recalcula si el ratón sigue encima
        enHover = pantalla.find(".slide:hover").length > 0;
        pausar();
    }
    pista.on("pointerup pointercancel", terminar);

    // Si hubo arrastre, el clic que sigue al soltar no debe activar enlaces ni botones dentro del slide
    pantalla[0].addEventListener("click", function (e) {
        if (huboArrastre) {
            e.preventDefault();
            e.stopPropagation();
            huboArrastre = false;
        }
    }, true);
}

// Arranca el automático (si ya está en marcha o el ratón está encima, no hace nada)
function arrancar() {
    if (!automatico && !enHover) {
        automatico = setInterval(siguiente, INTERVALO);
    }
}

function detener() {
    clearInterval(automatico);
    automatico = null;
}

// Si el usuario interactúa con los botones, se para el automático y se reanuda a los 5 segundos
function pausar() {
    detener();
    clearTimeout(espera);
    espera = setTimeout(arrancar, REINICIO);
}