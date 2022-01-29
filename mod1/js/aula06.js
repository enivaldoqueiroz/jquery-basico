$(function(){
    //Passando o valor do classe ex1 para a variavel ex
    var ex = $('.ex1');

    //Evento de mouse com um click
    $('.ev1').click(function(){
        $(this).css("background","#ccc");
        ex.text("Você clicou!");
    });

    //Evento de mouse com um duplo click
    $('.ev2').dblclick(function(){
        $(this).css("background","#ccc");
        ex.text("Você deu dois cliques!");
    });
});