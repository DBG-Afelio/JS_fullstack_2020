import { ItemModel } from "./ItemModel";

export class Stock {
    public readonly listItem: ItemModel[] = [];

    constructor(itemInStock: ItemModel[]) {
        this.listItem = itemInStock;
    }

    public getList(): null | ItemModel[] {
        return this.listItem !== [] ? this.listItem : null;
    }

    public getItemById(searchId:number): undefined | ItemModel{
        return this.listItem.find(item => item.getId() === searchId);
    }
}