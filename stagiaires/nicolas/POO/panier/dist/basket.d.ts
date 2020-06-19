import { OrderedArticle } from "./orderedArticle";
import { Article } from "./article";
export declare class Basket {
    protected orderedArticlesList: OrderedArticle[];
    constructor();
    private addArticle;
    private updateArticle;
    private deleteArticle;
    updateBasket(article: Article, quantity: number): Boolean;
    findArticle(article: Article): OrderedArticle | undefined;
    getOrderedArticlesList(): OrderedArticle[];
    getTotal(): {
        totalQuantity: Number;
        totalPrice: Number;
    };
    empty(): void;
}
