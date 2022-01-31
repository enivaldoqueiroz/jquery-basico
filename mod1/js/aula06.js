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

    //Evento que reconhece a passada do mouse em cima do elemento
    var contadorEv6 = 0;
    $('.ev6').mouseenter(function(){
        contadorEv6 += 1;
        ex.text("Entrada do mouse: " + contadorEv6);
    }).mouseout(function(){
        ex.text("Saida do mouse: ");
    });

    //Evento que reconhece a passada do mouse em cima do sub elemento
    var contadorEv7 = 0;
    $('.ev7').mouseover(function(){
        contadorEv7 += 1;
        ex.text("Mouse Over: " + contadorEv7);
    }).mouseleave(function(){
        ex.text("Mouse Leave");
    });

});