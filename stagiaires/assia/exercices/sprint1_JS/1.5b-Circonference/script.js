
// declaration des variables EL du form
var rayonEl = document.getElementById("rayon");
var color1El = document.getElementById("color1");
var color2El = document.getElementById("color1");
var color3El = document.getElementById("color1");
var color4El = document.getElementById("color1");
var confirmEl = document.getElementById("OK-button");

var redRangeEl = document.getElementById("red");
var greenRangeEl = document.getElementById("green");
var blueRangeEl = document.getElementById("blue");
var alphaRangeEl = document.getElementById("alpha");

var redRangeVal = redRangeEl.value;
var greenRangeVal = greenRangeEl.value;
var blueRangeVal = blueRangeEl.value;
var alphaRangeVal = alphaRangeEl.value;

//ou var monCercle = document.querySelector("#mySVG circle");//
var monCercle = document.querySelector("#mySVG");

//scruter
confirmEl.addEventListener("click", isNbValid);

//fonctions
function isNbValid (rayonEl){
    var rayonVal = Number(rayonEl.value);
}
