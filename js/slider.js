$(document).ready(function(){
    $.getJSON( "partials/overview.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push("<img src='img/"+key+"' alt='"+val+"' width='460'><div class='carousel-caption'><p>"+val+"</p></div>");
        });
        items.push( "<div class='item active'>"+items.pop()+"</div>");
        for ( var i = 0; i < items.length-1; i++ ) {
            items[i] = "<div class='item'>"+items[i]+"</div>";
        }
        $( "#sieradenitems" ).append( items.join("") );
    });
});
