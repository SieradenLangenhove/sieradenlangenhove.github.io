var items = [];
var getter = $.getJSON( "partials/overview.json", function( data ) {
      $.each( data, function( key, val ) {
        items.push( "<img src='img/"+key+"' alt='"+val+"' width='460'><div class='carousel-caption'><p>"+val+"</p></div>");
        console.log(key);
      });
      items.push( "<div class='item active'>"+items.pop()+"</div>");
      for ( var i = 0; i < items.length-1; i++ ) {
        items[i] = "<div class='item'>"+items[i]+"</div>";
      }
});

$(document).ready(function(){
    getter.done(function(){
      $( "#sieradenitems" ).append( items.join("") );
    });
    getter.fail(function(){
        $( "#sieradenitems" ).append( "<p>Er is een probleem opgetreden.</p>" );
    });
});
