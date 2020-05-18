const red=document.getElementById('red');
const blue=document.getElementById('blue');
const green=document.getElementById('green');
const opacity=document.getElementById('opacity');
let rgbaAffiche=document.getElementById('rgbaAffiche');
const button=document.getElementById('button');
let cercle=document.getElementById('cercle');
button.addEventListener('click',()=>{
	let circo=document.getElementById('circo').value;
	if(circo<0){
		alert("Entrée une valeur positive");
	}else if (circo>1500){
		alert("Entrée une valeur inférieur à 1500")
	}else{
	let rayon =circo/(2*3.1416);
	console.log(rayon);
	cercle.setAttribute("r",rayon);
	cercle.setAttribute("fill",`rgba(${red.value},${green.value},${blue.value},${opacity.value})`);
	rgbaAffiche.innerHTML=`rgba(${red.value},${green.value},${blue.value},${opacity.value})`;



	}
})

