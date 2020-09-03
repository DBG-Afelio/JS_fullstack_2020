export interface ArticleDto {
    id: number;
    titre: string;
    contenu: string;
    auteur_id: number;
    date: Date;
    publie: boolean;
}
