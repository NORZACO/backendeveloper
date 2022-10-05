


$("document").ready(function () {
    $("p[class]").css("color", "green");
    $("p[class]").css("font-size", "25px");
    $("p[id=para1]").css("background-color", "yellow");
    $("p[id^=para]").css("border", "5px solid red");
    $("p[id^=para][lang*=en-]").css("color", "blue");//?
    $("p[id^=para][lang*=en-]").css("border", "5px solid pink");
    $("img[class^=product-item]")
  $("td:eq( 4 )").css( "color", "red" );
  $("table").css("color", "green");

});


$("document").ready(function () {
    $("#run").click(function () {
        $("section:animated").toggleClass("colored");
    });


    function animateIt() {
        $("#movers").slideToggle("slow", 1000);
      
      

    }
    animateIt();

});


$("document").ready(function () {
// Applies yellow background color to a single <li>
$( "ul.nav li:eq(1)" ).css( "backgroundColor", "#ff0" );
 
// Applies italics to text of the second <li> within each <ul class="nav">
$( "ul.nav" ).each(function( index ) {
  $( this ).find( "li:eq(1)" ).css( "fontStyle", "italic" );
});
 
// Applies red text color to descendants of <ul class="nav">
// for each <li> that is the second child of its parent
$( "ul.nav li:nth-child(2)" ).css( "color", "red" );


$( "a[hreflang|='en']" ).css( "border", "3px dotted green" );


})