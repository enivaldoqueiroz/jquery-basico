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

    //Dar foco no campo
    $('.ev3').focusin(function(){
        $(this).css("background","#ccc");
        ex.text("Você deu foco!"); 
    }).focusout(function(){
        $(this).css("background","#000");
        ex.text("Você tirou o foco!");
    });

    //
    $('.ev4').hover(function(){
        $(this).css("background","#ccc");
        ex.text("Você passou o mouse!"); 
    });
});