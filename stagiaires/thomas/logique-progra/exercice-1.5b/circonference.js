// VARIABLES
let radiusEntry;
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const svgSandbox = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const validateRadius = document.querySelector(".validate-radius");
let redValue = Number(document.querySelector("input[name='r-range']").value);
let greenValue = Number(document.querySelector("input[name='g-range']").value);
let blueValue = Number(document.querySelector("input[name='b-range']").value);
let alphaValue = Number(document.querySelector("input[name='a-range']").value);


// START 

// redValue = 0;
// greenValue = 0;
// blueValue = 0;
// alphaValue = 0;


//SVG SANDBOX
document.body.append(svgSandbox);
svgSandbox.classList.add("svg-sandbox");

// ----
svgSandbox.append(circle);
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "50");
circle.style.fill = "gray";
circle.style.strokeWidth = "5px";
circle.style.stroke = "black";


let arrayColor

validateRadius.addEventListener("click", function() {

 radiusEntry = Number(document.querySelector(".radius-entry").value)
 console.log(radiusEntry);

})




console.log(greenValue)
    