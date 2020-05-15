/* -- Debut STILL TO BE DONE -------------------------------------------------
- filtre sur valeur rayon
- faire que les outputs varient en temps reel
- mise en forme/style avec CSS
- optimiser le script
- travailler sur les options
----- Fin STILL TO BE DONE---------------------------------------------------- */

// -- DEBUT DECLARATION VARIABLES --------------------------------------------

//***Elements
const rayonInputEl = document.getElementById("rayon");
const redRangeEl = document.getElementById("red");
const greenRangeEl = document.getElementById("green");
const blueRangeEl = document.getElementById("blue");
const alphaEl = document.getElementById("alpha");
const monCercle = document.querySelector("#mySVG circle");
//---identique a : const monCercle = document.getElementById("myCircle"); */
const redOutputEl = document.getElementById("redOutput");
const greenOutputEl = document.getElementById("greenOutput");
const blueOutputEl = document.getElementById("blueOutput");
const alphaOutputEl = document.getElementById("alphaOutput");

//***Values
let rayonVal = rayonInputEl.valueAsNumber;
let redRangeVal = redRangeEl.valueAsNumber;
let greenRangeVal = greenRangeEl.valueAsNumber;
let blueRangeVal = blueRangeEl.valueAsNumber;
let alphaVal = alphaEl.valueAsNumber;

// -- FIN DECLARATION VARIABLES -----------------------------------------------

//*** affichage des 'control range' values
redOutputEl.textContent = redRangeVal;
greenOutputEl.textContent = greenRangeVal;
blueOutputEl.textContent = blueRangeVal;
alphaOutputEl.textContent = alphaVal;

//*** Events :
rayonInputEl.addEventListener('change', drawCircle);
redRangeEl.addEventListener('change', drawCircle);
greenRangeEl.addEventListener('change', drawCircle);
blueRangeEl.addEventListener('change', drawCircle);
alphaEl.addEventListener('change', drawCircle);


//--My functions:

function drawCircle (){
//--reading------------
    rayonVal = rayonInputEl.valueAsNumber;
    redRangeVal = redRangeEl.valueAsNumber;
    greenRangeVal = greenRangeEl.valueAsNumber;
    blueRangeVal = blueRangeEl.valueAsNumber;
    alphaVal = alphaEl.valueAsNumber;
//--writing------------
    redOutputEl.textContent = redRangeVal;
    greenOutputEl.textContent = greenRangeVal;
    blueOutputEl.textContent = blueRangeVal;
    alphaOutputEl.textContent = alphaVal;

    monCercle.setAttribute("r", rayonVal);
    monCercle.setAttribute("cx", rayonVal);
    monCercle.setAttribute("cy", rayonVal);
    monCercle.setAttribute("fill", "rgba("+redRangeVal+","+greenRangeVal+","+blueRangeVal+","+alphaVal+")");
}
