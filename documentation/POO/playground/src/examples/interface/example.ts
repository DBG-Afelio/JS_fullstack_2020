export interface Example {
    nom: string;
    getNom(): string;
}

export class MyExample implements Example {
    nom: string= 'toto';
    prenom: string = 'Jo';

    getNom(): string {
        return 'jojo';
    }

    getPrenom(): string{
        return this.prenom;
    }
}
export class MyExample2 implements Example {
    nom: string= 'toto';
    prenom: string = 'Jo';

    getNom(): string {
        return this.nom+' '+this.prenom;
    }

    getPrenom(): string{
        return this.prenom;
    }
}

export class MyClass{
    constructor (ex: Example) {
        console.log(ex.getNom())
    }
}
const myClass = new MyClass(new MyExample());
const myClass2 = new MyClass(new MyExample2());
