export interface IOrderDto {
    user_id: number,
    product_id: number,
    option_ids: number[],
    paye: boolean,
    id: number,
    date: string
}