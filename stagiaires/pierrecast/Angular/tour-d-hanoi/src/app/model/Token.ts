export class Token {
    private size: number;
    
    constructor(size: number){
        this.size = size;
    } 

    public getSize(): number {
        return this.size;
    }
}
