// VARIABLES
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const svgSandbox = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const validateRadius = document.querySelector(".validate-radius");
const redRange = document.querySelector("input[name='r-range']");
const greenRange = document.querySelector("input[name='g-range']");
const blueRange = document.querySelector("input[name='b-range']");
const alphaRange = document.querySelector("input[name='a-range']");
const arrayOfRanges = [redRange, greenRange, blueRange, alphaRange];
const createCircle  = document.querySelector("#createNewCircle");
const reset  = document.querySelector("#reset");
const positionX = document.querySelector("#position-x");
const positionY = document.querySelector("#position-y");
const confirmPosition = document.querySelector("#confirmPosition");

// START 

//SVG SANDBOX
document.body.append(svgSandbox);
svgSandbox.classList.add("svg-sandbox");

arrayOfRanges.forEach((range) => {

    range.addEventListener("change", function() {
        circle.setAttribute("fill", "rgba(" + redRange.value + ", " + greenRange.value + ", " + blueRange.value + ", " + "0." + alphaRange.value + ")");
    })

})

validateRadius.addEventListener("click", function() {
    const radiusEntry = Number(document.querySelector(".radius-entry").value);
    circle.setAttribute("r", radiusEntry);
})

createCircle.addEventListener("click", function() {
    const radiusEntry = Number(document.querySelector(".radius-entry").value);
    svgSandbox.append(circle);
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", radiusEntry);
    circle.style.strokeWidth = "2px";
    circle.style.stroke = "black";
})

reset.addEventListener("click", function() {
    svgSandbox.innerHTML = "";
})

confirmPosition.addEventListener("click", function() {
    circle.setAttribute("cx", Number(positionX.value));
    circle.setAttribute("cy", Number(positionY.value));
})



    