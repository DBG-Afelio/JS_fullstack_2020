import { CensureItemDto } from "../dtos/list_censures_dtos";

export class Censure {
    constructor (
        public id: number,
        public mot: string,
        public interdit: boolean,
    ) {

    }

    public toArticleItemDto(): CensureItemDto {
        return {
            id: this.id,
            mot: this.mot,
            interdit :this.interdit
        }
    }

    static fromDB(dbResult: {
        id: number;
        mot: string;
        interdit: boolean;
    }) {
        return new Censure(
            dbResult.id,
            dbResult.mot,
            dbResult.interdit,
        );
    }
}
