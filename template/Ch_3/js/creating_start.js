const unique = require('uniq');
const $ = require('jquery');
const swal = require("sweetalert");


const  {
	createContent,
	changeContent,
	changeAllTheContent,
	WindowContent
} = require('./app')





$("document").ready(function () {
	let elementExample = $("#example").html();
	//alert(elementExample)//?

	document.getElementById("create").addEventListener("click", function (evt) {
		createContent();
	});
	console.log("log")

	document.getElementById("change").addEventListener("click", function (evt) {
		changeContent();
	});



	document.getElementById("changeAll").addEventListener("click", function (evt) {
		changeAllTheContent();
	});


	WindowContent()

});


/*

function createContent() {
	swal("Here's the title!", "...and here's the text!");
}

function changeContent() {
}

function changeAllTheContent() {
}

//npm install uniq --save

*/
