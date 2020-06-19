import { Article } from "./article";
export declare class OrderedArticle {
    protected article: Article;
    protected price: number;
    protected quantity: number;
    constructor(article: Article, quantity: number);
    getArticle(): Article;
    getPrice(): number;
    getQuantity(): number;
    setQuantity(newQuantity: number): void;
    getTotalPrice(): number;
}
