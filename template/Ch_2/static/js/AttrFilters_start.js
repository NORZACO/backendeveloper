console.log("Starting...")
$("document").ready(function() {
    $("p[class]").css("border", "2px green solid"); //all with class attr
    $('p[id=para1]').css("background-color", "pink"); // id = para1
    $('p[id^=para]').css("background-color", "brown") // start with para
    $('p[id^=para][lang*=en-]').css("background-color", "purple") // start with para
});


console.log("Hello World")

    // <h1>Using Attribute Filters</h1>
    // <div id="content">
    //
    //     <p>Attribute filters are used to select elements in the Web page that have attribute values matching a given set of
    //         criteria.</p>
    //     <p>Some examples include:</p>
    //     <ul id="list1">
    //         <li class="a">[<i>attr</i>]: element has an attribute named <i>attr</i></li>
    //         <li class="a">[<i>attr</i>=val]: element has an attribute whose value is "val"</li>
    //         <li class="b">[<i>attr</i>^=val]: element has an attribute whose value starts with "val"</li>
    //     </ul>
    //     <div id="example">
    //         <p class="a">This is paragraph 1</p>
    //         <p id="para1">This is paragraph 2</p>
    //         <p class="b">This is paragraph 3</p>
    //         <p id="para4" lang="en-us">This is paragraph 4</p>
    //         <p id="para5" lang="en-gb">This is paragraph 5</p>
    //     </div>
    // </div>


