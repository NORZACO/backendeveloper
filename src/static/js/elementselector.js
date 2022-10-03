//const { $ } = require('./myfirstmodule');

$(document).ready(function () {

    $("h1").hover(function () {
        $(this).css( "text-align", "center");
    },

        function () {
            $(this).css("color", "aliceblue");
        });
});



$("document").ready(function () {
    let elcontent = $("#content");
let text = `<p>Hello World </p>`
    elcontent.append(text);
    elcontent.css('background-color', 'lightblue');
    console.dir(elcontent);
})


console.dir("END");
// function Requirements() { console.log("return require('jquery')"); return require('jquery'); }

// const newElement = document.createElement("div");
// newElement.className = "diva"
// const element = document.getElementById("diva");
// const text = document.createTextNode("Hello world############!")
// newElement.appendChild(text);
// element.appendChild(newElement);