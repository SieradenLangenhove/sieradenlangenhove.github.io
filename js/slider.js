$(document).ready(function(){
    $.getJSON( "img/collectie.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push("<img src='img/"+key+"' alt='"+val+"' width='100%'><div class='carousel-caption'><p>"+val+"</p></div>");
        });
        $( "#sieradenitems" ).append( "<div class='item active'>"+items.pop()+"</div>" );
        $.each(items, function( index, value ) {
            $( "#sieradenitems" ).append( "<div class='item'>"+value+"</div>" );
        });
    });
});
