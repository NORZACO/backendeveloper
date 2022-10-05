const country = [
   "United States", "Canada", "Afghanistan", "Albania", "Algeria", 
   "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", 
   "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", 
   "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
   "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", 
   "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", 
   "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", 
   "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", 
   "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", 
   "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", 
   "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", 
   "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
   "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", 
   "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", 
   "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", 
   "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
   "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", 
   "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", 
   "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", 
   "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", 
   "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", 
   "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", 
   "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", 
   "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", 
   "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", 
   "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", 
   "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
   "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", 
   "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", 
   "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", 
   "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", 
   "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
   "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", 
   "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
   "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", 
   "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", 
   "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", 
   "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
   "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
   "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", 
   "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)", 
   "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", 
   "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"
]




function chooseRandomCountry(country) {
   return country[Math.floor(Math.random()*country.length)];
}

let randomCountry = chooseRandomCountry(country);

console.log(randomCountry);


let Student = ["Mwamuzi", "Shadrick", "Password1"]
let mySet = new Set(
   [
   Student[0],Student[1], 
   Student[2],randomCountry,
   "Mwashadr",1999, "September"
])

console.log(mySet)

