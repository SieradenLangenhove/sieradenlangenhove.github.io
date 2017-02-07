$(document).ready(function(){
    alert("boos");
    $.getJSON( "partials/overview.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push("<img src='img/"+key+"' alt='"+val+"' width='460'><div class='carousel-caption'><p>"+val+"</p></div>");
        });
        $( "#sieradenitems" ).append( "<div class='item active'>"+items.pop()+"</div>" );
        $.each(items, function( index, value ) {
            $( "#sieradenitems" ).append( "<div class='item'>"+value+"</div>" );
        });
    });
});
