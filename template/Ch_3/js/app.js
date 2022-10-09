const unique = require('uniq');
const $ = require('jquery');
const swal = require("sweetalert");
const {country, randomCountry, mySet, Student} = require("../../../country");


function createContent() {
	// declare variables
	let newParagraph1, newCanvasElement;


	// find id in html
	let paragraphId = $("#example");
	// create a paragraph
	newParagraph1 = `<p  class='fa-universal-access'> 1 Browserify is elegant and fast. It makes frontend development </p>`
	//console.log(paragraphId)
	paragraphId.html(newParagraph1);


	let canvasElement = $(".canvas-info");
	// create a canvas
	newCanvasElement = `
     <div class="card-info"> 
           <svg width="100" height="100">
           <circle cx="50" cy="50" r="40" 
            stroke="green" stroke-width="4" 
            fill="yellow" /> 
            Sorry, your browser does not support inline SVG.
           </svg>
    </div>`

	canvasElement.html(newCanvasElement)



		swal({
			title: "Good job!",
			text: "You clicked the button!",
			icon: "success",
			button: "Accept Cookies!",
		})//?

	//</editor-fold>
}


function changeContent() {
	let elParagraph = `<p data-type='vitamin'> 
                                  <strong>
                                 <br><br>typically that's not enough to build a robust web 
                                  application.  
                                 <br><br>Usually you need ways to manipulate the page content.
                                 <br><br> As luck would have it jQuery gives us some perfect ways of 
                                 doing just that.
                                 </strong>  
                                 <br><br>Once you've used the selectors and
                          </p>`

	let newItem = $(elParagraph);//?
	$("#para1").html(newItem);

}





function changeAllTheContent() {
	// declare variables
	let elementParagraph1, newCanvasElement;

	// find id in html
	let newparagraphId = $("#example p");
	// create a paragraph
	elementParagraph1 = `1 Browserify is elegant and fast. It makes frontend development `
	//console.log(paragraphId)
	newparagraphId.text(elementParagraph1);

}

function WindowContent() {
	let localdb;
	localdb = localStorage;
	localdb.setItem("Patrick", 21)
	console.table(localdb.getItem("Etienne"))

}


//npm install uniq --save


module.exports = {
	createContent,
	changeContent,
	changeAllTheContent,
	WindowContent
}