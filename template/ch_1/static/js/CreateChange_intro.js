



$("document").ready(function () {
    //
    let ElclassExample = $('.classExample');
    ElclassExample.css("border", "3px solid green");
    ElclassExample.css('margin', '50px');
    ElclassExample.css('background-color', 'pink');
    let Elxample_html = $('#example-html');
    Elxample_html.css("margin", "10px");

    let Elxample_html2 = $('#example-html2');
    Elxample_html2.css("margin", "10px")



    // create some new content
    var newP = $("<p>");
    newP.append(`
                <em>
                The APPEND JQuery javascript file is required to run JQuery commands, 
                while the size of this file is relatively small (25-100KB 
                depending on the server), it is still a strain on the 
                client computer and maybe your web server as well if 
                you intend to host the JQuery script on your own web server.            
                </em><hr>`);

    $("#example-html").html(newP);

    $("#creation").prepend("JQuery javascript | ");
    $("#creation").css("color", "orange")

    // change the existing content
    $("#example-html2").html(`
                <h4>
                
                jQuery uses CSS/HTML selectors to access the HTML elements. In this section, we'll learn how to use CSS selectors and their filters to access our elements rapidly. After selecting our element, we can perform one of many actions. In this section, we'll only change the value of CSS attributes with the .css() function. As the first parameter, it takes the attribute name and its value as the second parameter. For example:

                </h4>`);


    $("#example").text(`
            <h2>
            Get the image size which is not loaded or 
            hide element which is not created yet.
            </h2>
            `);



});