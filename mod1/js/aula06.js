$(function(){
    //Passando o valor do classe ex1 para a variavel ex
    var ex = $('.ex1');
    $('.ev1').click(function(){
        $(this).css("background","#ccc");
        ex.text("Você clicou!");
    });
    
});