import { Article } from './Article';
import { Quote } from '@angular/compiler';

export class ArticleCommande {
    constructor(
        public article: Article,
        public quantite: number,
        public panierId?: number,
    ) { }
    

   
    // getPrix(): number{
    //     return this.prix;
    // }
    // setPrix(prix: number): void{
    //     this.prix = prix;
    // }
    // getPrixTotal(): number{
    //     return this.quantite * this.prix;
    // }
    // getQtte(): number{
    //     return this.quantite;
    // }
    // setQtte(qtte: number): void{
    //     this.quantite = qtte;
    // }
}
