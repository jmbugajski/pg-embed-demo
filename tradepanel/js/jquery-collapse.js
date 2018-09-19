$(document).ready(function(){
    $('.open').click(function(){
        var link = $(this);
        $('.showpanel').slideToggle('slow', function() {
            if ($(this).is(":visible")) {
                 link.text('Laundry Detergent [-]');                
            } else {
                 link.text('Laundry Detergent [+]');                
            }        
        });
    });
});