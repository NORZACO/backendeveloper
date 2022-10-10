// XMLHttpRequest
//4 ways to make an api call in JavaScript | Http requests | JavaScript Tutorials
const uuid = require("uuid");
const {UUID} = require('uuid-js');
const $ = require('jquery')
//const {defaults} = require("../../../src/static/bibliotec/requirings");

const request = new XMLHttpRequest();
let api_url = "https://jsonplaceholder.typicode.com/users";

const ApiCallRequests = (username, password, uniqueID) => {
	if (password === "Passord1") {
		if (username === "mwamuzi" && uniqueID === 'uniqueID') {
			request.open("GET", api_url)

			request.send();

			request.onload = () => {
				let succesfully = 200;
				// The request was fulfilled.
				let defaultError;
				if (request.status === succesfully) {
					// converting to JSON
					let converted_response = JSON.parse(request.response)
					let person1 = converted_response[0]//?
					console.table(person1)
					$("#document").ready(function () {
						let newh1 = `<div> <ul>
						                    <li> 
                                                ${person1.id}  <br>  
                                                ${person1.name}  <br> 
                                                ${person1.username} <br> 
                                                ${person1.email } <br> 
                                                ${person1.phone} <br> 
                                                ${person1.website} <br> 
                                                ${person1.email} <br><br><br>
                                                ${person1.address.street.toString()}
                                            </li>
                                       </ul>                               
                                   </div>`

						$('.container').html(newh1)
					})


				} else {
					let createError = new Error('createError')
					defaultError = `Error Accured : ${request.status}`
					return defaultError
				}
			}

		}
	} else {
		return console.log("Wrong............")
	}
}


module.exports = {
	'ApiCallRequests': ApiCallRequests('mwamuzi', 'Passord1', 'uniqueID')
}