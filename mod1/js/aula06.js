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

    //Evento que é ativado quando o mouse é passado por cima do elemento
    $('.ev4').hover(function(){
        $(this).css("background","#ccc");
        ex.text("Você passou o mouse!"); 
    });

    //Evento que é ativado quando clicamos em cima do elemento e soltamos o clique
    $('.ev5').mousedown(function(){
        $(this).css("background","#ccc");
        ex.text("Você apertou o botão do mouse!");
    }).mouseup(function(){
        $(this).css("background","#000");
        ex.text("Você soltou o botão do mouse!");
    });
});