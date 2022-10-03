


$("document").ready(function () {
    $("#go").click(function () {
        let duration = 300
        let gotowidth = { width: 400 };
        $("#testDiv").animate(gotowidth, duration)

            .animate({ height: 300 }, 400)
            .animate({ left: 200 }, 500)
            .animate({ top: "+=100", borderWidth: 10 }, "slow")
    });



    let testdiv = $("#testDiv");
    testdiv.css('position', 'relative')
    testdiv.css('width', '150px')
    testdiv.css('height', '100px')
    testdiv.css('margin', '10px')
    testdiv.css('padding', '20px')
    testdiv.css('background', '#b3c8d0')
    testdiv.css('border', '1px solid black')
    testdiv.css('font-size', '16pt')
    testdiv.css('cursor', 'pointer')
});

