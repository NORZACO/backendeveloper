const dbParam = JSON.stringify({ table: "customers", limit: 20 });

const request = new XMLHttpRequest();
request.onload = function () {
    const myObj = JSON.parse(this.responseText);
    let text = `
<table style="width:100%">
  <tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
  <th>Contact</th>
  <th>Country</th>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>
`
    for (let x in myObj) {
        text += `<tr> <td  style="width:1%; border:1px solid black;">${myObj[x].id}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].name}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].email}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].phone}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].username}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].address.street}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].address.suite}</td>`;

        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].address.city}</td>`;

        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].address.zipcode}</td>`;

        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].address.geo.lat}</td>`;
        text += `<td  style="width:10%; border:1px solid black;">${myObj[x].address.geo.lng}</td>`;
        text += "<tr>"
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
}

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();