import { ItemModel } from "./ItemModel";
import { Item } from "./Item";

export class Stock {
    public readonly listItem: ItemModel[] = [] ;

    constructor(itemInStock: ItemModel[]) {
            itemInStock.forEach(elt => {
                let item = new Item(elt.titre, elt.auteur, elt.commentaire, elt.pays, elt.prix, elt.image, elt.id);
                this.listItem.push(item);
            });
    }

    public getList(): null | ItemModel[] {
        return this.listItem !== [] ? this.listItem : null;
    }

    public getItemById(searchId: number): undefined | ItemModel{
        return this.listItem.find(item => item.getId() === searchId);
    }

}