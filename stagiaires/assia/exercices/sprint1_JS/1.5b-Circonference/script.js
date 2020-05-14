
//--declaration Elements du form
const rayonInputEl = document.getElementById("rayon");
const redRangeEl = document.getElementById("red");
const greenRangeEl = document.getElementById("green");
const blueRangeEl = document.getElementById("blue");
const alphaEl = document.getElementById("alpha");

const monCercle = document.querySelector("#mySVG circle");
//identique a : const monCercle = document.getElementById("myCircle");

//--Listening to :
rayonInputEl.addEventListener('change', drawCircle);
redRangeEl.addEventListener('change', drawCircle);
greenRangeEl.addEventListener('change', drawCircle);
blueRangeEl.addEventListener('change', drawCircle);
alphaEl.addEventListener('change', drawCircle);

//--My functions:

function drawCircle (){
//--reading------------
    const rayonVal = rayonInputEl.valueAsNumber;
    const redRangeVal = redRangeEl.valueAsNumber;
    const greenRangeVal = greenRangeEl.valueAsNumber;
    const blueRangeVal = blueRangeEl.valueAsNumber;
    const alphaVal = alphaEl.valueAsNumber;
//--writing------------
    monCercle.setAttribute("r", rayonVal);
    monCercle.setAttribute("cx", rayonVal);
    monCercle.setAttribute("cy", rayonVal);
    monCercle.setAttribute("fill", "rgba("+redRangeVal+","+greenRangeVal+","+blueRangeVal+","+alphaVal+")");
}
