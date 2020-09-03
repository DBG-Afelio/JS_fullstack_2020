export interface ListCensuresDto {
    Censures : CensureItemDto[]
}

export interface CensureItemDto {
    id: number,
    mot: string,
    interdit: boolean
}