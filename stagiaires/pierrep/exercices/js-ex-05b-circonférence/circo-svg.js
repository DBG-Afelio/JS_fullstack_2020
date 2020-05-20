const exo=document.forms;

let rValue;
let red;
let green;
let blue;
let alpha;
let rgba_var;

document.forms[0].circonfValidation.addEventListener('click', () => {

 	rValue  = document.forms[0].r.value;
 	red = document.getElementById("rgba-R").value;
 	green = document.getElementById("rgba-G").value;
 	blue = document.getElementById("rgba-B").value;
 	alpha = document.getElementById("rgba-A").value;
 	rgba_var = "rgba("+red+", "+green+", "+blue+", "+alpha+")";
 	

	document.getElementById("circle1").setAttribute("r", rValue);
	document.getElementById("circle1").setAttribute("fill", rgba_var);


	console.log(rgba_var);

 });


