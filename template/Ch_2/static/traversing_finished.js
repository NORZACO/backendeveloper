<!DOCTYPE html>
<html>

<head>
    <title>Using jQuery Document Traversal</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $("document").ready(function() {
            // The children() function retrieves the immediate (that is, first-level down) child
            // elements of the matched set, excluding text nodes.
            //$("#example").children().css("border", "3px solid red");

//            var elem = $("#para1");
//            elem.prev().css("border", "3px solid red");
//            elem.next().css("border", "3px solid green");
//            elem.parents().css("border", "3px solid blue");
//            elem.parentsUntil($("body")).css("border", "3px solid blue");
            
            // use the find function to locate content within particular elements
            //$("#example").find("#para4").css("border", "3px solid red");

            // use the each function to iterate over a set of elements and operate on them
//            var leftmargin = 0;
//            var border = 3;
//            $("#example p").each(function(index, element) {
//                $(element).css("border", border+"px solid red")
//                          .css("margin-left", leftmargin);
//                border += 2;
//                leftmargin += 10;
//            });
        });
    </script>
</head>

<body>
    <h1>Using jQuery Document Traversal Features</h1>
    <div id="content">

        <p>The DOM of a Web page is organized as a tree structure. The elements in the page have family-like names to refer
            to their positions relative to other elements.</p>
        <p>For example, the HEAD and BODY tags are "children" of the HTML tag, and are "siblings" of each other. They have the
            HTML tag as their "parent". jQuery provides functions for navigating the document tree and processing sets of
            elements, such as:</p>
        <ul id="list1">
            <li><code>children()</code>: Retrieves all the child elements of the matched elements, except text nodes</li>
            <li><code>prev(), next(), parent()</code>: used to traverse the family relationships of an element</li>
            <li><code>find()</code>: search within a given element to find elements that match a selector expression</li>
            <li><code>each()</code>: loops over a set of matched elements and calls a function for each one</li>
        </ul>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
    </div>
</body>

</html>