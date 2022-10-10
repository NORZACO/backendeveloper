console.log("Hello World")

$(document).ready(function(){
/*
function getInfo() {
	alert($("#example").html());
	alert($("p").text());
}
function changeDiv() {
	$("#example").html("New div content.")
}
function changeOne() {
	$("#para1").text("New para1 text")
}
function changeClass() {
	$(".classA").html("<a href='https://google.com'> Now it' link!</a>")

}
*/


/*function append() {
	let elappend =  $("#para1");
	elappend.append("APPENDED para1 text.");
	elappend.css("background-color", "pink");
	elappend.css("border", "2px red solid")
	console.log(elappend)
}

function prependTo() {
	const elprependTo = $("#example p:last");
	elprependTo.prependTo("#example p:first");
	elprependTo.css("background-color", "lightblue");
	elprependTo.css("border", "3px lightblue solid")
	console.log(elprependTo)
}


function before() {
	let elbefore = $("p");
	elbefore.before("------------------")
	elbefore.css("background-color", "grey");
	elbefore.css("border", "2px red solid")
	console.log( elbefore)
}


function insertAfter() {
	let elinsertAfter =  $("<p>"+"*****************"+"</p>");
	elinsertAfter.insertAfter("p");
	elinsertAfter.css("background-color", "blue");
	elinsertAfter.css("border", "4px blue solid")
	console.log(elinsertAfter)
}


function buttonClick() {
	//let para1 = $("#para1").text("hehe");
	//console.log(para1);
	$("$para1").append($("#para1").text());

	$('<p>' + $("#para1").text() + '<p>').insertAfter('button')//?

}*/

console.log("hello")//?

const insertAround = () => {
	$("#example p").wrap("<div style='border:3px solid red'/>");//?
	$("#example2 p").wrapAll(`<div style='border:3px solid red'/>`);
	$("#example3 p").unwrap();
};

const remove = () => {
	$("#example p.classA").remove();
	$("#example2 p.classB").detach();
	$("#example3").empty();
	console.log("Have been removed")
};


function replace() {
	$("#example p[id]").replaceWith("<div>replaced 1</div>");
	$("<div>replaced 2</div>").replaceAll("#example2 p[id]");
	$("#example3 p").replaceWith(replacement);
	console.log('Have been replacement all ')

}

function replacement() {
	if ($(this).text().indexOf("first") != -1) {
		return "<p>The new first paragraph</p>";
	}
	else {

		console.log("Have been replacement")
		return this.outerHTML;
	}
}

});
console.log('Hello Norway')