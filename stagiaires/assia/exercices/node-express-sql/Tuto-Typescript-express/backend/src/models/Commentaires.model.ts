export class Commentaires {
    constructor(
        private id: number,
        private titre: string,
        private contenu: string,
        private articleId: number,
        private nom: string,
        private prenom: string,
        private date: Date
    ) {}

}