// Way 1
let structure = {
    nom : 'Boogaerts'
}

function disNomFct (str: any) {
    console.log('Hello ', str.nom);
    
}
disNomFct(structure);


// Way 2
export class Personne {
    nom = 'Boogaerts';
    disNomMethode() {
        console.log('Hello ', this.nom);  
    }
}

const p1 = new Personne();
p1.disNomMethode();