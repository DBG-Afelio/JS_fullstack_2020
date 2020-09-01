export class Article {
    constructor(
        private id: number,
        private titre: string,
        private contenu: string,
        private auteurs_id: number,
        private date: Date,
        private publie: boolean
    ) {}
    
}