
/**
let text = "My favourite book \
is \"Harry Potter\"\
";

let time = new Date()

const mwamuzi = (a, b) => {
    console.log(text);
    return Math.random(a, b);
};

 * const mwamuzi: (a: any, b: any) => number
 */
/**

let calculator = mwamuzi;


function name() {
    let a = "abc";
    let b = "de";
    let c = "xyz";
    let d = a + b;
}


document.writeln(d); //abcde
let e = a.concat(c);
document.writeln(e); //abcxyz

let ElAdd = document.getElementById("container")
ElAdd.innerHTML = calculator(12, 33)
ElAdd.textContent = name()
*/

/**
 * Replacing objects in the sentences
 */
function Replacing() {
	let text = "My favourite book is \"Harry Potter\". I love this book so much.";
	let result = text.replace("book", "movie");
	
	document.writeln(result); //My favourite movie is "Harry Potter". I love this book so much.
	let result2 = text.replace(/book/g, "movie");
	document.writeln(result2); //My favourite movie is "Harry Potter". I love this
	
}



function alphabetic() {
	let a = "abc";
	let b = "de";
	let c = "abcd";
	
	console.log(a > b); //false
	console.log(b > c); //true
	console.log(a > c); //false
	console.log(a < b); //true
	console.log(b < c); //false
	console.log(a < c); //true
}


function MakingSpace() {
	let name = "Shadrick", age = 24
	let tryThis = name +" " + age
	document.write(tryThis.toLowerCase(), "<br> <br>")
    document.write(tryThis.toUpperCase(), "<br> <br>")
}







function BreakFunc() {
	let x = 2;
	switch(x && 3) {
	case 1:
	    document.write("1");
	    break;
	case 2:
	    document.write("21");
	    break;
	default:
	    document.write("3");
	}
}


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

	Result() {
		return this.height * this.width
	}
}


function getResult(params) {
	let box = new Rectangle(10, 10)
	console.log(box);
	console.log(box.Result());
}


class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

// Usage:
let user = new User(
	"You guys are using a Bugatti to drive to the grocery\
	 store right now, it is not necessary."
	 );
if (!user) {
	user.sayHi();
}



function ForLooping() {
	let fruits = [
		"Banana", "Orange", "Apple",
		"Mango", "Avocado", "Nektariner",
		"Kiwi", "Plommer", "Blaabery",
		"Titterbery", "Watermelom"
	]

	let fruitsLength = fruits.length;
	console.log(`The fruit number are: ${fruitsLength}`);

	for (
		let Initialise = 0;
		Initialise < fruitsLength; //2; //fruits.length; 
		Initialise++
		//?Initialise += Initialise
	) {
		let ElFruits = fruits[Initialise];

		console.log(ElFruits);
		//let ElFruitResult = document.getElementById("container")
		//ElFruitResult.innerHTML = ElFruits;
		//condition

	}

	
	console.log("--------------------------------")
}




function developerToolsInspector() {
	let x = Math.random();
	if (x > 10 ) {
	    console.log("Hello, it's nice to see you here.");
	}
	else {
	    console.log(x);
	}
}

//developerToolsInspector()


/**
 * function GetRandomNumber()
 */
function GetRandomNumber() {
	let randomNumber1_10 = Math.floor(Math.random() * 10 + 1)
	let person = {
		myName : "Shadrick",
		age : 24,
		School : "NOROFF",
		myStatus : "Student",
	}

	let Nettstudier= [];
		let school_age = prompt("Enter your age: ");
		let stundetName = prompt("Enter your name: ");
		if (school_age > 16 && str(stundetName)) {
			Nettstudier.push(str(school_stundet)) && 
			document.write(school_stundet)
		}





	console.log("Our Next Candidate is nr: " + randomNumber1_10);
	document.write("Our Next Candidate is nr: " + randomNumber1_10);

	//let randomNumber = Math.random();
	let guestRandomNumber = prompt("Please pass the number between 0 and 1", "10");
	let guestName = prompt("Enter your name here: ");
	let seatSms = "Please, choose your seat between 0 and 10"

	if (guestName == person.name) {
		alert(`\
		Hello ${guestName} !it's nice to see you here.\
		${randomNumber}`);
		let guestRandomNumber = prompt(seatSms);
		if (guestRandomNumber > 5 || person.age == 24) {
		}
	}
	else {
		alert(randomNumber);
	}
	//let randomNumber2 = prompt("Please pass the number between 0 and 1", "0.5");
	if (randomNumber > 0.5) {
		alert("Hello, it's nice to see you here.");
	}
	else {
		alert(randomNumber);
	}
}
GetRandomNumber()


