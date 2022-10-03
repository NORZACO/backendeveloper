


$(document).ready(function () {
    let txt = `
    <p>
    jQuery is an open source JavaScript library 
    that simplifies the interactions between an
     HTML/CSS document, or more precisely the 
     Document Object Model (DOM), and JavaScript.
    Elaborating the terms, jQuery simplifies HTML
    document traversing and manipulation, browser 
    event handling, DOM animations, Ajax i
    nteractions, and cross-browser JavaScript development.
    </p>`

    $("headline").append(txt);
})


// Inserting content the old way using the DOM 
window.addEventListener("DOMContentLoaded", function (evt) {
    var elem = document.getElementById("headline-start");
    elem.style.textAlign = "center"
    var para = document.createElement("h1");
    var text = document.createTextNode("jQuery | Introduction");
    para.appendChild(text);
    elem.appendChild(para);
});



// $("document").ready(function() {
//     $("p").css("border", "2px solid red");
//     $(".selectors").css("border", "3px solid blue");
//     $("#intro").css("border", "3px solid green");
//             $("p:first").css("border", "3px solid orange");
//             $("h2:not(.selectors)").css("border", "3px solid grey");
// });