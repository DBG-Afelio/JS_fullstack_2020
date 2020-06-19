export class Article{

    protected title : string;
    protected price : number;
    protected img : string;
    protected id : number;

    constructor(title:string, price:string, img:string,id:number ){
        this.title = title;
        this.price = parseFloat(price);
        this.img = img;
        this.id = id;
    }
    getTitle() : string{

        return this.title

    }
    getPrice() : number{

        return this.price

    }
    getImg() : string{

        return this.img

    }
    getId() : number{

        return this.id

    }
}