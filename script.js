$(document).ready(function(){

    $('p').live('mouseover mouseout', function(e){
        if (e.type == 'mouseover') {
            $(this).animate({'color': '#333'}, 300, 'linear');
        } else {
            $(this).animate({'color': '#D6D6D6'}, 300, 'linear');
        }
    })
});
