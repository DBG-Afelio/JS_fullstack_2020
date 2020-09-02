export class Commentaire{
    constructor(
        public id:number,
        public titre:string,
        public date:Date,
        public idAuteurCom:number,
        public idArticle:number
    ){}
}