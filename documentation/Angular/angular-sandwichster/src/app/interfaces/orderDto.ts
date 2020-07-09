export interface OrderDto {
    user_id: number,
    product_id: number,
    option_id: number[],
    paye: boolean,
    id: number,
    date: string
}
