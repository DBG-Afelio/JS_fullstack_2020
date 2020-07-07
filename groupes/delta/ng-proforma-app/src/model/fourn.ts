export class Fourn {



    constructor(public  id : number ,
        public nom : string ,
        public description : string , 
        public ferme : boolean ,
        public archive : boolean ,
        public horaire :boolean[] ,
        public tel : string ){
            
            this.id = id ;
            this.nom = nom ;
            this.description = description ;
            this.ferme = ferme ; 
            this.archive = archive ;
            this.horaire = horaire ;
            this.tel = tel ; 
            

    }
}
