export interface ISerializable {
    serialize(): string;
    unserialize(saveString: string): any;
}

export interface IRegenerateIdable {
    regenerateID(): string;
}

export class Article implements ISerializable, IRegenerateIdable {

    private titre: string;
    private id: string;

    constructor(titre: string, id:string) {
        this.id = id;
        this.titre = titre;
    }

    serialize(): string {
        return `id:${this.id},titre:${this.titre}`;
    }

    unserialize(saveString: string) {
        const reg = /^id:(\.+),titre:(\.+)$/;
        const matche = saveString.match(reg);
        this.id = matche[1];
        this.titre = matche[2];
    }

    regenerateID() : string {
        this.id = 'newID';
        return this.id;
    }
}
