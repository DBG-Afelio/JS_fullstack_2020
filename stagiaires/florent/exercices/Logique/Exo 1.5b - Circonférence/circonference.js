const red=document.getElementById('rouge');
const blue=document.getElementById('bleu');
const green=document.getElementById('vert');
const opacity=document.getElementById('opacity');
let couleur=document.getElementById('rgba');

document.getElementById('sub').addEventListener('click', execute);

function execute(){
    const nbre = document.getElementById('circonference').value;
    if (nbre !== "" && nbre >= 0 && Number.isInteger(Number(nbre))) {
        let circle = document.getElementById('cercle');
        circle.setAttribute("r", nbre);
        circle.setAttribute("fill",`rgba(${red.value},${green.value},${blue.value},${opacity.value})`);
	    couleur.innerHTML=`rgba(${red.value},${green.value},${blue.value},${opacity.value})`;
        document.getElementById('reponse').value = "";
    } else {
        document.getElementById('reponse').value = "Valeurs non valide!";
    }
}