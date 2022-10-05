$("document").ready(function () {
	// The children() function retrieves the immediate (that is, first-level down) child
	// elements of the matched set, excluding text nodes.
	let elemChildren = $("#example").children();
	elemChildren.css("border", "2px solid green");
	console.log(elemChildren.length)

	const elemPara1 = $("#para1");
	elemPara1.prev().css("border", "3px solid red");
	elemPara1.next().css("border", "3px solid blue");
	elemPara1.prepend("U are next ");
	elemPara1.parents().css("border", "3px solid orange");
	console.log(elemPara1.parents())
	elemPara1.parentsUntil($("body")).css("border", "3px solid violet");

	// use the find function to locate content within particular elements
	let bgColor = "background-color"
	let colorName = "pink"
	$("#example").find("#para4").css(bgColor, colorName);

	// use the 'each' function to iterate over a set of elements and operate on them
	let leftmargin = 0;
	let border = 3;
	$("#example p").each(function (index, element) {
		$(element).css("border", border + "px solid red")
			.css("margin-left", leftmargin);
		border += 2;
		leftmargin += 10;
	});
});
