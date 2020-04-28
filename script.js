const sommeT=document.getElementById("somme");
const soumettre=document.getElementById("envoyer");

let billets=[500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.01];
let nBillet=[];

//.......................................................................................

function deconstruct(somme){
	
	  
	  nBillet.splice(0);                 					//Reinitialiser le tableau nBillet
	  let b=0;                          					//Nombre de billet 
	  let i;                             					//Indice tab billets
	  if(isNaN(sommeT.value)||sommeT.value<=0){

	  	window.alert("Entrez une valeur correcte, sombre cretin !");

 	 }else { 

      for(i=0;i<billets.length;i++){

	      if(somme>=billets[i]){

	          b=(somme-somme%billets[i])/billets[i];		//nBre de Billets
	          somme = somme%billets[i];						//reste de la somme des billets
	          console.log(somme);

	      }else{

	        b=0;

	      }
	      nBillet.push(" "+billets[i].toString()+" = "+b);  //affichage
	      console.log(b); 

	  	};  

  }
  return nBillet;

}

//.......................................................................................
//Renvoie la valeur
soumettre.addEventListener("click",()=>{
  
  document.getElementById("result").textContent="Résultat : "+ deconstruct(sommeT.value);
  
});
