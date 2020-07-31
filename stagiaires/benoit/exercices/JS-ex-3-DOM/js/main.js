
window.onload = function() {
  document.forms[0].ch1.value = "Texte initial"; 
  document.forms[1].ch1.value = "Texte initial"; 
    }

// 1. - Un champ qui se vide lorsque l'on entre dedans.
document.forms[0].ch1.addEventListener('focus', (event) => {
  document.forms[0].ch1.value = "";  
  });

// 2. - Un champ qui se vide 
// lorsque l'on entre dedans et qui remet la valeur initiale si le champ est vide lorsqu'on le quitte.

let inputInsideText = document.forms[1].ch1;

inputInsideText.addEventListener('focus', (event) => {
  inputInsideText.value = "";  
  });

  inputInsideText.addEventListener('blur', (event) => {

    if(inputInsideText.innerHTML == ""){

      inputInsideText.value = "Texte initial";   
    }

  });

// 3. - Un champ dont la taille augmente lorsque l'on appuye sur une touche et qu'on est dedans.
//Event : keydown
//Property : size 

let changingSize = document.forms[2].ch1;

changingSize.addEventListener('focus', (event) => {
    document.addEventListener('keyup', changeSize);


    function changeSize() {
      changingSize.size++;
      }
});

// 4. - Un champ qui affiche les caractères quand la case est cochée, les masque sinon.
//Event : click
//Property : checked, type

let myInput = document.forms[3].myInput;

function showPassword(){

    if(myInput.type == "password"){
        myInput.type = "text"; 
    }
    else{
        myInput.type = "password";
    }
}

// 5. - Un champ qui affiche les caractères quand on maintient la souris enfoncé sur le carré, les masque sinon.
// Event : mousedown, mouseup
// Property : checked, type

let pushButton = document.forms[4].querySelector('.enfonce');
let textHidden = document.forms[4].textHidden;

pushButton.addEventListener('mousedown', e => {
    textHidden.type = "text"; 
});

pushButton.addEventListener('mouseup', e => {
  textHidden.type = "password"; 
});

// 6. - Un champ qui jete le focus quand on essaye de lui donner. 
// Event : focus
// Method : blur() 

document.forms[5].ch1.addEventListener('focus', () => {
  document.forms[5].ch1.blur(); 
});

// 7. - Un champ qui jette le focus quand essaye de lui donner et que la case à cocher n'est pas activée.<br/>
// Si le champ est rempli et que l'on décoche la case, on vide le champ.
// Si on coche la case, on amène le focus dans le champ, et on place la valeur 0;

function empty_field(){
  if(document.forms[6].cb1.checked == true){
    document.forms[6].field_checkbox_blur.value = "0";
    document.forms[6].field_checkbox_blur.focus();
  }
  else{
    document.forms[6].field_checkbox_blur.value = ""; 
  }

}

document.forms[6].field_checkbox_blur.addEventListener('focus', (event) => {
  if (document.forms[6].cb1.checked == false){

    document.forms[6].field_checkbox_blur.blur(); 

  }

});

// 8. - Un champ non modifiable qui s'incrémente ou se décrémente selon l'option sélectionnée
// Event : click
// Property : checked, value

function incrementDecrement(){
  if(document.forms[7][0].checked == true){
    document.forms[7].ch1.value++;
  }
  if(document.forms[7][1].checked == true){
    document.forms[7].ch1.value--;
  }
}

// 9. Le bouton "sauve" place la valeur actuelle du champ comme valeur par défaut. Le bouton "reset" fait son boulot...
// Event : click
// Property : value, defaultValue



document.forms[8].b1.addEventListener('click', event => {

  document.forms[8].ch1.defaultValue  = document.forms[8].ch1.value;

});

document.forms[8].b2.addEventListener('click', event => {

  document.forms[8].ch1.value = document.forms[8].ch1.defaultValue;

});

// 10. Place la valeur et le texte de l'option sélectionnée à l'intérieur des champs correspondants.
// Event : click
// Property : options(array), selectedOption, text, value

document.forms[9].itemSelect.addEventListener('click', event => {
 
  let selectedCollection = document.forms[9].itemSelect.selectedOptions;

  document.forms[9].ex10input1.value = selectedCollection[0].value;
  document.forms[9].ex10input2.value = selectedCollection[0].label;
});



// 11. Place les valeurs et les textes des options sélectionnées à l'intérieur des champs correspondants.

document.querySelector("input[name='ex10input1']").value = "";
document.querySelector("input[name='ex10input2']").value = "";

const arrayValue = [];
const arrayText = [];

document.forms[10].addEventListener('change', event => {

    Array.from(document.forms[10].s1.options).forEach((option) =>{

      if(option.selected){

        arrayValue.push(option.value);
        arrayText.push(option.text);

        document.querySelector("input[name='ex11input1']").value = arrayValue.join(", ");
        document.querySelector("input[name='ex11input2']").value = arrayText.join(", ");
      
      }
    })

  }
);

