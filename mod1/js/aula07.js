$(function(){
    //each() : Iteraje sobre um objeto jQuery, executando uma função para cada elemento correspondente.
    $('.place').each(function(){
        var place = $(this).attr('title');
        var input = $(this);

        input
            .val(place)
            .css('color','#ccc')
            .focusin(function(){
                input.css('color', '#000');
                if(input.val() == place){
                    input.val('');
                }
            }).focusout(function(){
                if(input.val() == ''){
                    input.css('color','#ccc');
                    input.val(place);
                }
            });
    });
});