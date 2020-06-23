import { Token } from "./Token";

export class Tower {
    private id: number
    private listTokens: Token[];
    
    constructor(id: number) {
        this.id = id;
        this.listTokens = []
    } 

    public getId(): number {
        return this.id;
    }

    public getListTokens(): Token[] {
        return this.listTokens;
    }

    public setListTokens(listTokens: Token[]) {
        this.listTokens = listTokens;
    }

    public init(): void {
        for (let i = 8; i > 0; i--) {
            this.listTokens.push(new Token(i));
        }
    }

    public getLastToken():Token|null {
        return (this.listTokens.length === 0) ? null : this.listTokens[this.listTokens.length-1];
    }
}
