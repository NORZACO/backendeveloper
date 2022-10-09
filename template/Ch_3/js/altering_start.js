console.log("hello world")
const unique = require('uniq');
const $ = require('jquery');
const swal = require("sweetalert");
const { ApiCallRequests: ApiCallRequests } = require("./api");

//const { replacementFn } = require("./altering_finished");


$("document").ready(function () {/**/
	let elementWrap = $("#example p:odd");
	elementWrap.wrap("<div style='color:green'/>");
	elementWrap.css('border', '3px red outset')
	elementWrap.css('height', '60px');
	elementWrap.css('text-align', 'center');
	elementWrap.css('font-size', '30px');
	elementWrap.css('padding-top', '20px')

	let elementWrap1 = $("#example p:even");
	elementWrap1.wrap("<div style='color:green'/>");
	elementWrap1.css('border', '5px orange outset')
	elementWrap1.css('height', '50px')




	let elementWrall = $("#example p");
	let eltext = "<div style='border:10px solid rebeccapurple'/>"
	elementWrall.wrapAll(eltext);




	//$("#example p.a, #example p.b").remove();
	//$("#example p.a, #example p.b").detach();
	//$("<div>replaced</div>").replaceAll("#example p[id]");
	//$("#example p[id]").replaceWith("<div>replaced</div>");
	//$("#example p").replaceWith(replacementFn);





	//const element = document.getElementById("demo");
/*	setInterval(function () {
		let elementEmpy = $("#example, #content");
		elementEmpy.empty();
	}, 1000);*/





	//$("#example p.a, #example p.b").remove();
	//$("#example p.a, #example p.b").detach();
	//$("<div>replaced</div>").replaceAll("#example p[id]");
	//$("#example p[id]").replaceWith("<div>replaced</div>");
	//$("#example p").replaceWith(replacementFn);

});



