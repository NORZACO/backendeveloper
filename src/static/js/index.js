({
  "plugins": ["jsdom-quokka-plugin"],
  "jsdom": { "file": "src/templates/bloge/index.html" } // Located in project root
})
const $ = require('jquery');

// "title": <article title>,
// "level": [beginner|intermediate|advance],
// "source": <url of source of the material derived>,
// "attribution": [
// "Ralph Whitbeck <ralph@email.com>",
// "John Paul <john@email.com>"
// 
console.log("Hello World");
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


$(document).ready(function () {
  $("h1").hover(function () {
    $(this).css("color", "green");
  }, function () {
    $(this).css("color", "aliceblue");
  });
});



$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();
  });
});



let x1 = "hello".charAt(0) // "h"
let x2 = "hello".toUpperCase() // "HELLO"
let x3 = "Hello".toLowerCase() // "hello"
let x4 = "hello".replace(/e|o/g, "x") // "hxllx"
let x5 = "1,2,3".split(",")
// [ "1", "2", "3" ]//?
var context = {
  x0: "Julian",
  // age: 22,
  // school: "Christania",

  x1: "hello".charAt(0), // "h",
  x2: "hello".toUpperCase(), // "HELLO"
  x3: "Hello".toLowerCase(), // "hello"
  x4: "hello".replace(/e|o/g, "x"), // "hxllx"
  //x5: "1,2,3".split(","), // [ "1", "2", "3" ]//?
}

console.table(context);

console.log();