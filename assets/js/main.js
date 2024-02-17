$(function(){

    //componente que activa tooltips//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(".navbar a").click(function(event){ //Funcion que realiza el SmoothScroll//
    if (this.has !== "") {
        event.preventDefault();

        var gato = this.hash;

        $("html, body").animate({
            scrolltop: $(gato).offset().top
        }, 800, function(){
            window.location.hash = gato;
        });
    }
});


$(window).scroll(function () {  //funcion para cambiar color de navbar//
    if ($("#navbar").offset().top > 56) {
        $("#navbar").addClass("navbar-color");
    } else {
        $("#navbar").removeClass("navbar-color");
    }
});



$("#btn_correo").click(function () { // Funcion que muestra mensaje confirmando envio de mensaje//
    alert("El correo fue enviado satisfactoriamente...");
});


})