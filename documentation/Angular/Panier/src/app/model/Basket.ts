import { Command } from './Command';
import { Article } from './Article';
import { Shop } from './Shop';

export class Basket {
    private listCommands: Command[];

    constructor() {
        this.listCommands = [];
    }

    public getListCommand(): Command[]
    {
        return this.listCommands;
    }

    public findCommand(article :Article): Command | undefined
    {
        return this.listCommands.find(command => command.getArticle().getId() === article.getId());
    }

    public updateBasket(article: Article, quantity: number, price: number): void
    {
        let command = this.findCommand(article);
        if (!command) {
            if (quantity != 0) {
                let command = new Command(article, price, quantity);
                this.addCommand(command);
            }
        } else {
            if (quantity != 0) {
                this.updateCommand(command, quantity);
            } else {
                this.deleteCommand(command);
            }
        }

        /*this.save();*/
    }

    private addCommand(command: Command): void
    {
        this.listCommands.push(command);
    }

    private updateCommand(command: Command, quantity: number): void
    {
        let commandToUpdate = this.listCommands.find(currentCommand => currentCommand === command);
        if (commandToUpdate) {
            commandToUpdate.setQuantity(quantity);
        }
    }

    private deleteCommand(command: Command): void
    {
        let index = this.listCommands.indexOf(command);
        this.listCommands.splice(index, 1);
    }

    public empty() :void
    {
        this.listCommands = [];
    }

    public getTotal(): {totalQuantity: number, totalPrice: number}
    {
       let total = {totalQuantity: 0, totalPrice: 0};
       this.listCommands.forEach(command => {
           total.totalQuantity += command.getQuantity();
           total.totalPrice += command.getPrice() * command.getQuantity();
       });

       return total;
    }

    /*private save(): void
    {
        localStorage.setItem('basket', JSON.stringify(this.listCommands));
        //console.log('savedStorage', localStorage.getItem('basket'));
    }*/

    public retrieve(shop: Shop): Basket
    {
        let basket = new Basket();
        /*let storageJSON = localStorage.getItem('basket');
        let storage = [];
        if (storageJSON) {
            storage = JSON.parse(storageJSON).toBasket();
            storage.forEach((item:any) => {
                let command = Basket.toCommand(item);
                if (shop.getArticleById(command.getArticle().getId())){
                    basket.getListCommand().push(command);
                }
            });
        } */

        return basket;
    }

    public static toCommand(elt: any): Command {
        return new Command(
            elt.article.toArticle(),
            elt.price as number,
            elt.quantity as number,
        );
    }

    public static toArticle(elt: any): Article {
        return new Article(
            elt.id as number,
            elt.title as string,
            elt.author as string,
            elt.comment as string,
            elt.country as string,
            elt.price as number,
            elt.image as any,
        );
    }
}
