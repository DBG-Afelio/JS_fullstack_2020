export declare class Cochon {
    private nom;
    private sexe;
    protected ddn: Date;
    private couleur?;
    constructor(nom: string, sexe?: string);
    disBonjour(): void;
    get Sexe(): string;
    set Sexe(v: string);
    getNom(): string;
    setNom(nom: string): string;
    setCouleur(couleur: string): void;
    getCouleur(): string | null | undefined;
    rencontreCochon(voisin: Cochon): Cochon | null;
}
