
({
  "plugins": ["jsdom-quokka-plugin"],
  "jsdom": { "file": "src/templates/bloge/index.html" } // Located in project root
})
const $ = require('jquery');
const testDiv = document.getElementById('testDiv');//?
testDiv.innerHTML =  'Clickme'
console.log(testDiv);






function Clickme() {
  $("document").ready(() => {
    let elbutton = `<button class="fa fa-universal-access fa-4x" onclick="Clickme()"> </button>`
    $("#content").append(elbutton);
    console.log("Button Clicked");
  });
}

$(function ShowButton() {
  $("p").text("The DOM is now loaded and can be manipulated.");
})



$("p").click(function () {
  $(this).slideUp();
});

const element = document.getElementById("content");
const newElement = document.createElement("h1");
const text = document.createTextNode("Hello world!")
newElement.appendChild(text);
element.appendChild(newElement);