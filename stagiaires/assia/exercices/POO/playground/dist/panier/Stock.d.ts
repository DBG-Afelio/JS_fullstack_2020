import { ItemModel } from "./ItemModel";
export declare class Stock {
    readonly listItem: ItemModel[];
    constructor(itemInStock: ItemModel[]);
    getList(): null | ItemModel[];
    getItemById(searchId: number): undefined | ItemModel;
}
