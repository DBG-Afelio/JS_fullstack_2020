let tTva=document.getElementById('tauxTva');
let mTva=document.getElementById('montantTva');
let tvaCompris=document.getElementById('tvac');
let somme=document.getElementById('somme');
let select=document.getElementById('select');
const valider=document.getElementById('button');
let tauxTva;
let montantTva;
let tvac;
valider.addEventListener('click',()=>{
	if(somme.valueAsNumber<0){
		alert("Entrez une valeur positive");
	}else{

		switch(select.selectedOptions[0].value){
			case"6":tauxTva=6;
					montantTva=somme.valueAsNumber*0.06;
					tvac=somme.valueAsNumber+montantTva;
					
			break;

			case"12":tauxTva=12;
					montantTva=somme.valueAsNumber*0.12;
					tvac=somme.valueAsNumber+montantTva;
					
			break;

			case"21":tauxTva=21;
					montantTva=somme.valueAsNumber*0.21;
					tvac=somme.valueAsNumber+montantTva;
					
			break;

			case"0":tauxTva=0;
					montantTva=somme.valueAsNumber*0;
					tvac=somme.valueAsNumber+montantTva;
					
			break;
		}
		tTva.innerHTML=tauxTva+" %";
		mTva.innerHTML=montantTva+" euro";
		tvaCompris.innerHTML=tvac+" euro";

	}
})