// 12. Permutte les valeurs des différents champs dans le sens de la flèche (en boucle).

let value1;
let value2;
let value3;
let value4;
let value5;

function pushLeft(){

  value1 = document.forms[11][0].value;
  value2 = document.forms[11][1].value;
  value3 = document.forms[11][2].value;
  value4 = document.forms[11][3].value;
  value5 = document.forms[11][4].value;

  document.forms[11][4].value = value1;
  document.forms[11][0].value = value2;
  document.forms[11][1].value = value3;
  document.forms[11][2].value = value4;
  document.forms[11][3].value = value5;
}

function pushRight(){

  value1 = document.forms[11][0].value;
  value2 = document.forms[11][1].value;
  value3 = document.forms[11][2].value;
  value4 = document.forms[11][3].value;
  value5 = document.forms[11][4].value;

  document.forms[11][1].value = value1;
  document.forms[11][2].value = value2;
  document.forms[11][3].value = value3;
  document.forms[11][4].value = value4;
  document.forms[11][0].value = value5;
}

//13. Faire basculer les items sélectionnés entre les deux listes.

const listLeft = document.forms[12].querySelector("select[name='s1']");
const listRight = document.forms[12].querySelector("select[name='s2']");
const options = document.forms[12].querySelectorAll('option');

document.querySelector("button[name='gauche13']").addEventListener('click', function(){

  options.forEach((option)=>{
    if(option.selected){
      listLeft.append(option)
    }
  })
})

document.querySelector("button[name='droite13']").addEventListener('click', function(){

  options.forEach((option)=>{
    if(option.selected){
      listRight.append(option)
    }
  })
})


//14. 3 Champs de 5 caractères qui ne sont accessibles que si les champs précédents sont remplis(genre entrée de clé)

let firstField13 = document.forms[13].c01;
let secondField13 = document.forms[13].c02;
let thirdField13 = document.forms[13].c03;

secondField13.addEventListener('focus', (event) => {

  if(firstField13.value.length !== 5){
    secondField13.blur(); 
  }

});

thirdField13.addEventListener('focus', (event) => {

  if(secondField13.value.length !== 5){
    thirdField13.blur(); 
  }

});

//15. Elément qui disparait lorsque l'on coche la case. Il réapparait lorsqu'on la décoche(style.display). 

let checkBox14 = document.forms[14].cb1;
let input14 = document.forms[14].inputAppearing;

if(checkBox14.checked === true){
  input14.style.display = "none";
}
if(checkBox14.checked === false){

  input14.style.display = "block";
}
function disappear(){

  if(checkBox14.checked === true){
    input14.style.display = "none";
  }
  if(checkBox14.checked === false){

    input14.style.display = "block";
  }
}

// 16. Un champ qui augmente en hauteur et en largeur de 1OOpx 
// à chaque fois que l'on entre le focus dedans (parseInt() 
// et style.height). Il retourne à son état initial en sortant. 

let input16 =  document.forms[15].input_16;

input16.addEventListener('focus', (event) => {
  let heigh_input = input16.clientHeight;
  parseInt(heigh_input);
  input16.style.height = "119px";
  input16.style.width = "260px";
});

input16.addEventListener('blur', (event) => {
  input16.style.height = "19px";
  input16.style.width = "160px";
});


// 17. Soit 4 carrés de couleur. Si on clique sur un on lui ajoute la classe 
// checked et on l'enlève à celui qui l'avait 
// <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">Ref</a>.

const listSquares = document.getElementsByClassName ('carre1');

document.addEventListener('click', function (event) {

	if (event.target.classList.contains("carre1")){

    for(let i = 0; i<listSquares.length; i++){

      listSquares[i].classList.remove("checked");
      
    }
    event.target.classList.add("checked");
  }

}, false);


// 18. Idem que le précédent mais on ajoute aussi la classe de couleur à un autre carré.
// (setAttribute(),getAttribute()))

const listSquares18 = document.getElementsByClassName ('carre2');
let colorGiven = "";

let squareOut = document.querySelector("div[name='out']");


document.addEventListener('click', function (event) {


	if(event.target.classList.contains("carre2")){

    colorGiven = event.target.getAttribute('data-color');

    for(let i = 0; i<listSquares18.length; i++){

      listSquares18[i].classList.remove("checked");
      
    }
    event.target.classList.add("checked");
    squareOut.classList.remove("rouge", "vert", "jaune", "bleu");
    squareOut.classList.add(colorGiven);

  }

}, false);

// ** Bonus **
// On clique sur l'image à droite pour lui donner le src de la dernière image de gauche sur laquelle on a cliqué

let srcGiven = "";

document.addEventListener('click', function (event) {

  if(event.target !== document.querySelector("img[name='idroite']")){
    srcGiven = event.target.src;

  }
  else if(srcGiven != ""){
    document.querySelector("img[name='idroite']").src = srcGiven;
  }


}, false);