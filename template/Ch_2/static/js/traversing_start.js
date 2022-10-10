console.log("Hello World")

$("document").ready(function () {
        let elementFind = $('#example');
        elementFind.children().css("border", "3px red solid");
        let elementPrevious = $('#para1');
        elementPrevious.prev("background-color", "pink");
        elementPrevious.next().css("text-align", 'center');
        elementPrevious.parents().css('border', '3px yellow solid');
        elementPrevious.parentsUntil($('body')).css('border', '5px orange solid');


        elementFind.find("#para4").css('border', '10px purple solid');

        let leftmargin = 0;
        let elColor = "red";
        let border = 3 + "px solid" + elColor;

        let elementEach = $("#example p ");
        elementEach.each(function (index, element){
                let elementPass = $(element);
                elementPass.css("border", border)
                    .css("margin-left", leftmargin)
                border += 2;
                leftmargin += 10;
        })




})