// VARIABLES
let radiusEntry;
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const svgSandbox = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const validateRadius = document.querySelector(".validate-radius");
let redValue = document.querySelector("input[name='r-range']");
let greenValue = document.querySelector("input[name='g-range']");
let blueValue = document.querySelector("input[name='b-range']");
let alphaValue = document.querySelector("input[name='a-range']");


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
circle.style.strokeWidth = "5px";
circle.style.stroke = "black";


let arrayColor = [redValue, greenValue, blueValue, alphaValue]

arrayColor.forEach((range) => {

    range.addEventListener("change", function() {
        console.log(range.value);
        circle.setAttribute("fill", "rgba: ");
    })

})

validateRadius.addEventListener("click", function() {

 radiusEntry = Number(document.querySelector(".radius-entry").value)
 console.log(radiusEntry);

})




// console.log(greenValue)
    