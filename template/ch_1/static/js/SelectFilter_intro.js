



$("document").ready(function () {
    $("p").css("border", "3px solid red");
    $(".selectors").css("border", "3px solid green");
    $("#intro").css("border", "3px solid orange");
                $("p:first").css("border", "3px solid red");
                $("p:first").css("background-color", "lightblue");
                $("h2:not(.selectors)").css("border", "3px solid purple");
                $("h2:not(.selectors)").css("background-color", "purple");
});

