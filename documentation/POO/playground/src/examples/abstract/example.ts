export abstract class Example {
    public nom: string = 'toto';
    
    constructor() {}

    public getNom() {
        return this.nom;
    }

    public abstract disBonjour():void;
}

export class MyExample extends Example {
    public disBonjour(): void {
        console.log ('bonjour' + this.nom);
    }
}

const ex = new MyExample();
ex.getNom();
ex.disBonjour();
