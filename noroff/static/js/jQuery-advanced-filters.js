


$("document").ready(function() {
    $("p:contains('fourth')").css("font-size", "34px");
    $("p:parent").css("border", "3px dashed green");
    $("div:has(p[class=classA])").css("border", "4px solid red");
    $("div p:first-child").css("color", "blue");
    $("div p:last-of-type").css("color", "red");
    $("div p:nth-child(3)").css("background-color", "yellow");
    $("div p:nth-child(2n)").css("background-color", "grey");
});