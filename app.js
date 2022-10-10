const $ = require('jquery');
const unique = require('uniq');

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));


$(document).ready(function () {
	$("button").click(function () {
		$("#div1").fadeIn();
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn(3000);//?
	});//?
});
