export interface ListCategoriesDto {
    Categories : CategorieItemDto[]
}

export interface CategorieItemDto {
    id: number,
    libelle: string,
    description: string
}
