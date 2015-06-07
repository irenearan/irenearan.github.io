
$(document).ready(function(){

/*filtros*/
$('.categoria-arquitectura').click(function(e){
        e.preventDefault();
        if($('.categoria-arquitectura').hasClass('select')) {
          $('.categoria-arquitectura').removeClass('select');
          $('.anuncios li:not(.arquitectura)').show();
        } else {
          $('.categoria-arquitectura').addClass('select');
          $('.anuncios li.arquitectura').show();
          $('.anuncios li:not(.arquitectura)').hide();
          $('.lista-categorias a:not(.categoria-arquitectura)').removeClass('select');
        }
});
$('.categoria-animacion').click(function(e){
        e.preventDefault();
        if($('.categoria-animacion').hasClass('select')) {
          $('.categoria-animacion').removeClass('select');
          $('.anuncios li:not(.animacion)').show();
        } else {
          $('.categoria-animacion').addClass('select');
          $('.anuncios li.animacion').show();
          $('.anuncios li:not(.animacion)').hide();
          $('.lista-categorias a:not(.categoria-animacion)').removeClass('select');
        }
});
      $('.categoria-audiovisual').click(function(e){
        e.preventDefault();
        if($('.categoria-audiovisual').hasClass('select')) {
          $('.categoria-audiovisual').removeClass('select');
          $('.anuncios li:not(.audiovisual)').show();
        } else {
          $('.categoria-audiovisual').addClass('select');
          $('.anuncios li.audiovisual').show();
          $('.anuncios li:not(.audiovisual)').hide();
          $('.lista-categorias a:not(.categoria-audiovisual)').removeClass('select');
        }
});
$('.categoria-industrial').click(function(e){
        e.preventDefault();
        if($('.categoria-industrial').hasClass('select')) {
          $('.categoria-industrial').removeClass('select');
          $('.anuncios li:not(.industrial)').show();
        } else {
          $('.categoria-industrial').addClass('select');
          $('.anuncios li.industrial').show();
          $('.anuncios li:not(.industrial)').hide();
          $('.lista-categorias a:not(.categoria-industrial)').removeClass('select');
        }
});
$('.categoria-grafico').click(function(e){
        e.preventDefault();
        if($('.categoria-grafico').hasClass('select')) {
          $('.categoria-grafico').removeClass('select');
          $('.anuncios li:not(.grafico)').show();
        } else {
          $('.categoria-grafico').addClass('select');
          $('.anuncios li.grafico').show();
          $('.anuncios li:not(.grafico)').hide();
          $('.lista-categorias a:not(.categoria-grafico)').removeClass('select');
        }
});
$('.categoria-moda').click(function(e){
       e.preventDefault();
        if($('.categoria-moda').hasClass('select')) {
          $('.categoria-moda').removeClass('select');
          $('.anuncios li:not(.moda)').show();
        } else {
          $('.categoria-moda').addClass('select');
          $('.anuncios li.moda').show();
          $('.anuncios li:not(.moda)').hide();
          $('.lista-categorias a:not(.categoria-moda)').removeClass('select');
        }
});
$('.categoria-web').click(function(e){
        e.preventDefault();
        if($('.categoria-web').hasClass('select')) {
          $('.categoria-web').removeClass('select');
          $('.anuncios li:not(.web)').show();
        } else {
          $('.categoria-web').addClass('select');
          $('.anuncios li.web').show();
          $('.anuncios li:not(.web)').hide();
          $('.lista-categorias a:not(.categoria-web)').removeClass('select');
        }
});
$('.categoria-fotografia').click(function(e){
        e.preventDefault();
        if($('.categoria-fotografia').hasClass('select')) {
          $('.categoria-fotografia').removeClass('select');
          $('.anuncios li:not(.fotografia)').show();
        } else {
          $('.categoria-fotografia').addClass('select');
          $('.anuncios li.fotografia').show();
          $('.anuncios li:not(.fotografia)').hide();
          $('.lista-categorias a:not(.categoria-fotografia)').removeClass('select');
        }
});
$('.categoria-programacion').click(function(e){
        e.preventDefault();
        if($('.categoria-programacion').hasClass('select')) {
          $('.categoria-programacion').removeClass('select');
          $('.anuncios li:not(.programacion)').show();
        } else {
          $('.categoria-programacion').addClass('select');
          $('.anuncios li.programacion').show();
          $('.anuncios li:not(.programacion)').hide();
          $('.lista-categorias a:not(.categoria-programacion)').removeClass('select');
        }
});
/*pestañas*/
$('.pestanya-1').click(function() {
    $('.option-1').show();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-2').hide();
    $('.option-8').hide();
    $('.option-7').hide();
    $('.index-hide-1').hide();
    $('.index-hide-2').hide();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-1').addClass('seleccionado');
    return false;
});
$('.pestanya-2').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-2').show();
    $('.option-8').hide();
    $('.option-7').hide();
     $('.index-hide-1').hide();
    $('.index-hide-2').hide();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-2').addClass('seleccionado');
    return false;
});
$('.pestanya-3').click(function() {
    $('.option-1').hide();
    $('.option-2').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-3').show();
    $('.option-8').hide();
    $('.option-7').hide();
     $('.index-hide-1').hide();
    $('.index-hide-2').hide();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-3').addClass('seleccionado');
    return false;
});
$('.pestanya-4').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-4').show();
    $('.option-8').hide();
    $('.option-7').hide();
    $('.option-1b').show();
     $('.index-hide-1').show();
    $('.index-hide-2').hide();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-4').addClass('seleccionado');
    $('.sub-pestanya-1').addClass('seleccionado-2');
    $('.sub-pestanya-2').removeClass('seleccionado-2');
    $('.sub-pestanya-3').removeClass('seleccionado-2');
    $('.sub-pestanya-4').removeClass('seleccionado-2');

    return false;
});
$('.pestanya-5').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-6').hide();
    $('.option-5').show();
    $('.option-8').hide();
    $('.option-7').hide();
    $('.option-5b').show();
    $('.index-hide-1').hide();
    $('.index-hide-2').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-5').addClass('seleccionado');
    $('.sub-pestanya-5').addClass('seleccionado-2');
    $('.sub-pestanya-6').removeClass('seleccionado-2');
    $('.sub-pestanya-7').removeClass('seleccionado-2');
    $('.sub-pestanya-8').removeClass('seleccionado-2');

    return false;
});
$('.pestanya-6').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').show();
    $('.option-8').hide();
    $('.option-7').hide();
     $('.index-hide-1').hide();
    $('.index-hide-2').hide();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-6').addClass('seleccionado');
    return false;
});
$('.pestanya-7').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-8').hide();
    $('.option-7').show();
     $('.index-hide-1').hide();
    $('.index-hide-2').hide();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-7').addClass('seleccionado');
    return false;
});
$('.pestanya-8').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-8').show();
    $('.option-6').hide();
    $('.option-7').hide();
     $('.index-hide-1').hide;
    $('.index-hide-2').hide;
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-8').addClass('seleccionado');
    return false;
});
/*subpestañas*/
$('.sub-pestanya-1').click(function() {
    $('.option-1b').show();
    $('.option-3b').hide();
    $('.option-4b').hide();
    $('.option-2b').hide();
    $('.option-5b').hide();
    $('.option-6b').hide();
    $('.option-7b').hide();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-1').addClass('seleccionado-2');
    return false;
});
$('.sub-pestanya-2').click(function() {
    $('.option-1b').hide();
    $('.option-3b').hide();
    $('.option-4b').hide();
    $('.option-2b').show();
    $('.option-5b').hide();
    $('.option-6b').hide();
    $('.option-7b').hide();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-2').addClass('seleccionado-2');
    return false;
});
$('.sub-pestanya-3').click(function() {
    $('.option-1b').hide();
    $('.option-3b').show();
    $('.option-4b').hide();
    $('.option-2b').hide();
    $('.option-5b').hide();
    $('.option-6b').hide();
    $('.option-7b').hide();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-3').addClass('seleccionado-2');
    return false;
});
$('.sub-pestanya-4').click(function() {
    $('.option-1b').hide();
    $('.option-3b').hide();
    $('.option-4b').show();
    $('.option-2b').hide();
    $('.option-5b').hide();
    $('.option-6b').hide();
    $('.option-7b').hide();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-4').addClass('seleccionado-2');
    return false;
});
$('.sub-pestanya-5').click(function() {
    $('.option-1b').hide();
    $('.option-3b').hide();
    $('.option-4b').hide();
    $('.option-2b').hide();
    $('.option-5b').show();
    $('.option-6b').hide();
    $('.option-7b').hide();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-5').addClass('seleccionado-2');
    return false;
});
$('.sub-pestanya-6').click(function() {
    $('.option-1b').hide();
    $('.option-3b').hide();
    $('.option-4b').hide();
    $('.option-2b').hide();
    $('.option-5b').hide();
    $('.option-6b').show();
    $('.option-7b').hide();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-6').addClass('seleccionado-2');
    return false;
});
$('.sub-pestanya-7').click(function() {
    $('.option-1b').hide();
    $('.option-3b').hide();
    $('.option-4b').hide();
    $('.option-2b').hide();
    $('.option-5b').hide();
    $('.option-6b').hide();
    $('.option-7b').show();
    $('.seleccionado-2').removeClass('seleccionado-2');
    $('.sub-pestanya-7').addClass('seleccionado-2');
    return false;
});
/*slider*/
var indice = 1;


  function showImagen(evento) {

    evento.preventDefault();
    $('li.active').removeClass('active');
    $($('.slider-1 li')[indice]).addClass('active');

    indice++;

    if(indice == $('.slider-1 li').length) {
      indice = 0;
    }

  }

  function showImagenSinIndices(evento) {
    evento.preventDefault();
    var li = $('li.active');
    li.removeClass('active');

    if(li.next().length != 0) { // SI HAY UN SIGUIENTE
      li.next().addClass('active');
    } else {  // SI NO
      $('.slider-1 li').first().addClass('active');
    }

  }
  $('a.next').click(showImagenSinIndices);

  function showImagen2(evento) {

    evento.preventDefault();
    $('li.active-2').removeClass('active-2');
    $($('.slider-2 li')[indice]).addClass('active-2');

    indice++;

    if(indice == $('.slider-2 li').length) {
      indice = 0;
    }

  }

  function showImagenSinIndices2(evento) {
    evento.preventDefault();
    var li = $('li.active-2');
    li.removeClass('active-2');

    if(li.next().length != 0) { // SI HAY UN SIGUIENTE
      li.next().addClass('active-2');
    } else {  // SI NO
      $('.slider-2 li').first().addClass('active-2');
    }

  }
  $('a.next-2').click(showImagenSinIndices2);

  function showImagen3(evento) {

    evento.preventDefault();
    $('li.active-3').removeClass('active-3');
    $($('.slider-3 li')[indice]).addClass('active-3');

    indice++;

    if(indice == $('.slider-3 li').length) {
      indice = 0;
    }

  }

  function showImagenSinIndices3(evento) {
    evento.preventDefault();
    var li = $('li.active-3');
    li.removeClass('active-3');

    if(li.next().length != 0) { // SI HAY UN SIGUIENTE
      li.next().addClass('active-3');
    } else {  // SI NO
      $('.slider-3 li').first().addClass('active-3');
    }

  }
  $('a.next-3').click(showImagenSinIndices3);

  function showImagen4(evento) {

    evento.preventDefault();
    $('li.active-4').removeClass('active-4');
    $($('.slider-4 li')[indice]).addClass('active-4');

    indice++;

    if(indice == $('.slider-4 li').length) {
      indice = 0;
    }

  }

  function showImagenSinIndices4(evento) {
    evento.preventDefault();
    var li = $('li.active-4');
    li.removeClass('active-4');

    if(li.next().length != 0) { // SI HAY UN SIGUIENTE
      li.next().addClass('active-4');
    } else {  // SI NO
      $('.slider-4 li').first().addClass('active-4');
    }

  }
  $('a.next-4').click(showImagenSinIndices4);

/*tablas*/
$('td .icono-tabla-off').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-on').css({
        'display': 'block'
    });
});
$('td .icono-tabla-on').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-off').css({
        'display': 'block'
    });
});


/*niveles barras*/
$( "li.primera-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
    }else{
        $(this).nextAll().addClass("barra-inactiva");
    }
});

$( "li.segunda-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{

        $(this).nextAll().addClass("barra-inactiva");

    }

});
$( "li.tercera-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{

         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.cuarta-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.quinta-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.sexta-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.septima-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.octava-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.novena-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.decima-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
})

