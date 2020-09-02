import { CategorieItemDto } from "../dtos/list_categories_dtos";

export class Categorie {
    constructor (
        public id: number,
        public libelle: string,
        public description: string,
    ) {

    }

    public toArticleItemDto(): CategorieItemDto {
        return {
            id: this.id,
            libelle: this.libelle,
            description :this.description
        }
    }

    static fromDB(dbResult: {
        id: number;
        libelle: string;
        description: string;
    }) {
        return new Categorie(
            dbResult.id,
            dbResult.libelle,
            dbResult.description,
        );
    }
}
