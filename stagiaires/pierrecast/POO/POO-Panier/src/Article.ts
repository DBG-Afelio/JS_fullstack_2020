export class Article {
    private id: number;
    private title: string;
    private author: string
    private comment: string;
    private country: string;
    private price: number;
    private image: any;
    
    constructor(id: number, title: string,  author: string, comment: string, country: string, price: number, image: any){
        this.id = id;
        this.title = title;
        this.author = author;
        this.comment = comment;
        this.country = country;
        this.price = price;
        this.image = image;
    } 

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getComment(): string {
        return this.comment;
    }

    public getCountry(): string {
        return this.country;
    }

    public getPrice(): number {
        return this.price;
    }

    public getImage(): any {
        return this.image;
    }
}

//type Image = { grande: string, moyenne: string, petite: string, toute_petite: string };
