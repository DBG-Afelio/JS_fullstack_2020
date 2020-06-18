import { Command } from './Command';
import { Article } from './Article';
import { Shop } from './Shop';

export class Basket {
    private listCommands: Command[];

    constructor() {
        this.listCommands = []; 
    }

    public getListCommand():Command[] 
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

        this.save();
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

    private save(): void
    {
        localStorage.setItem('basket', JSON.stringify(this.listCommands));
    }

    public retrieve(shop: Shop) :Basket 
    {
        let basket = new Basket();
        let storageJSON = localStorage.getItem('basket');
        let storage = [];
        if (storageJSON) {
            storage =  JSON.parse(storageJSON);
            storage.forEach(item => {
                let command = new Command(item.article, item.price, item.quantity);
                if (list.find(command => command === shop.findCommand(command.getArticle()))) {
                    basket.addCommand(command);
                }
            });
        } 
        let list = shop.getListArticles();
        
        return basket;
    }
        
    public getTotal(): {totalQuantity: number, totalPrice: number} 
    {
       let total = {totalQuantity: 0, totalPrice: 0}
       this.listCommands.forEach(command => {
           total.totalQuantity += command.getPrice(),
           total.totalPrice += command.getPrice() * command.getQuantity();
       });

       return total;
    }
}
