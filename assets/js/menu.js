// Menú responisve
$(".menu-btn").on("click", function() {
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
})