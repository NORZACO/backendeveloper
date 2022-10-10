console.log("Starting....")

$("document").ready(function () {
    $("div p:last-of-type").css('border', '2px red solid');
    $("div p:nth-child(2n)").css("border", "3px green solid");
    const firstPhil =  $("div p:first-child");
    firstPhil.css("background-color", "black");
    firstPhil.css("color", "white");
    (firstPhil).html("Senior Developer Advocate at Google, Developer\n" +
        "\n");
})




$("document").ready(function() {
    $("p:contains('3')").css("border", "3px solid red");
    $("p:parent").css("border", "3px solid red");
    $("div:has(p[class=a])").css("border", "3px solid red");

    $("div p:first-child").css("border", "3px solid red");
    $("div p:last-of-type").css("border", "3px solid red");
    $("div p:nth-child(3)").css("border", "3px solid red");
    $("div p:nth-child(2n)").css("border", "3px solid red");
});
