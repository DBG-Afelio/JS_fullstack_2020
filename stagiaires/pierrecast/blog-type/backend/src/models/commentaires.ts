export class Commentaire {
    constructor (
        public id: number,
        public articleId: number,
        public titre: string,
        public nom: string,
        public prenom: string,
        public commentaire: string,
        public dateAjout: string,
    ) {

    }
}
