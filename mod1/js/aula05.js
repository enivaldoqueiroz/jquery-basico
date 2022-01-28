$(function(){

    //alert('TEste');

    /* $('img').error(function(){
        $('img').attr("src","assets/como-resolver-erro-503.jpg");
    }); */

    /* $('img').error(function(){
        var imagem = $(this).attr("src");
        alert('Imagem' + imagem + 'Indisponivel!');
        $('img').attr("src","assets/como-resolver-erro-503.jpg");
    }); */

   /*  $('img').error(function(){
        $(this).unbind("error").attr("src","assets/como-resolver-erro-503.jpg");
    }); */

    //Dimensionando a imagem diacordo com o tamanho do navegador
    /* $('img').width($(window).width()).height($(window).height()); */

    //Redimensionando a imagem junto com o navegador
    /* $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height());
    }); */

    //Evento com Scroll
    /* $(window).scroll(function(){
        $('img').fadeOut('1000');
    }); */

    //Descobrindo o tamanho do scroll
    $('body').css("height", "5000px")
    /* $(window).scroll(function(){
        var topo = $(window).scrollTop();
        alert(topo);
    }); */

    //Evento para desaparecer com a imagem assim que a barra for decendo
    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        //alert(topo);
        if(topo>400){
            $('img').fadeOut('1000');
        }else{
            $('img').fadeIn('1000');
        }
    });

});