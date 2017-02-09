$(document).ready(function(){
    $.getJSON( "img/collectie.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push("<img class="img-responsive center-block" src='img/collectie/"+key+"' alt='"+val+"'><div class='carousel-caption'><p>"+val+"</p></div>");
        });
        $( "#sieradenitems" ).append( "<div class='item active'>"+items.pop()+"</div>" );
        $.each(items, function( index, value ) {
            $( "#sieradenitems" ).append( "<div class='item'>"+value+"</div>" );
        });
    });
});
