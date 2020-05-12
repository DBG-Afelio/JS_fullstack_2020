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
circleOutput.style.height = "500px"
/*fin dimension de circleOutput*/


validate.addEventListener('click',(event) => {
    
    let diametre = (circoInput.value/2*Math.PI)*2;
    
    
    if(diametre > parseInt(circleOutput.style.height, 10)){
       
       alert("le cercle est trop grand et à été réduit");
       circle.setAttribute('r', parseInt(circleOutput.style.height, 10)/2 );
        
    }else{
        
        circle.setAttribute('r', diametre/2);
        circle.setAttribute('cx', diametre/2);
        circle.setAttribute('cy', diametre/2);
        
    }
    
    circleSvg.style.width = diametre;
    circleSvg.style.height = diametre;
        
    circle.setAttribute('fill',`rgba(${redInput.value}, ${greenInput.value}, ${blueInput.value}, ${alphaInput.value})`);
    
    
});


/*Empêcher la validation auto du bouton validate*/
validate.addEventListener('click',(event) => {
    
    event.preventDefault();
    
});
/*--------------------------------*/