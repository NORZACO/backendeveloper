const $ = require('jquery');
const unique = require('uniq');
const swal = require("sweetalert");

/**/
$("document").ready(function () {

	// Insertion functions for inserting inside of content
	let elementApent = $("#example p");
	let createdText = 'Mwamuzi Shadrick';
	elementApent.append(createdText);
	elementApent.css('border', '3px red outset')

	$("#example p[class=a]").prepend(" Age 24, ");
	let elementLast = $("#example p:last");
	elementLast.appendTo("#example p:first");
	$("ul code:last").prependTo("#example p:first");

	// Insertion functions for inserting outside of content
	elementApent.after("######################################");
	let elementApendBefore = elementApent.before("|--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--|");
	elementApendBefore.css('border', '5px blue outset')

	let elementAfter = $("<p>New Para after</p>");
	elementAfter.insertAfter("#example p:first");
	elementAfter.css('background-color', 'pink')

	let elementBefore = $("<p>New Para before</p>");
	elementBefore.insertBefore("#example p:last");
	elementBefore.css('background-color', 'orange')

});


