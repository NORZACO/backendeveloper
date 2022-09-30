({
  "plugins": ["jsdom-quokka-plugin"],
  "jsdom": { "file": "src/templates/doms/index.html" } // Located in project root
})


//const jsdom = require("jsdom");




function startTiming() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);//?
  let eltimedisplay = document.getElementById('txt');
  eltimedisplay.innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTiming, 1000);
}



function checkTime(i) {
  if (i < 10) { i = "0" + i };
  return i;
}


let users = [
  { name: "Mwamuzi", age: 24, school: "Noroff" },
  { name: "Julian", age: 22, school: "Christania MBU" }
]



// let elcookies = document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=./";
// console.table(elcookies);

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = `> ${document.cookie}`
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}
// --------------------------------------------------------------------------------------------------------------------------------------------
console.log('%c thing one! ', 'color: red');
console.log('%c thing green! ' + '%c thing blue! ', 'color: green', 'color: blue');


//Create a text paragraph. Create a button that changes the paragraph's font size to 16px, font family to Comic Sans MS and font colour to blue.

	var main = document.createElement("div")
	main.id = "buttonId";
	main.className = "buttoncls"
	window.document.body.appendChild(main)



var elstyle = document.getElementById("buttonId");
elstyle.style.width = "500px";
elstyle.style.height = "500px";
elstyle.style.backgroundColor = "green";

var button = document.createElement("button")
var elbutton = window.document.getElementById("buttonId").appendChild(button)
elbutton.innerText = "Click Me"
elbutton.style.width = "200px";
elbutton.style.height = "100px"
elbutton.style.padding = "0 100px 0 100px";
elbutton.style.backgroundColor = "orange"
elbutton.style.margin = "150px"


var elbuttonclick = document.querySelector("button");
elbuttonclick.addEventListener("click", () => {
  main.style.backgroundColor = "lightblue";
  elbutton.style.fontSize = "25px"
})




var elbuttonclick = document.querySelector("button");
elbuttonclick.addEventListener('mouseover', () => {
  main.style.backgroundColor = "purple";
  elbutton.style.fontSize = "30px"
  elbutton.innerHTML = "Purple"
})

var eldocs = document.querySelector("div#buttonId");



var body = document.getElementsByTagName("");


let docBody = document.body
var elsection = document.createElement("section");
elsection.setAttribute("click", "message()");
elsection.setAttribute("value", "chicken")
elsection.getAttribute("click")//?
docBody.append(elsection)

let nameatr = document.createAttribute("name")

//<i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>

let likes = document.createElement("li");
likes.setAttribute('onclick', "myFunction(this)");
likes.className = "fa fa-thumbs-up"
docBody.append(likes);
let ulli = `<h1><ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center active">
    Active list item
    <span class="badge badge-secondary badge-pill">pill1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    List item
    <span class="badge badge-secondary badge-pill">pill2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center disabled">
    Disabled item
    <span class="badge badge-secondary badge-pill">pill3</span>
  </li>
</ul>
</h1>
`
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");//?
  let eluli = document.getElementsByTagName('div');
  x.innerHTML = eluli;
}


function addRow(top) {
  // (B1) GET TABLE
  var table = document.getElementById("demoA");

  // (B2) INSERT ROW
  if (top) { var row = table.insertRow(0); }
  else { var row = table.insertRow(); }

  // (B3) INSERT CELLS
  var cell = row.insertCell();
  cell.innerHTML = "AA";
  cell = row.insertCell();
  cell.innerHTML = "BB";
}

