const circoInput =  document.getElementById('circoInput');

const colorInputs =  document.querySelectorAll('.colorInput');

const redInput =  document.getElementById('redInput');
const greenInput =  document.getElementById('greenInput');
const blueInput =  document.getElementById('blueInput');
const alphaInput =  document.getElementById('alphaInput');

const validate =  document.getElementById('validateValues');

const circle = document.getElementById('circle');
const circleSvg = document.getElementById('circleSvg');
const circleOutput = document.getElementById('circleOutput');
/*dimension de circleOutput*/
circleOutput.style.height = "500px";

/*fin dimension de circleOutput*/


validate.addEventListener('click',(event) => {
    
    let rayon = circoInput.valueAsNumber;
    let diametre = rayon*2;
    const referenceValue = Math.min(circleSvg.clientHeight, circleSvg.clientWidth)
    
    
    if(diametre > referenceValue){
       
        alert("le cercle est trop grand et à été réduit");
        rayon = referenceValue/2;
        diametre = referenceValue;
        
    } else if (rayon  <= 0){
        rayon = 0;
        diametre = 0;
    }

    circle.setAttribute('r',  rayon);
    circle.setAttribute('cx', diametre/2);
    circle.setAttribute('cy', diametre/2);

    circle.setAttribute('fill',`rgba(${redInput.value}, ${greenInput.value}, ${blueInput.value}, ${alphaInput.value})`);

});


/*Empêcher la validation auto du bouton validate*/
validate.addEventListener('click',(event) => {
    
    event.preventDefault();
    
});
/*--------------------------------*/