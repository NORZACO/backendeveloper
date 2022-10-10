/*

We can use jQuery to dynamically add, delete or change our elements’ attributes and classes. We can use the following methods to do this:
addClass() – adds a specified class to all matched elements.
hasClass() – checks if any of the matched elements has the specified class.
attr() – gets the value of the specified attribute for the first matched element or sets one or more attributes for every matched element.
removeClass() – removes one or multiple classes from each element in the matched set.
removeAttr() – removes an attribute from each element in the matched set.
toggleClass() – adds or removes one or more classes from each element in the matched set.
 */

function addTitle() {
    $("a").attr("title", "Pokemon image");
}
function removeTitle() {
    $("a").removeAttr("title");
}
function toggleClass() {
    $("img").toggleClass("pokemonImage");
}