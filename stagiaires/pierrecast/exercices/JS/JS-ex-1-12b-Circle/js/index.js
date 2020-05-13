const rgba = [];
const oFace = document.querySelector('#faceSVG');
const oSVG = document.querySelector('#mySVG');
const oSubmit= document.querySelector('#submit');
const replace = function (e) {
	let oCircle = e.target;
	oSVG.appendChild(oCircle);
}

oSubmit.addEventListener('click', function (e) {
	e.preventDefault();
	let ray = getRay();
	let rgba = getValues();
	let pos = getPosition();
	
	if (Number.isInteger(ray) && ray > 0) {
		draw(ray, rgba, pos); 
	} else {
		alert("Veuillez entrer un nombre entier positif");
	}

	return false;
});

function getValues() {
	let rgba = {
		'red' : Number(document.querySelector('#red').value),
		'blue' : Number(document.querySelector('#blue').value),
		'green' : Number(document.querySelector('#green').value),
		'alpha' : Number(document.querySelector('#alpha').value),
	};
	
	return rgba;
}

function getPosition() {
	let pos = {
		'cx' : Number(document.querySelector('#cx').value),
		'cy' : Number(document.querySelector('#cy').value),
		
	};
	
	return pos;
}

function getRay() {
	ray = Number(document.querySelector('#rayon').value);
	
	return ray;
}

function draw(ray, rgba, pos) {
	
	const oCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	oCircle.setAttribute('cx', pos.cx);
	oCircle.setAttribute('cy', pos.cy);
	oCircle.setAttribute('r', ray);

	oCircle.setAttribute('fill', 'rgb('+rgba.red+', '+rgba.green+', '+rgba.blue+')');
	oCircle.setAttribute('fill-opacity', rgba.alpha);
	oSVG.appendChild(oCircle);

	// placer l'écouteur
	 oCircle.addEventListener('click', replace);
}
