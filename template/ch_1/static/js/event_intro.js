


$("document").ready(function () {
    $("#example").on("mousemove", onMouseOver);
    $("#example").on("click", onMouseClick);
    $("#example").on("mouseleave", onMouseLeave);
});

function onMouseOver(eventype) {
    $("#example").text(` 
                        ${eventype.type} : ${eventype.pageX}, 
                        ${eventype.pageY}\nButton: ${eventype.which} Key: ${eventype.metaKey}`);
}


function onMouseClick(eventype) {
    $("#example").text(`${eventype.type}: ${eventype.pageX}, ${eventype.pageY}`);
    $("#example").off("mousemove", onMouseOver);
}


function onMouseLeave(eventype) {
    $("#example").text("mouseleave");
}


