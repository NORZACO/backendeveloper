({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": { "file": "src/templates/doms/index.html" } // Located in project root
})

const eldiv = document.getElementById('demo')






function startTiming() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let eltimedisplay = document.getElementById('txt');
    eltimedisplay.innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTiming, 1000);
}




function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


let users = [
    { name : "Mwamuzi", age : 24, school : "Noroff"},
    {name : "Julian", age : 22 , school : "Christania MBU"}
]

console.table(users);

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=./";


function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = `> ${document.cookie}`
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}




