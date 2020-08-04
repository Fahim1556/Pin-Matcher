document.getElementById("generate-pin-btn").addEventListener("click", function() {
	generateRandomDigit("left-text-area");
})


function generateRandomDigit(id) {
	let radomDigit = Math.floor(1000 + Math.random() * 9000);
	document.getElementById(id).value = radomDigit;
}


function insert(value) {
	document.getElementById("right-text-area").value += value;
}
document.getElementById("submitBtn").addEventListener("click", function() {
	let value = document.getElementById("right-text-area").value;
	if(value.length > 0) {
		cheakValueMatch();
	}

	clearFields();
})


function cheakValueMatch() {
	
	document.getElementById("match").style.display = "none";
	document.getElementById("unMatch").style.display = "none";
	let leftAreaValue = document.getElementById("left-text-area").value;
	let rightAreaValue = document.getElementById("right-text-area").value;
	if(leftAreaValue == rightAreaValue) {
		document.getElementById("match").style.display = "block";
	} else {
		document.getElementById("unMatch").style.display = "block";
		decrementValue();
	}
}

function clearFields() {

	document.getElementById("right-text-area").value = "";
}


function back() {

	let value = document.getElementById("right-text-area").value;
	let newValue = value.length - 1;
	document.getElementById("right-text-area").value = value.substring(0, newValue);

}


function decrementValue() {

	let value = document.getElementById("try-value").innerText;
	value--;
	document.getElementById("try-value").innerText = value;
	if(value == 0) {
		document.getElementById("submitBtn").disabled = true;

	}
}