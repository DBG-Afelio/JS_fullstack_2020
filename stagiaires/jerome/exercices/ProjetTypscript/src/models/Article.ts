export class Article{
    constructor(
        public id:number,
        public titre:string,
        public contenu:string,
        public date:Date,
        public publie:boolean,
        public nomAuteur:string,
        public prenomAuteur:string,
        public emailAuteur:string,
        public presentationAuteur:string
    ){}
}