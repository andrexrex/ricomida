//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$('#cambio-color1').on('dblclick', function () {
    $('#cambio-color1').toggleClass('text-danger')
});

$('#cambio-color2').on('dblclick', function () {
    $('#cambio-color2').toggleClass('text-danger')
});

function esconder_titulo(){
    $('.card-text').toggle('d-none')
}

$('.card-title').on('click', esconder_titulo)

function alerta(){
    alert('Email enviado con exito')
}

$('#enviarCorreo').on('click', alerta)