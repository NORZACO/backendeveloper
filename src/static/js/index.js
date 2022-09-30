//const  $  = require('jquery');

// "title": <article title>,
// "level": [beginner|intermediate|advance],
// "source": <url of source of the material derived>,
// "attribution": [
// "Ralph Whitbeck <ralph@email.com>",
// "John Paul <john@email.com>"


$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();

  });
});


function Clickme() {
  $("document").ready(() => {
    let elbutton = `<button class="fa fa-universal-access fa-4x" onclick="Clickme()"> </button>`
    $("#content").append(elbutton);
    console.log("Button Clicked");
  });
}
Clickme()



$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();
  });
});



"hello".charAt( 0 ) // "h"
"hello".toUpperCase() // "HELLO"
"Hello".toLowerCase() // "hello"
"hello".replace( /e|o/g, "x" ) // "hxllx"
"1,2,3".split( "," ) // [ "1", "2", "3" ]
