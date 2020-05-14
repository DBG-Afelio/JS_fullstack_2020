
// VARIABLES
const playground = document.querySelector('#playground');
const svg = document.querySelector("#circle-svg");
const circle = document.createElement("circle");


// PROGRAMME
playground.style.width = "900px";
playground.style.height = "600px";
svg.style.width = "600px";
svg.style.height = "600px";


circle.setAttribute("x","0");
circle.setAttribute("y","0");
circle.setAttribute("cx","50");
circle.setAttribute("cy","50");
circle.setAttribute("r","50");
circle.style.fill = "green";
svg.appendChild(circle);


    