const $ = require('../../../jquery-3.6.1');



$("document").ready(function() {
    $("div > p").css("color", "blue");
    $("div p.classA").css("border", "5px solid red");
    $("p + div").css("background-color", "yellow");
    $("#para3 ~ p").css("font-size", "40px");
    let duration_easing_complete_options = 1;
    $("#para3 ~ p").fadeOut(duration_easing_complete_options);//?length


    $("p + div").hide(10000)//?
});
