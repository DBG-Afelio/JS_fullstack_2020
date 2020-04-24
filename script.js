const sommeT=document.getElementById("somme");
const soumettre=document.getElementById("envoyer");

let billets=[500,200,100,20,10,5,2,1];
let nBillet=[];

//.......................................................................................

function deconstruct(somme){

  //Reinitialiser le tableau nBillet
  nBillet.splice(0);

  //Nombre de billet  
  let b= 0;

  //Indice tab billets
  let i;
  
  for(i=0;i<billets.length;i++){
      if(somme>=billets[i]){
          b=(somme-somme%billets[i])/billets[i];//nBre de Billets
          somme = somme%billets[i];//reste de la somme des billets
          console.log(somme); 
      }else{
        b=0;
      }
      //affichage
      nBillet.push(" "+billets[i].toString()+" = "+b); 
      console.log(b);  
  };  
  return nBillet;
}

//.......................................................................................
//Renvoie la valeur
soumettre.addEventListener("click",()=>{
  
  document.getElementById("result").textContent="Résultat : "+ deconstruct(sommeT.valueAsNumber);
  
});
