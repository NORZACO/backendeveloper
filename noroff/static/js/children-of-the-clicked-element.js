"use strict";

$("#container").click(function (event) {
    $("*").removeClass("hilite");
    var kids = $(event.target).children();
    var len = kids.addClass("hilite").length;

    $("#results span").first().text(len);
    $("#results span").last().text(event.target.tagName);

    event.preventDefault();
});