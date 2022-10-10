const colors = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"BurlyWood",
	"CadetBlue",
	"Chartreuse",
	"Chocolate",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkBlue",
	"DarkCyan",
	"DarkGoldenRod",
	"DarkGray",
	"DarkGrey",
	"DarkGreen",
	"DarkKhaki",
	"DarkMagenta",
	"DarkOliveGreen",
	"DarkOrange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSeaGreen",
	"DarkSlateBlue",
	"DarkSlateGray",
	"DarkSlateGrey",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DimGray",
	"DimGrey",
	"DodgerBlue",
	"FireBrick",
	"FloralWhite",
	"ForestGreen",
	"Fuchsia",
	"Gainsboro",
	"GhostWhite",
	"Gold",
	"GoldenRod",
	"Gray",
	"Grey",
	"Green",
	"GreenYellow",
	"HoneyDew",
	"HotPink",
	"IndianRed",
	"Indigo",
	"Ivory",
	"Khaki",
	"Lavender",
	"LavenderBlush",
	"LawnGreen",
	"LemonChiffon",
	"LightBlue",
	"LightCoral",
	"LightCyan",
	"LightGoldenRodYellow",
	"LightGray",
	"LightGrey",
	"LightGreen",
	"LightPink",
	"LightSalmon",
	"LightSeaGreen",
	"LightSkyBlue",
	"LightSlateGray",
	"LightSlateGrey",
	"LightSteelBlue",
	"LightYellow",
	"Lime",
	"LimeGreen",
	"Linen",
	"Magenta",
	"Maroon",
	"MediumAquaMarine",
	"MediumBlue",
	"MediumOrchid",
	"MediumPurple",
	"MediumSeaGreen",
	"MediumSlateBlue",
	"MediumSpringGreen",
	"MediumTurquoise",
	"MediumVioletRed",
	"MidnightBlue",
	"MintCream",
	"MistyRose",
	"Moccasin",
	"NavajoWhite",
	"Navy",
	"OldLace",
	"Olive",
	"OliveDrab",
	"Orange",
	"OrangeRed",
	"Orchid",
	"PaleGoldenRod",
	"PaleGreen",
	"PaleTurquoise",
	"PaleVioletRed",
	"PapayaWhip",
	"PeachPuff",
	"Peru",
	"Pink",
	"Plum",
	"PowderBlue",
	"Purple",
	"RebeccaPurple",
	"Red",
	"RosyBrown",
	"RoyalBlue",
	"SaddleBrown",
	"Salmon",
	"SandyBrown",
	"SeaGreen",
	"SeaShell",
	"Sienna",
	"Silver",
	"SkyBlue",
	"SlateBlue",
	"SlateGray",
	"SlateGrey",
	"Snow",
	"SpringGreen",
	"SteelBlue",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"White",
	"WhiteSmoke",
	"Yellow",
	"YellowGreen",
];


const changeRandomColor = (colors) => {
	console.log(colors[Math.floor(Math.random() * colors.length)]);
	return colors[Math.floor(Math.random() * colors.length)];
}


const changeRandomColor2 = (colors) => {
	console.log(colors[Math.floor(Math.random() * colors.length)]);
	return colors[Math.floor(Math.random() * colors.length)];
}


/*
setInterval(() => {
	changeRandomColor(colors);
	//console.log(randomColor);
}, 50000);
*/

//console.log(changeRandomColor(colors))

// $("document").ready(function () {
// 	$("p").css("border", "3px solid red");
// 	$(".selectors").css("border", "3px solid green");
// 	$("#intro").css("border", "3px solid orange");
// 	//$("p:first").css("border", "3px solid red");
// 	$("p:first").css("background-color", "lightblue");
// 	$("h2:not(.selectors)").css("border", "3px solid purple");
// 	//$("h2:not(.selectors)").css("background-color", "purple");
// });
function gamechager() {
	document.getElementById("grandparent-id").children[0].style.backgroundColor = changeRandomColor(colors);
	document.getElementById("grandparent-id").children[1].style.backgroundColor = changeRandomColor(colors);
	document.getElementById("grandparent-id").style.backgroundColor = changeRandomColor(colors);
}

$("document").ready(function () {
	/*
	console.log('challenge.j Accepted')
	let elemContainer = $("#products");
	console.log(elemContainer.length);
	elemContainer.css("border", "3px red solid")

	let elemImageHeader = $(".image-header");
	elemImageHeader.css("border", "4px blue solid");

	let elemProductList = $(".product-list li");
	elemProductList.css("border", "4px orange solid");


	let elemProductItem = $(".product-name:even");
	elemProductItem.css("border", "3px red solid")
	elemProductItem.css("background-color", changeRandomColor(colors));


	let elemChildren = $(".product-name:odd");
	elemChildren.css("background-color", changeRandomColor2(colors));
	/*
	let elemChildren1 = $(".product-name:nth-child(n4)");
	elemChildren1.css("background-color", changeRandomColor2(colors));
*///////


	/*
	console.log("ONE", changeRandomColor(colors))
	console.log("TWO", changeRandomColor2(colors))

	//let elemTest =   $("img[class^=product-item]");

	const insertAround = () => {
		let elemProduct = $(".product-item img[class]");
		elemProduct.fadeOut(10)
	};
	//insertAround()


	if ($(".product-item h2[data-type][data-type=\"mineralwater\"]")){
		elemDataType_Mineralwater.css("background-color", "white");
	}
*/
	let elemDataType_Protein = $(".product-item h2[data-type][data-type=\"proteinbar\"]");
	elemDataType_Protein.css("background-color", colors[10]);

	let elemDataType_Mineralwater = $(".product-item h2[data-type][data-type=\"mineralwater\"]");
	elemDataType_Mineralwater.css("background-color", colors[12]);

	let elemDataType_Vitamin = $(".product-item h2[data-type][data-type=\"vitamin\"]");
	elemDataType_Vitamin.css("background-color", colors[13]);




})