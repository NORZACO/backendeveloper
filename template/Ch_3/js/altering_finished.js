const unique = require('uniq');
const $ = require('jquery');
const swal = require("sweetalert");



$("document").ready(function () {
	//$("#example p").wrap("<div style='color:red'/>");
	//$("#example p").wrapAll("<div style='border:3px solid red'/>");
	//$("#example").empty();
	//$("#example p.a, #example p.b").remove();
	//$("#example p.a, #example p.b").detach();
	//$("<div>replaced</div>").replaceAll("#example p[id]");
	//$("#example p[id]").replaceWith("<div>replaced</div>");
	//$("#example p").replaceWith(replacementFn);
});

/*
let replacementFn = () => {
	if ($(this).text().indexOf("1") != -1) {
		return "<p>This is paragraph uno</p>";
	} else {
		return this.outerHTML;
	}
}

*/

module.exports = {
	replacementFn
}