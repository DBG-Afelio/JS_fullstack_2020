
// declaration des variables EL du form
var rayonInputEl = document.getElementById("rayon");

var redRangeEl = document.getElementById("red");
var greenRangeEl = document.getElementById("green");
var blueRangeEl = document.getElementById("blue");
var alphaEl = document.getElementById("alpha");

//var monCercle = document.querySelector("#mySVG circle");
//var monCercle = document.querySelector("#mySVG");
var monCercle = document.getElementById("myCircle");

// ecoute
rayonInputEl.addEventListener('change', drawCircle);
redRangeEl.addEventListener('change', drawCircle);
greenRangeEl.addEventListener('change', drawCircle);
blueRangeEl.addEventListener('change', drawCircle);
alphaEl.addEventListener('change', drawCircle);

//********************

function drawCircle (){

//--reading------------
    var rayonVal = rayonInputEl.value;
    var redRangeVal = redRangeEl.value;
    var greenRangeVal = greenRangeEl.valueAsNumber;
    var blueRangeVal = blueRangeEl.valueAsNumber;
    var alphaVal = alphaEl.valueAsNumber;
//--writing------------
    monCercle.setAttribute("r", rayonVal);
    monCercle.setAttribute("cx", rayonVal);
    monCercle.setAttribute("cy", rayonVal);
    monCercle.setAttribute("fill", "rgba("+redRangeVal+","+greenRangeVal+","+blueRangeVal+","+alphaVal+")");

    //rougeEL.textContent = "hello" ; ca ca ne marche pas
    //rougeEL.value = "hello" ; ca ok
}
