var items = [];
var getter = $.getJSON( "partials/overview.json", function( data ) {
      alert("hii");
      $.each( data, function( key, val ) {
        items.push( "<img src='img/"+key+"' alt='"+val+"' width='460'><div class='carousel-caption'><p>"+val+"</p></div>");
      });
      items.push( "<div class='item active'>"+items.pop()+"</div>");
      for ( var i = 0; i < items.length-1; i++ ) {
        items[i] = "<div class='item'>"+items[i]+"</div>";
      }
});
$(document).ready(function(){
    getter.done(function(){
      $( "#sieradenItems" ).append( items.join("") );
      alert(items.join());
    });
});