var disp = 0;
var prev = 0;
var init = '+';
var result;

function clear(){
	result = 0;
	disp = 0;
	prev = 0;
	init = '+';
	document.getElementById("input").value = result;
}


function eval(operand){
	
	disp += operand;
	document.getElementById("input").value = disp;
}

function operation(operator){
	console.log(prev);
	switch (init){

		case '+':
		result = parseFloat(parseFloat(prev) + parseFloat(disp));
		document.getElementById("input").value = result;
		break;

		case '-':
		result = parseFloat(parseFloat(prev) - parseFloat(disp));
		document.getElementById("input").value = result;
		break;

		case '*':
		result = parseFloat(parseFloat(prev) * parseFloat(disp));
		document.getElementById("input").value = result;
		break;

		case '/':
		result = parseFloat(parseFloat(prev) / parseFloat(disp));
		document.getElementById("input").value = result;
		break;

		case '=':
		
		document.getElementById("input").value = result;
		break;

	}

	prev=result;
	disp=0;
	init=operator;
}



