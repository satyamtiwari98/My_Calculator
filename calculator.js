let disp = 0;
let prev = 0;
let init = '+';
let result;

function clearCal() {

	result = 0;
	disp = 0;
	prev = 0;
	init = '+';
	document.getElementById("input").value = result;

}


function eval(getVal) {

	disp = disp + getVal;
	document.getElementById("input").value = disp;

}

function operation(operator) {

	switch (init) {

		case '+':
			result = parseFloat(parseFloat(prev) + parseFloat(disp));
			console.log(result);
			document.getElementById("input").value = result;
			break;

		case '-':
			result = parseFloat(parseFloat(prev) - parseFloat(disp));
			console.log(result);
			document.getElementById("input").value = result;
			break;

		case '*':
			result = parseFloat(parseFloat(prev) * parseFloat(disp));
			console.log(result);
			document.getElementById("input").value = result;
			break;

		case '/':
			result = parseFloat(parseFloat(prev) / parseFloat(disp));
			console.log(result);
			document.getElementById("input").value = result;
			break;

		case '=':
			console.log(result);
			document.getElementById("input").value = result;
			break;


	}

	prev = result;

	disp = 0;

	init = operator;

}



