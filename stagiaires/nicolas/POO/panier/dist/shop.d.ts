import { Article } from "./article";
export declare class Shop {
    protected articlesList: Article[];
    constructor(tab: any[]);
    getArticleById(id: number): Article | undefined;
    getArticlesList(): Article[];
}
