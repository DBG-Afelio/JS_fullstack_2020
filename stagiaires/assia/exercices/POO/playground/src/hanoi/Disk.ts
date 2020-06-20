export class Disk {

    constructor(private id: number) {
        this.id = id;
    }

    public setId(idIn: number):void {
        this.id = idIn;
    }

    public getId(): number{
        return this.id;
    }
}