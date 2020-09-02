
// import { GetArticleDto } from './GetArticleDto';

export class Article {
    constructor (
        public id: number,
        public titre: string,
        public contenu: string,
        public auteurId: number,
        public date: Date,
        public publie: boolean
    ) {

    }


}