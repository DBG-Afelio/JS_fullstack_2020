import { Command } from './Command';
import { Article } from 'src/app/article';

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
        return this.listCommands.find(command => command.article.id === article.id);
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

    addCommand(command: Command): void
    {
        this.listCommands.push(command);
    }

    updateCommand(command: Command, quantity: number): void
    {
        let commandToUpdate = this.listCommands.find(currentCommand => currentCommand === command);
        if (commandToUpdate) {
            commandToUpdate.setQuantity(quantity);
        }
    }

    deleteCommand(command: Command): void
    {
        let index = this.listCommands.indexOf(command);
        this.listCommands.splice(index, 1);
    }

    empty() :void
    {
        this.listCommands = [];
    }

    getTotal(): {totalQuantity: number, totalPrice: number}
    {
       let total = {totalQuantity: 0, totalPrice: 0};
       this.listCommands.forEach(command => {
           total.totalQuantity += command.quantity;
           total.totalPrice += command.price * command.quantity;
       });

       return total;
    }

    /*private save(): void
    {
        localStorage.setItem('basket', JSON.stringify(this.listCommands));
        //console.log('savedStorage', localStorage.getItem('basket'));
    }*/

    public static toCommand(elt: any): Command {
        return new Command(
            elt.article.toArticle(),
            elt.price as number,
            elt.quantity as number,
        );
    }

}