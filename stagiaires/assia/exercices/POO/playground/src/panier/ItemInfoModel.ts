export interface ItemInfoModel {
    readonly titre: string,
    readonly auteur: string,
    readonly commentaire: string,
    readonly pays: string,
    readonly prix: string,
    readonly image: {
        grande: string,
        moyenne: string,
        petite: string,
        toute_petite: string,
    },
    readonly id: number
}