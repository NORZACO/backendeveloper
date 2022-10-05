


$("document").ready(function () {
    let elemListen = $("#example");
    elemListen.on("mousemove", onMouseOver);
    elemListen.on("click", onMouseClick);
    elemListen.on("mouseleave", onMouseLeave);
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


