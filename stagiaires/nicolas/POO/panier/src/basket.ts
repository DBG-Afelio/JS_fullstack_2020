import { OrderedArticle } from "./orderedArticle";
import { Article } from "./article";

export class Basket{

    protected orderedArticlesList:OrderedArticle[]=[];
    constructor(){
        this.orderedArticlesList=[];
    }

    private addArticle(article:OrderedArticle):void{

        this.orderedArticlesList.push(article);

    }
    private updateArticle(article:OrderedArticle,quantity:number):void{

        article.setQuantity(quantity);

    }
    private deleteArticle(id:number):void{

        this.orderedArticlesList = this.orderedArticlesList.filter(element => id != element.getArticle().getId())

    }
    updateBasket(article:Article,quantity:number):Boolean{
        const orderedArticle = this.findArticle(article);
        if(orderedArticle){

            if(quantity === 0){

                this.deleteArticle(article.getId())
                return true

            }else{

                this.updateArticle(orderedArticle,quantity);
                return true
            }

        }else if(quantity>0){

            this.addArticle(new OrderedArticle(article,quantity));
            return true

        }else{

            return false

        }
        

    }
    findArticle(article:Article):OrderedArticle | undefined{

        return this.orderedArticlesList.find(element => element.getArticle().getId() === article.getId())

    }
    getOrderedArticlesList():OrderedArticle[]{

        return this.orderedArticlesList

    }
    getTotal():{totalQuantity:Number,totalPrice:Number}{
        let totalQuantity:number=0;
        let totalPrice:number=0;

        this.orderedArticlesList.forEach(element => {

            totalQuantity += element.getQuantity();
            totalPrice += element.getTotalPrice();

        })
        return {totalQuantity,totalPrice}
    }
    empty():void{

        this.orderedArticlesList = [];

    }
    /*save():void{



    }
    load(userShop:Shop,any[]):Basket{



    }*/
}